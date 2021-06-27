package bifrost

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/keeper"
	"github.com/sap200/bifrost/x/bifrost/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the sendToTezosSigned
	for _, elem := range genState.SendToTezosSignedList {
		k.SetSendToTezosSigned(ctx, *elem)
	}

	// Set sendToTezosSigned count
	k.SetSendToTezosSignedCount(ctx, genState.SendToTezosSignedCount)

	// Set all the receivedFa12Txs
	for _, elem := range genState.ReceivedFa12TxsList {
		k.SetReceivedFa12Txs(ctx, *elem)
	}

	// Set receivedFa12Txs count
	k.SetReceivedFa12TxsCount(ctx, genState.ReceivedFa12TxsCount)

	// Set all the sendToTezos
	for _, elem := range genState.SendToTezosList {
		k.SetSendToTezos(ctx, *elem)
	}

	// Set sendToTezos count
	k.SetSendToTezosCount(ctx, genState.SendToTezosCount)

	// Set all the receivedTxs
	for _, elem := range genState.ReceivedTxsList {
		k.SetReceivedTxs(ctx, *elem)
	}

	// Set receivedTxs count
	k.SetReceivedTxsCount(ctx, genState.ReceivedTxsCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all sendToTezosSigned
	sendToTezosSignedList := k.GetAllSendToTezosSigned(ctx)
	for _, elem := range sendToTezosSignedList {
		elem := elem
		genesis.SendToTezosSignedList = append(genesis.SendToTezosSignedList, &elem)
	}

	// Set the current count
	genesis.SendToTezosSignedCount = k.GetSendToTezosSignedCount(ctx)

	// Get all receivedFa12Txs
	receivedFa12TxsList := k.GetAllReceivedFa12Txs(ctx)
	for _, elem := range receivedFa12TxsList {
		elem := elem
		genesis.ReceivedFa12TxsList = append(genesis.ReceivedFa12TxsList, &elem)
	}

	// Set the current count
	genesis.ReceivedFa12TxsCount = k.GetReceivedFa12TxsCount(ctx)

	// Get all sendToTezos
	sendToTezosList := k.GetAllSendToTezos(ctx)
	for _, elem := range sendToTezosList {
		elem := elem
		genesis.SendToTezosList = append(genesis.SendToTezosList, &elem)
	}

	// Set the current count
	genesis.SendToTezosCount = k.GetSendToTezosCount(ctx)

	// Get all receivedTxs
	receivedTxsList := k.GetAllReceivedTxs(ctx)
	for _, elem := range receivedTxsList {
		elem := elem
		genesis.ReceivedTxsList = append(genesis.ReceivedTxsList, &elem)
	}

	// Set the current count
	genesis.ReceivedTxsCount = k.GetReceivedTxsCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
