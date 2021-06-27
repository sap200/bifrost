package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/bifrost/x/bifrost/types"
)

func (k msgServer) CreateReceivedTxs(goCtx context.Context, msg *types.MsgCreateReceivedTxs) (*types.MsgCreateReceivedTxsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// execute the transaction...
	// if err is not nil just return nil and err
	err := ExecuteReceivedTxs(goCtx, msg, k.Keeper)
	if err != nil {
		return nil, err
	}

	// otherwise mint the amount and send it to user's account...

	// convert the amount to uint format because it is expected by safeMint in argument
	// error can be just neglected ... probably not a best practice so I have included it
	amt, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return nil, err
	}

	// convert the address to sdk.AccAddress type because it is expected by safe mint
	addr, err := sdk.AccAddressFromBech32(msg.CosmosReceiver)
	if err != nil {
		return nil, err
	}

	// append bifrost/ as a prefix to the denom to represent it is actually coming from bifrost-bridge
	customDenom := "bifrost/" + msg.Denom

	// safe mint the representation of tezos token...
	err = k.Keeper.SafeMint(ctx, addr, customDenom, amt)
	if err != nil {
		return nil, err
	}

	var receivedTxs = types.ReceivedTxs{
		Creator:        msg.Creator,
		Txid:           msg.Txid,
		TezosSender:    msg.TezosSender,
		CosmosReceiver: msg.CosmosReceiver,
		Amount:         msg.Amount,
		Denom:          msg.Denom,
		SrcChain:       msg.SrcChain,
		DestChain:      msg.DestChain,
		TxStatus:       msg.TxStatus,
		Timestamp:      msg.Timestamp,
		RelayTimestamp: msg.RelayTimestamp,
	}

	id := k.AppendReceivedTxs(
		ctx,
		receivedTxs,
	)

	return &types.MsgCreateReceivedTxsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateReceivedTxs(goCtx context.Context, msg *types.MsgUpdateReceivedTxs) (*types.MsgUpdateReceivedTxsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var receivedTxs = types.ReceivedTxs{
		Creator:        msg.Creator,
		Id:             msg.Id,
		Txid:           msg.Txid,
		TezosSender:    msg.TezosSender,
		CosmosReceiver: msg.CosmosReceiver,
		Amount:         msg.Amount,
		Denom:          msg.Denom,
		SrcChain:       msg.SrcChain,
		DestChain:      msg.DestChain,
		TxStatus:       msg.TxStatus,
		Timestamp:      msg.Timestamp,
		RelayTimestamp: msg.RelayTimestamp,
	}

	// Checks that the element exists
	if !k.HasReceivedTxs(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetReceivedTxsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetReceivedTxs(ctx, receivedTxs)

	return &types.MsgUpdateReceivedTxsResponse{}, nil
}

func (k msgServer) DeleteReceivedTxs(goCtx context.Context, msg *types.MsgDeleteReceivedTxs) (*types.MsgDeleteReceivedTxsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasReceivedTxs(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetReceivedTxsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveReceivedTxs(ctx, msg.Id)

	return &types.MsgDeleteReceivedTxsResponse{}, nil
}
