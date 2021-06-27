package keeper

import (
	"bufio"
	"context"
	"errors"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/bifrost/x/bifrost/types"
	"net"
	"strconv"
	"strings"
	// "github.com/goat-systems/go-tezos/v4/keys"
)

// Executes send to tezos transaction and returns in case errors,
// If error occurs no token will be minted or deleted...

func ExecuteSendToTezos(goCtx context.Context, msg *types.MsgCreateSendToTezos, bifrostkeeper Keeper) error {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// By this time you shouldn't be getting any error but for sake of
	// golang's standard way of writing, Just handled error here too
	// Unexpected situation can occur unexpectedly....
	// Skip over error handlings at this section while reading the code...
	// unwrap sender
	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	amount, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return errors.New("Unable to parse amount")
	}

	// check balance of the account ....
	// try parsing the payment to coins to see if user has sufficient balance
	var payment sdk.Coin
	if msg.Denom == "token" {
		payment, err = sdk.ParseCoinNormalized(fmt.Sprintf("%v%s", msg.Amount, "token"))
		if err != nil {
			return errors.New("Uable to parse coins...")
		}
	} else if msg.Denom == "mutez" {
		payment, err = sdk.ParseCoinNormalized(fmt.Sprintf("%v%s", msg.Amount, "bifrost/mutez"))
		if err != nil {
			return errors.New("Uable to parse coins...")
		}
	} else {
		return errors.New("Invalid denom...")
	}

	// check if they have sufficient balance
	hasBalance := bifrostkeeper.BankKeeper.HasBalance(ctx, sender, payment)
	if !hasBalance {
		return errors.New("Your balance is less than given amount...")
	}

	// TODO: For signature...
	// everythin well generate signature ...
	// key, err := keys.FromBase58(msg.TezosSignerPrivateKey, keys.Ed25519)
	// if err != nil {
	// 	return err
	// }
	// mintSig, err := key.SignBytes([]byte(types.Msg_Mint))
	// if err != nil {
	// 	return err
	// }
	// mintSigStr := mintSig.ToBase58()

	// unlockSig, err := key.SignBytes([]byte(types.Msg_Unlock))
	// if err != nil {
	// 	return err
	// }
	// unlockSigStr := unlockSig.ToBase58()

	// signersAddress := key.PubKey.GetAddress()

	// TODO: BURN THE TOKENS HERE ...
	// This is similar to locking the token
	// In case the method returns error then
	// the tokens will be minted back to your account...
	if msg.Denom == "token" {
		err := bifrostkeeper.BurnTokens(ctx, sender, payment)
		// this shouldn't be happening...
		if err != nil {
			ctx.EventManager().EmitEvent(sdk.NewEvent("unable to burn tokens", sdk.NewAttribute("failed", "burn")))
			return errors.New("Unable to safe burn tokens")
		}
		ctx.EventManager().EmitEvent(sdk.NewEvent("Burned existing tokens...", sdk.NewAttribute("amount", msg.Amount)))

	} else if msg.Denom == "mutez" {
		// if msg.Denom is mutez burn mutez
		err := bifrostkeeper.SafeBurn(ctx, sender, "bifrost/"+msg.Denom, amount)
		// this shouldn't be happenning
		if err != nil {
			ctx.EventManager().EmitEvent(sdk.NewEvent("unable to safe burn voucher tokens", sdk.NewAttribute("failed", "burn")))
			return errors.New("Unable to safe burn voucher tokens")
		}
		ctx.EventManager().EmitEvent(sdk.NewEvent("Burned existing mutez...",
			sdk.NewAttribute("amount", msg.Amount)))
	}


	var instruction string
	if msg.Denom == "token" {
		instruction = fmt.Sprintf("mint %s %v\n", msg.TezosReceiver, msg.Amount)
	} else if msg.Denom == "mutez" {
		instruction = fmt.Sprintf("burn %s %v\n", msg.TezosReceiver, msg.Amount)
	}

	conn, err := net.Dial("tcp", types.BiOpAddr)
	if err != nil {
		return err
	}

	fmt.Fprintf(conn, instruction)

	status, err := bufio.NewReader(conn).ReadString('\n')
	if err != nil {
		return err
	}

	if strings.Contains(strings.TrimSpace(string(status)), "FAIL") {
		return errors.New(string(status))
	} else if strings.Contains(strings.TrimSpace(string(status)), "SUCCESS") {
		// if minted or unlocked tokens in tezos chain successfully
		// pass the message to message server so that it can burn the amount, denom of coins in cosmos pegzone...
		// do nothing because tokens are already burned
		return nil

	}

	return errors.New("look like there is still an error...")
}

func ExecuteReceivedFa12Txs(goCtx context.Context, msg *types.MsgCreateReceivedFa12Txs, bifrostkeeper Keeper) error {

	_ = sdk.UnwrapSDKContext(goCtx)
	uintAmtTemp, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return err
	}

	uintTxidTemp, err := strconv.ParseUint(msg.Txid, 10, 64)
	if err != nil {
		return err
	}

	isApprovalBool, err := strconv.ParseBool(msg.IsApproval)
	if err != nil {
		return err
	}

	// form a new TxsCosmos type
	newTx := types.Fa12CosmosTxs{
		TxId:           uintTxidTemp,
		TezosSender:    msg.TezosSender,
		CosmosReceiver: msg.CosmosReceiver,
		Amount:         uintAmtTemp,
		Denom:          msg.Denom,
		SrcChain:       msg.SrcChain,
		DestChain:      msg.DestChain,
		TxStatus:       msg.TxStatus,
		IsApproval:     isApprovalBool,
		Approver:       msg.Approver,
		Timestamp:      msg.Timestamp,
		RelayTimestamp: msg.RelayTimestamp,
	}

	// verify the transaction
	// dial the operation engine on relayer with verify instruction to verify the transaction is in tezos-chain
	isAlright, err := VerifyBifrostFa12Txs(newTx)
	if err != nil {
		return err
	}

	if !isAlright {
		return errors.New("Verification failed. Your txs seems malicious and forged. If not try increasing the relaying time per tx.")
	}

	// TODO: Verify signature here...

	return nil
}

func ExecuteReceivedTxs(goCtx context.Context, msg *types.MsgCreateReceivedTxs, bifrostkeeper Keeper) error {
	_ = sdk.UnwrapSDKContext(goCtx)

	// verify amount txid if they are uint
	uintAmtTemp, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return err
	}
	uintTxidTemp, err := strconv.ParseUint(msg.Txid, 10, 64)
	if err != nil {
		return err
	}

	// check if the denom is mutez
	if msg.Denom != "mutez" {
		return errors.New("Denom is not mutez")
	}

	// form a new TxsCosmos type
	newTx := types.TxsCosmos{
		TxId:           uintTxidTemp,
		TezosSender:    msg.TezosSender,
		CosmosReceiver: msg.CosmosReceiver,
		Amount:         uintAmtTemp,
		Denom:          msg.Denom,
		SrcChain:       msg.SrcChain,
		DestChain:      msg.DestChain,
		TxStatus:       msg.TxStatus,
		Timestamp:      msg.Timestamp,
		RelayTimestamp: msg.RelayTimestamp,
	}

	// dial the verification engine on relayer to verify the transaction is in tezos-chain
	isAlright, err := VerifyBifrostTezosTxs(newTx)
	if err != nil {
		return err
	}

	if !isAlright {
		return errors.New("Verification failed. Your txs seems malicious and forged. If not try increasing the relaying time per tx.")
	}

	// TODO: verify signature here...
	//...
	//...

	return nil
}
