package types

const (
	// ModuleName defines the module name
	ModuleName = "bifrost"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_bifrost"

	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	ReceivedTxsKey      = "ReceivedTxs-value-"
	ReceivedTxsCountKey = "ReceivedTxs-count-"
)

const (
	SendToTezosKey      = "SendToTezos-value-"
	SendToTezosCountKey = "SendToTezos-count-"
)

const (
	ReceivedFa12TxsKey      = "ReceivedFa12Txs-value-"
	ReceivedFa12TxsCountKey = "ReceivedFa12Txs-count-"
)

// Bifrost transaction ports
const BiVerAddr = "localhost:7009"
const BiOpAddr = "localhost:7010"
const Msg_Mint = "Mint"
const Msg_Unlock = "Unlock"
const (
	SendToTezosSignedKey      = "SendToTezosSigned-value-"
	SendToTezosSignedCountKey = "SendToTezosSigned-count-"
)
