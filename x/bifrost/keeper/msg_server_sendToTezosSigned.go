package keeper

import (
	"context"
	"fmt"
	// "strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/bifrost/x/bifrost/types"
)

func (k msgServer) CreateSendToTezosSigned(goCtx context.Context, msg *types.MsgCreateSendToTezosSigned) (*types.MsgCreateSendToTezosSignedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// execute the transaction....
	// err := ExecuteSendToTezos(goCtx, msg, k.Keeper)
	// if err != nil {
	// 	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	// 	if err != nil {
	// 		return nil, sdkerrors.ErrInvalidAddress
	// 	}
	// 	// parse amount to uint for safe burn
	// 	amountStr := msg.Amount
	// 	amount, err := strconv.ParseUint(amountStr, 10, 64)
	// 	if err != nil {
	// 		return nil, sdkerrors.ErrInvalidCoins
	// 	}

	// 	// In case message is error mint back the tokens
	// 	// safe mint the representation of tezos token...
	// 	if msg.Denom == "token" {
	// 		err = k.Keeper.SafeMint(ctx, sender, "token", amount)
	// 		if err != nil {
	// 			return nil, err
	// 		}
	// 	} else if msg.Denom == "mutez" {
	// 		err = k.Keeper.SafeMint(ctx, sender, "bifrost/mutez", amount)
	// 		if err != nil {
	// 			return nil, err
	// 		}
	// 	}

	// 	return nil, err
	// }

	var sendToTezosSigned = types.SendToTezosSigned{
		Creator:               msg.Creator,
		TezosReceiver:         msg.TezosReceiver,
		Amount:                msg.Amount,
		Denom:                 msg.Denom,
		TezosSignerPrivateKey: msg.TezosSignerPrivateKey,
	}

	id := k.AppendSendToTezosSigned(
		ctx,
		sendToTezosSigned,
	)

	return &types.MsgCreateSendToTezosSignedResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSendToTezosSigned(goCtx context.Context, msg *types.MsgUpdateSendToTezosSigned) (*types.MsgUpdateSendToTezosSignedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sendToTezosSigned = types.SendToTezosSigned{
		Creator:               msg.Creator,
		Id:                    msg.Id,
		TezosReceiver:         msg.TezosReceiver,
		Amount:                msg.Amount,
		Denom:                 msg.Denom,
		TezosSignerPrivateKey: msg.TezosSignerPrivateKey,
	}

	// Checks that the element exists
	if !k.HasSendToTezosSigned(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSendToTezosSignedOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSendToTezosSigned(ctx, sendToTezosSigned)

	return &types.MsgUpdateSendToTezosSignedResponse{}, nil
}

func (k msgServer) DeleteSendToTezosSigned(goCtx context.Context, msg *types.MsgDeleteSendToTezosSigned) (*types.MsgDeleteSendToTezosSignedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSendToTezosSigned(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSendToTezosSignedOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSendToTezosSigned(ctx, msg.Id)

	return &types.MsgDeleteSendToTezosSignedResponse{}, nil
}
