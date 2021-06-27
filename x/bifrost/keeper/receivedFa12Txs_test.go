package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"github.com/stretchr/testify/assert"
)

func createNReceivedFa12Txs(keeper *Keeper, ctx sdk.Context, n int) []types.ReceivedFa12Txs {
	items := make([]types.ReceivedFa12Txs, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendReceivedFa12Txs(ctx, items[i])
	}
	return items
}

func TestReceivedFa12TxsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedFa12Txs(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetReceivedFa12Txs(ctx, item.Id))
	}
}

func TestReceivedFa12TxsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedFa12Txs(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasReceivedFa12Txs(ctx, item.Id))
	}
}

func TestReceivedFa12TxsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedFa12Txs(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveReceivedFa12Txs(ctx, item.Id)
		assert.False(t, keeper.HasReceivedFa12Txs(ctx, item.Id))
	}
}

func TestReceivedFa12TxsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedFa12Txs(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllReceivedFa12Txs(ctx))
}

func TestReceivedFa12TxsCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNReceivedFa12Txs(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetReceivedFa12TxsCount(ctx))
}
