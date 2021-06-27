package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/bifrost/x/bifrost/types"
)

func (k msgServer) CreateReceivedFa12Txs(goCtx context.Context, msg *types.MsgCreateReceivedFa12Txs) (*types.MsgCreateReceivedFa12TxsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// execute received fa12txs for verification...
	err := ExecuteReceivedFa12Txs(goCtx, msg, k.Keeper)
	// in case error return nil, error there's noting we can do.. other than unlocking tokens that side which is done by relayer..
	if err != nil {
		return nil, err
	}

	// in Case no error just mint the new tokens...
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

	// safe mint the representation of tezos token...
	err = k.Keeper.SafeMint(ctx, addr, "token", amt)
	if err != nil {
		return nil, err
	}

	var receivedFa12Txs = types.ReceivedFa12Txs{
		Creator:        msg.Creator,
		Txid:           msg.Txid,
		TezosSender:    msg.TezosSender,
		Denom:          msg.Denom,
		CosmosReceiver: msg.CosmosReceiver,
		Amount:         msg.Amount,
		SrcChain:       msg.SrcChain,
		DestChain:      msg.DestChain,
		TxStatus:       msg.TxStatus,
		IsApproval:     msg.IsApproval,
		Approver:       msg.Approver,
		Timestamp:      msg.Timestamp,
		RelayTimestamp: msg.RelayTimestamp,
	}

	id := k.AppendReceivedFa12Txs(
		ctx,
		receivedFa12Txs,
	)

	return &types.MsgCreateReceivedFa12TxsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateReceivedFa12Txs(goCtx context.Context, msg *types.MsgUpdateReceivedFa12Txs) (*types.MsgUpdateReceivedFa12TxsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var receivedFa12Txs = types.ReceivedFa12Txs{
		Creator:        msg.Creator,
		Id:             msg.Id,
		Txid:           msg.Txid,
		TezosSender:    msg.TezosSender,
		Denom:          msg.Denom,
		CosmosReceiver: msg.CosmosReceiver,
		Amount:         msg.Amount,
		SrcChain:       msg.SrcChain,
		DestChain:      msg.DestChain,
		TxStatus:       msg.TxStatus,
		IsApproval:     msg.IsApproval,
		Approver:       msg.Approver,
		Timestamp:      msg.Timestamp,
		RelayTimestamp: msg.RelayTimestamp,
	}

	// Checks that the element exists
	if !k.HasReceivedFa12Txs(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetReceivedFa12TxsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetReceivedFa12Txs(ctx, receivedFa12Txs)

	return &types.MsgUpdateReceivedFa12TxsResponse{}, nil
}

func (k msgServer) DeleteReceivedFa12Txs(goCtx context.Context, msg *types.MsgDeleteReceivedFa12Txs) (*types.MsgDeleteReceivedFa12TxsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasReceivedFa12Txs(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetReceivedFa12TxsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveReceivedFa12Txs(ctx, msg.Id)

	return &types.MsgDeleteReceivedFa12TxsResponse{}, nil
}
