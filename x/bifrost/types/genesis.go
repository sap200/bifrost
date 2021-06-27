package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		SendToTezosSignedList: []*SendToTezosSigned{},
		ReceivedFa12TxsList:   []*ReceivedFa12Txs{},
		SendToTezosList:       []*SendToTezos{},
		ReceivedTxsList:       []*ReceivedTxs{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in sendToTezosSigned
	sendToTezosSignedIdMap := make(map[uint64]bool)

	for _, elem := range gs.SendToTezosSignedList {
		if _, ok := sendToTezosSignedIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for sendToTezosSigned")
		}
		sendToTezosSignedIdMap[elem.Id] = true
	}
	// Check for duplicated ID in receivedFa12Txs
	receivedFa12TxsIdMap := make(map[uint64]bool)

	for _, elem := range gs.ReceivedFa12TxsList {
		if _, ok := receivedFa12TxsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for receivedFa12Txs")
		}
		receivedFa12TxsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in sendToTezos
	sendToTezosIdMap := make(map[uint64]bool)

	for _, elem := range gs.SendToTezosList {
		if _, ok := sendToTezosIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for sendToTezos")
		}
		sendToTezosIdMap[elem.Id] = true
	}
	// Check for duplicated ID in receivedTxs
	receivedTxsIdMap := make(map[uint64]bool)

	for _, elem := range gs.ReceivedTxsList {
		if _, ok := receivedTxsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for receivedTxs")
		}
		receivedTxsIdMap[elem.Id] = true
	}

	return nil
}
