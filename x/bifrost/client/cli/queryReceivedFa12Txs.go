package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/bifrost/x/bifrost/types"
	"github.com/spf13/cobra"
)

func CmdListReceivedFa12Txs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-receivedFa12Txs",
		Short: "list all receivedFa12Txs",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllReceivedFa12TxsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ReceivedFa12TxsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowReceivedFa12Txs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-receivedFa12Txs [id]",
		Short: "shows a receivedFa12Txs",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetReceivedFa12TxsRequest{
				Id: id,
			}

			res, err := queryClient.ReceivedFa12Txs(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
