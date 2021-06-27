package keeper

import (
	"bufio"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/sap200/bifrost/x/bifrost/types"
	"net"
)

func VerifyBifrostTezosTxs(newTx types.TxsCosmos) (bool, error) {
	conn, err := net.Dial("tcp", types.BiVerAddr)
	if err != nil {
		return false, errors.New("Cannot connect to verification system")
	}
	status, err := bufio.NewReader(conn).ReadString('\n')
	if err != nil {
		return false, errors.New("Cannot read from the connection")
	}

	var txs []types.TxsCosmos
	err = json.Unmarshal([]byte(status), &txs)
	if err != nil {
		return false, errors.New("Cannot Unmarshall the read bytes")
	}

	for _, v := range txs {
		if v.Matches(newTx) {
			return true, nil
		}
	}

	return false, errors.New("No matches found")
}

func VerifyBifrostFa12Txs(newTx types.Fa12CosmosTxs) (bool, error) {
	// form the connection to operation server of relayer
	conn, err := net.Dial("tcp", types.BiOpAddr)
	if err != nil {
		return false, errors.New("Cannot connect to verification system")
	}
	// issue a verify transaction
	fmt.Fprintf(conn, "verify\n")
	// read from the operation server of relayer
	status, err := bufio.NewReader(conn).ReadString('\n')
	if err != nil {
		return false, errors.New("Cannot read from the connection")
	}

	// unmarshal fa12 txs in a go type
	var fa12txs []types.Fa12CosmosTxs

	err = json.Unmarshal([]byte(status), &fa12txs)
	if err != nil {
		return false, errors.New("Cannot unmarshall the read ")
	}

	// match the received pending txs to any one of the tx
	for _, v := range fa12txs {
		if v.Matches(newTx) {
			return true, nil
		}
	}

	return false, errors.New("No matches found")
}
