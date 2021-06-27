package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"strconv"
)

// GetSendToTezosCount get the total number of sendToTezos
func (k Keeper) GetSendToTezosCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosCountKey))
	byteKey := types.KeyPrefix(types.SendToTezosCountKey)
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

// SetSendToTezosCount set the total number of sendToTezos
func (k Keeper) SetSendToTezosCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosCountKey))
	byteKey := types.KeyPrefix(types.SendToTezosCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSendToTezos appends a sendToTezos in the store with a new id and update the count
func (k Keeper) AppendSendToTezos(
	ctx sdk.Context,
	sendToTezos types.SendToTezos,
) uint64 {
	// Create the sendToTezos
	count := k.GetSendToTezosCount(ctx)

	// Set the ID of the appended value
	sendToTezos.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&sendToTezos)
	store.Set(GetSendToTezosIDBytes(sendToTezos.Id), appendedValue)

	// Update sendToTezos count
	k.SetSendToTezosCount(ctx, count+1)

	return count
}

// SetSendToTezos set a specific sendToTezos in the store
func (k Keeper) SetSendToTezos(ctx sdk.Context, sendToTezos types.SendToTezos) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosKey))
	b := k.cdc.MustMarshalBinaryBare(&sendToTezos)
	store.Set(GetSendToTezosIDBytes(sendToTezos.Id), b)
}

// GetSendToTezos returns a sendToTezos from its id
func (k Keeper) GetSendToTezos(ctx sdk.Context, id uint64) types.SendToTezos {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosKey))
	var sendToTezos types.SendToTezos
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSendToTezosIDBytes(id)), &sendToTezos)
	return sendToTezos
}

// HasSendToTezos checks if the sendToTezos exists in the store
func (k Keeper) HasSendToTezos(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosKey))
	return store.Has(GetSendToTezosIDBytes(id))
}

// GetSendToTezosOwner returns the creator of the sendToTezos
func (k Keeper) GetSendToTezosOwner(ctx sdk.Context, id uint64) string {
	return k.GetSendToTezos(ctx, id).Creator
}

// RemoveSendToTezos removes a sendToTezos from the store
func (k Keeper) RemoveSendToTezos(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosKey))
	store.Delete(GetSendToTezosIDBytes(id))
}

// GetAllSendToTezos returns all sendToTezos
func (k Keeper) GetAllSendToTezos(ctx sdk.Context) (list []types.SendToTezos) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SendToTezos
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSendToTezosIDBytes returns the byte representation of the ID
func GetSendToTezosIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSendToTezosIDFromBytes returns ID in uint64 format from a byte array
func GetSendToTezosIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
