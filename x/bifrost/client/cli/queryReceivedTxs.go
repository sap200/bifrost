package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/bifrost/x/bifrost/types"
	"github.com/spf13/cobra"
)

func CmdListReceivedTxs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-receivedTxs",
		Short: "list all receivedTxs",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllReceivedTxsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ReceivedTxsAll(context.Background(), params)
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

func CmdShowReceivedTxs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-receivedTxs [id]",
		Short: "shows a receivedTxs",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetReceivedTxsRequest{
				Id: id,
			}

			res, err := queryClient.ReceivedTxs(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
