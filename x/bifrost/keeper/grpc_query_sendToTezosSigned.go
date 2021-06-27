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

func (k Keeper) SendToTezosSignedAll(c context.Context, req *types.QueryAllSendToTezosSignedRequest) (*types.QueryAllSendToTezosSignedResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sendToTezosSigneds []*types.SendToTezosSigned
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sendToTezosSignedStore := prefix.NewStore(store, types.KeyPrefix(types.SendToTezosSignedKey))

	pageRes, err := query.Paginate(sendToTezosSignedStore, req.Pagination, func(key []byte, value []byte) error {
		var sendToTezosSigned types.SendToTezosSigned
		if err := k.cdc.UnmarshalBinaryBare(value, &sendToTezosSigned); err != nil {
			return err
		}

		sendToTezosSigneds = append(sendToTezosSigneds, &sendToTezosSigned)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSendToTezosSignedResponse{SendToTezosSigned: sendToTezosSigneds, Pagination: pageRes}, nil
}

func (k Keeper) SendToTezosSigned(c context.Context, req *types.QueryGetSendToTezosSignedRequest) (*types.QueryGetSendToTezosSignedResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sendToTezosSigned types.SendToTezosSigned
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSendToTezosSigned(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSendToTezosSignedIDBytes(req.Id)), &sendToTezosSigned)

	return &types.QueryGetSendToTezosSignedResponse{SendToTezosSigned: &sendToTezosSigned}, nil
}
