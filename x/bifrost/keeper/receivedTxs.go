package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"strconv"
)

// GetReceivedTxsCount get the total number of receivedTxs
func (k Keeper) GetReceivedTxsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsCountKey))
	byteKey := types.KeyPrefix(types.ReceivedTxsCountKey)
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

// SetReceivedTxsCount set the total number of receivedTxs
func (k Keeper) SetReceivedTxsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsCountKey))
	byteKey := types.KeyPrefix(types.ReceivedTxsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendReceivedTxs appends a receivedTxs in the store with a new id and update the count
func (k Keeper) AppendReceivedTxs(
	ctx sdk.Context,
	receivedTxs types.ReceivedTxs,
) uint64 {
	// Create the receivedTxs
	count := k.GetReceivedTxsCount(ctx)

	// Set the ID of the appended value
	receivedTxs.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&receivedTxs)
	store.Set(GetReceivedTxsIDBytes(receivedTxs.Id), appendedValue)

	// Update receivedTxs count
	k.SetReceivedTxsCount(ctx, count+1)

	return count
}

// SetReceivedTxs set a specific receivedTxs in the store
func (k Keeper) SetReceivedTxs(ctx sdk.Context, receivedTxs types.ReceivedTxs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsKey))
	b := k.cdc.MustMarshalBinaryBare(&receivedTxs)
	store.Set(GetReceivedTxsIDBytes(receivedTxs.Id), b)
}

// GetReceivedTxs returns a receivedTxs from its id
func (k Keeper) GetReceivedTxs(ctx sdk.Context, id uint64) types.ReceivedTxs {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsKey))
	var receivedTxs types.ReceivedTxs
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetReceivedTxsIDBytes(id)), &receivedTxs)
	return receivedTxs
}

// HasReceivedTxs checks if the receivedTxs exists in the store
func (k Keeper) HasReceivedTxs(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsKey))
	return store.Has(GetReceivedTxsIDBytes(id))
}

// GetReceivedTxsOwner returns the creator of the receivedTxs
func (k Keeper) GetReceivedTxsOwner(ctx sdk.Context, id uint64) string {
	return k.GetReceivedTxs(ctx, id).Creator
}

// RemoveReceivedTxs removes a receivedTxs from the store
func (k Keeper) RemoveReceivedTxs(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsKey))
	store.Delete(GetReceivedTxsIDBytes(id))
}

// GetAllReceivedTxs returns all receivedTxs
func (k Keeper) GetAllReceivedTxs(ctx sdk.Context) (list []types.ReceivedTxs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceivedTxsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ReceivedTxs
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetReceivedTxsIDBytes returns the byte representation of the ID
func GetReceivedTxsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetReceivedTxsIDFromBytes returns ID in uint64 format from a byte array
func GetReceivedTxsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
