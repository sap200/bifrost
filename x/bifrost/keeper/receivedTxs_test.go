package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"github.com/stretchr/testify/assert"
)

func createNReceivedTxs(keeper *Keeper, ctx sdk.Context, n int) []types.ReceivedTxs {
	items := make([]types.ReceivedTxs, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendReceivedTxs(ctx, items[i])
	}
	return items
}

func TestReceivedTxsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedTxs(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetReceivedTxs(ctx, item.Id))
	}
}

func TestReceivedTxsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedTxs(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasReceivedTxs(ctx, item.Id))
	}
}

func TestReceivedTxsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedTxs(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveReceivedTxs(ctx, item.Id)
		assert.False(t, keeper.HasReceivedTxs(ctx, item.Id))
	}
}

func TestReceivedTxsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedTxs(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllReceivedTxs(ctx))
}

func TestReceivedTxsCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedTxs(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetReceivedTxsCount(ctx))
}
