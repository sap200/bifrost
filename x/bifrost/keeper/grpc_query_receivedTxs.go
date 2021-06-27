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

func (k Keeper) ReceivedTxsAll(c context.Context, req *types.QueryAllReceivedTxsRequest) (*types.QueryAllReceivedTxsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var receivedTxss []*types.ReceivedTxs
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	receivedTxsStore := prefix.NewStore(store, types.KeyPrefix(types.ReceivedTxsKey))

	pageRes, err := query.Paginate(receivedTxsStore, req.Pagination, func(key []byte, value []byte) error {
		var receivedTxs types.ReceivedTxs
		if err := k.cdc.UnmarshalBinaryBare(value, &receivedTxs); err != nil {
			return err
		}

		receivedTxss = append(receivedTxss, &receivedTxs)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReceivedTxsResponse{ReceivedTxs: receivedTxss, Pagination: pageRes}, nil
}

func (k Keeper) ReceivedTxs(c context.Context, req *types.QueryGetReceivedTxsRequest) (*types.QueryGetReceivedTxsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var receivedTxs types.ReceivedTxs
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasReceivedTxs(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetReceivedTxsIDBytes(req.Id)), &receivedTxs)

	return &types.QueryGetReceivedTxsResponse{ReceivedTxs: &receivedTxs}, nil
}
