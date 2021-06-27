package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/bifrost/x/bifrost/types"
	"github.com/spf13/cobra"
)

func CmdListSendToTezosSigned() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-sendToTezosSigned",
		Short: "list all sendToTezosSigned",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSendToTezosSignedRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SendToTezosSignedAll(context.Background(), params)
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

func CmdShowSendToTezosSigned() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-sendToTezosSigned [id]",
		Short: "shows a sendToTezosSigned",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetSendToTezosSignedRequest{
				Id: id,
			}

			res, err := queryClient.SendToTezosSigned(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
