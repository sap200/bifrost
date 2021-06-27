package types

type TxsCosmos struct {
	TxId           uint64 `json:"tx_id"`
	TezosSender    string `json:"tezos_sender"`
	CosmosReceiver string `json:"cosmos_receiver"`
	Amount         uint64 `json:"amount"`
	Denom          string `json:"denom"`
	SrcChain       string `json:"src_chain"`
	DestChain      string `json:"dest_chain"`
	TxStatus       string `json:"tx_status"`
	Timestamp      string `json:"timestamp"`
	RelayTimestamp string `json:"relay_timestamp"`
}

func (t TxsCosmos) Matches(newTx TxsCosmos) bool {
	matches := true

	if t.TxId != newTx.TxId {
		matches = false
	} else if t.TezosSender != newTx.TezosSender {
		matches = false
	} else if t.CosmosReceiver != newTx.CosmosReceiver {
		matches = false
	} else if t.Amount != newTx.Amount {
		matches = false
	} else if t.Denom != newTx.Denom {
		matches = false
	} else if t.SrcChain != newTx.SrcChain {
		matches = false
	} else if t.DestChain != newTx.DestChain {
		matches = false
	} else if t.TxStatus != newTx.TxStatus {
		matches = false
	} else if t.Timestamp != newTx.Timestamp {
		matches = false
	}

	return matches
}

type Fa12CosmosTxs struct {
	TxId           uint64 `json:"txid"`
	TezosSender    string `json:"tezos_sender"`
	Denom          string `json:"denom"`
	CosmosReceiver string `json:"cosmos_receiver"`
	Amount         uint64 `json:"amount"`
	SrcChain       string `json:"src_chain"`
	DestChain      string `json:"dest_chain"`
	TxStatus       string `json:"tx_status"`
	IsApproval     bool   `json:"is_approval"`
	Approver       string `json:"approver"`
	Timestamp      string `json:"timestamp"`
	RelayTimestamp string `json:"relay_timestamp"`
}

func (t Fa12CosmosTxs) Matches(newTx Fa12CosmosTxs) bool {
	matches := true

	if t.TxId != newTx.TxId {
		matches = false
	} else if t.TezosSender != newTx.TezosSender {
		matches = false
	} else if t.CosmosReceiver != newTx.CosmosReceiver {
		matches = false
	} else if t.Amount != newTx.Amount {
		matches = false
	} else if t.Denom != newTx.Denom {
		matches = false
	} else if t.SrcChain != newTx.SrcChain {
		matches = false
	} else if t.DestChain != newTx.DestChain {
		matches = false
	} else if t.TxStatus != newTx.TxStatus {
		matches = false
	} else if t.Timestamp != newTx.Timestamp {
		matches = false
	} else if t.IsApproval != newTx.IsApproval {
		matches = false
	} else if t.Approver != newTx.Approver {
		matches = false
	}

	return matches
}
