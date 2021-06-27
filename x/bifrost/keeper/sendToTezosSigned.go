package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"strconv"
)

// GetSendToTezosSignedCount get the total number of sendToTezosSigned
func (k Keeper) GetSendToTezosSignedCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedCountKey))
	byteKey := types.KeyPrefix(types.SendToTezosSignedCountKey)
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

// SetSendToTezosSignedCount set the total number of sendToTezosSigned
func (k Keeper) SetSendToTezosSignedCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedCountKey))
	byteKey := types.KeyPrefix(types.SendToTezosSignedCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSendToTezosSigned appends a sendToTezosSigned in the store with a new id and update the count
func (k Keeper) AppendSendToTezosSigned(
	ctx sdk.Context,
	sendToTezosSigned types.SendToTezosSigned,
) uint64 {
	// Create the sendToTezosSigned
	count := k.GetSendToTezosSignedCount(ctx)

	// Set the ID of the appended value
	sendToTezosSigned.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&sendToTezosSigned)
	store.Set(GetSendToTezosSignedIDBytes(sendToTezosSigned.Id), appendedValue)

	// Update sendToTezosSigned count
	k.SetSendToTezosSignedCount(ctx, count+1)

	return count
}

// SetSendToTezosSigned set a specific sendToTezosSigned in the store
func (k Keeper) SetSendToTezosSigned(ctx sdk.Context, sendToTezosSigned types.SendToTezosSigned) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedKey))
	b := k.cdc.MustMarshalBinaryBare(&sendToTezosSigned)
	store.Set(GetSendToTezosSignedIDBytes(sendToTezosSigned.Id), b)
}

// GetSendToTezosSigned returns a sendToTezosSigned from its id
func (k Keeper) GetSendToTezosSigned(ctx sdk.Context, id uint64) types.SendToTezosSigned {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedKey))
	var sendToTezosSigned types.SendToTezosSigned
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSendToTezosSignedIDBytes(id)), &sendToTezosSigned)
	return sendToTezosSigned
}

// HasSendToTezosSigned checks if the sendToTezosSigned exists in the store
func (k Keeper) HasSendToTezosSigned(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedKey))
	return store.Has(GetSendToTezosSignedIDBytes(id))
}

// GetSendToTezosSignedOwner returns the creator of the sendToTezosSigned
func (k Keeper) GetSendToTezosSignedOwner(ctx sdk.Context, id uint64) string {
	return k.GetSendToTezosSigned(ctx, id).Creator
}

// RemoveSendToTezosSigned removes a sendToTezosSigned from the store
func (k Keeper) RemoveSendToTezosSigned(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedKey))
	store.Delete(GetSendToTezosSignedIDBytes(id))
}

// GetAllSendToTezosSigned returns all sendToTezosSigned
func (k Keeper) GetAllSendToTezosSigned(ctx sdk.Context) (list []types.SendToTezosSigned) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendToTezosSignedKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SendToTezosSigned
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSendToTezosSignedIDBytes returns the byte representation of the ID
func GetSendToTezosSignedIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSendToTezosSignedIDFromBytes returns ID in uint64 format from a byte array
func GetSendToTezosSignedIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
