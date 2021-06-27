package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/sap200/bifrost/x/bifrost/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group bifrost queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdListSendToTezosSigned())
	cmd.AddCommand(CmdShowSendToTezosSigned())

	cmd.AddCommand(CmdListReceivedFa12Txs())
	cmd.AddCommand(CmdShowReceivedFa12Txs())

	cmd.AddCommand(CmdListSendToTezos())
	cmd.AddCommand(CmdShowSendToTezos())

	cmd.AddCommand(CmdListReceivedTxs())
	cmd.AddCommand(CmdShowReceivedTxs())

	return cmd
}
