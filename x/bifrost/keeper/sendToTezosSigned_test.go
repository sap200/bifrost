package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"github.com/stretchr/testify/assert"
)

func createNSendToTezosSigned(keeper *Keeper, ctx sdk.Context, n int) []types.SendToTezosSigned {
	items := make([]types.SendToTezosSigned, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendSendToTezosSigned(ctx, items[i])
	}
	return items
}

func TestSendToTezosSignedGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezosSigned(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetSendToTezosSigned(ctx, item.Id))
	}
}

func TestSendToTezosSignedExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezosSigned(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasSendToTezosSigned(ctx, item.Id))
	}
}

func TestSendToTezosSignedRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezosSigned(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSendToTezosSigned(ctx, item.Id)
		assert.False(t, keeper.HasSendToTezosSigned(ctx, item.Id))
	}
}

func TestSendToTezosSignedGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezosSigned(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllSendToTezosSigned(ctx))
}

func TestSendToTezosSignedCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezosSigned(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetSendToTezosSignedCount(ctx))
}
