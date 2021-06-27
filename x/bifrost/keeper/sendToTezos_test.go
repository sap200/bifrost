package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"github.com/stretchr/testify/assert"
)

func createNSendToTezos(keeper *Keeper, ctx sdk.Context, n int) []types.SendToTezos {
	items := make([]types.SendToTezos, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendSendToTezos(ctx, items[i])
	}
	return items
}

func TestSendToTezosGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezos(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetSendToTezos(ctx, item.Id))
	}
}

func TestSendToTezosExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezos(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasSendToTezos(ctx, item.Id))
	}
}

func TestSendToTezosRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezos(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSendToTezos(ctx, item.Id)
		assert.False(t, keeper.HasSendToTezos(ctx, item.Id))
	}
}

func TestSendToTezosGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezos(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllSendToTezos(ctx))
}

func TestSendToTezosCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendToTezos(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetSendToTezosCount(ctx))
}
