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

func (k Keeper) ReceivedFa12TxsAll(c context.Context, req *types.QueryAllReceivedFa12TxsRequest) (*types.QueryAllReceivedFa12TxsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var receivedFa12Txss []*types.ReceivedFa12Txs
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	receivedFa12TxsStore := prefix.NewStore(store, types.KeyPrefix(types.ReceivedFa12TxsKey))

	pageRes, err := query.Paginate(receivedFa12TxsStore, req.Pagination, func(key []byte, value []byte) error {
		var receivedFa12Txs types.ReceivedFa12Txs
		if err := k.cdc.UnmarshalBinaryBare(value, &receivedFa12Txs); err != nil {
			return err
		}

		receivedFa12Txss = append(receivedFa12Txss, &receivedFa12Txs)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReceivedFa12TxsResponse{ReceivedFa12Txs: receivedFa12Txss, Pagination: pageRes}, nil
}

func (k Keeper) ReceivedFa12Txs(c context.Context, req *types.QueryGetReceivedFa12TxsRequest) (*types.QueryGetReceivedFa12TxsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var receivedFa12Txs types.ReceivedFa12Txs
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasReceivedFa12Txs(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetReceivedFa12TxsIDBytes(req.Id)), &receivedFa12Txs)

	return &types.QueryGetReceivedFa12TxsResponse{ReceivedFa12Txs: &receivedFa12Txs}, nil
}
