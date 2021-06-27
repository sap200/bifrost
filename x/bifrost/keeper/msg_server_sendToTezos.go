package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/bifrost/x/bifrost/types"
)

func (k msgServer) CreateSendToTezos(goCtx context.Context, msg *types.MsgCreateSendToTezos) (*types.MsgCreateSendToTezosResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// execute the transaction....
	err := ExecuteSendToTezos(goCtx, msg, k.Keeper)
	if err != nil {
		sender, err := sdk.AccAddressFromBech32(msg.Creator)
		if err != nil {
			return nil, sdkerrors.ErrInvalidAddress
		}
		// parse amount to uint for safe burn
		amountStr := msg.Amount
		amount, err := strconv.ParseUint(amountStr, 10, 64)
		if err != nil {
			return nil, sdkerrors.ErrInvalidCoins
		}

		// In case message is error mint back the tokens
		// safe mint the representation of tezos token...
		if msg.Denom == "token" {
			err = k.Keeper.SafeMint(ctx, sender, "token", amount)
			if err != nil {
				return nil, err
			}
		} else if msg.Denom == "mutez" {
			err = k.Keeper.SafeMint(ctx, sender, "bifrost/mutez", amount)
			if err != nil {
				return nil, err
			}
		}

		return nil, err
	}

	var sendToTezos = types.SendToTezos{
		Creator:       msg.Creator,
		TezosReceiver: msg.TezosReceiver,
		Amount:        msg.Amount,
		Denom:         msg.Denom,
	}

	id := k.AppendSendToTezos(
		ctx,
		sendToTezos,
	)

	return &types.MsgCreateSendToTezosResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSendToTezos(goCtx context.Context, msg *types.MsgUpdateSendToTezos) (*types.MsgUpdateSendToTezosResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sendToTezos = types.SendToTezos{
		Creator:       msg.Creator,
		Id:            msg.Id,
		TezosReceiver: msg.TezosReceiver,
		Amount:        msg.Amount,
		Denom:         msg.Denom,
	}

	// Checks that the element exists
	if !k.HasSendToTezos(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSendToTezosOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSendToTezos(ctx, sendToTezos)

	return &types.MsgUpdateSendToTezosResponse{}, nil
}

func (k msgServer) DeleteSendToTezos(goCtx context.Context, msg *types.MsgDeleteSendToTezos) (*types.MsgDeleteSendToTezosResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSendToTezos(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSendToTezosOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSendToTezos(ctx, msg.Id)

	return &types.MsgDeleteSendToTezosResponse{}, nil
}
