package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sap200/bifrost/x/bifrost/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SendToTezosAll(c context.Context, req *types.QueryAllSendToTezosRequest) (*types.QueryAllSendToTezosResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sendToTezoss []*types.SendToTezos
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sendToTezosStore := prefix.NewStore(store, types.KeyPrefix(types.SendToTezosKey))

	pageRes, err := query.Paginate(sendToTezosStore, req.Pagination, func(key []byte, value []byte) error {
		var sendToTezos types.SendToTezos
		if err := k.cdc.UnmarshalBinaryBare(value, &sendToTezos); err != nil {
			return err
		}

		sendToTezoss = append(sendToTezoss, &sendToTezos)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSendToTezosResponse{SendToTezos: sendToTezoss, Pagination: pageRes}, nil
}

func (k Keeper) SendToTezos(c context.Context, req *types.QueryGetSendToTezosRequest) (*types.QueryGetSendToTezosResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sendToTezos types.SendToTezos
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSendToTezos(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSendToTezosIDBytes(req.Id)), &sendToTezos)

	return &types.QueryGetSendToTezosResponse{SendToTezos: &sendToTezos}, nil
}
