package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"strconv"
)

// GetReceivedFa12TxsCount get the total number of receivedFa12Txs
func (k Keeper) GetReceivedFa12TxsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsCountKey))
	byteKey := types.KeyPrefix(types.ReceivedFa12TxsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetReceivedFa12TxsCount set the total number of receivedFa12Txs
func (k Keeper) SetReceivedFa12TxsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsCountKey))
	byteKey := types.KeyPrefix(types.ReceivedFa12TxsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendReceivedFa12Txs appends a receivedFa12Txs in the store with a new id and update the count
func (k Keeper) AppendReceivedFa12Txs(
	ctx sdk.Context,
	receivedFa12Txs types.ReceivedFa12Txs,
) uint64 {
	// Create the receivedFa12Txs
	count := k.GetReceivedFa12TxsCount(ctx)

	// Set the ID of the appended value
	receivedFa12Txs.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&receivedFa12Txs)
	store.Set(GetReceivedFa12TxsIDBytes(receivedFa12Txs.Id), appendedValue)

	// Update receivedFa12Txs count
	k.SetReceivedFa12TxsCount(ctx, count+1)

	return count
}

// SetReceivedFa12Txs set a specific receivedFa12Txs in the store
func (k Keeper) SetReceivedFa12Txs(ctx sdk.Context, receivedFa12Txs types.ReceivedFa12Txs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsKey))
	b := k.cdc.MustMarshalBinaryBare(&receivedFa12Txs)
	store.Set(GetReceivedFa12TxsIDBytes(receivedFa12Txs.Id), b)
}

// GetReceivedFa12Txs returns a receivedFa12Txs from its id
func (k Keeper) GetReceivedFa12Txs(ctx sdk.Context, id uint64) types.ReceivedFa12Txs {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsKey))
	var receivedFa12Txs types.ReceivedFa12Txs
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetReceivedFa12TxsIDBytes(id)), &receivedFa12Txs)
	return receivedFa12Txs
}

// HasReceivedFa12Txs checks if the receivedFa12Txs exists in the store
func (k Keeper) HasReceivedFa12Txs(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsKey))
	return store.Has(GetReceivedFa12TxsIDBytes(id))
}

// GetReceivedFa12TxsOwner returns the creator of the receivedFa12Txs
func (k Keeper) GetReceivedFa12TxsOwner(ctx sdk.Context, id uint64) string {
	return k.GetReceivedFa12Txs(ctx, id).Creator
}

// RemoveReceivedFa12Txs removes a receivedFa12Txs from the store
func (k Keeper) RemoveReceivedFa12Txs(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsKey))
	store.Delete(GetReceivedFa12TxsIDBytes(id))
}

// GetAllReceivedFa12Txs returns all receivedFa12Txs
func (k Keeper) GetAllReceivedFa12Txs(ctx sdk.Context) (list []types.ReceivedFa12Txs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedFa12TxsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ReceivedFa12Txs
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetReceivedFa12TxsIDBytes returns the byte representation of the ID
func GetReceivedFa12TxsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetReceivedFa12TxsIDFromBytes returns ID in uint64 format from a byte array
func GetReceivedFa12TxsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
