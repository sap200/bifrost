package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/bifrost/x/bifrost/types"
)

func CmdCreateSendToTezos() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "sendToTezos [tezosReceiver] [amount] [denom]",
		Short: "Create a new sendToTezos",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTezosReceiver, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsAmount, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsDenom, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSendToTezos(clientCtx.GetFromAddress().String(), argsTezosReceiver, argsAmount, argsDenom)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)

		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSendToTezos() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sendToTezos [id] [tezosReceiver] [amount] [denom]",
		Short: "Update a sendToTezos",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsTezosReceiver, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsAmount, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsDenom, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSendToTezos(clientCtx.GetFromAddress().String(), id, argsTezosReceiver, argsAmount, argsDenom)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSendToTezos() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sendToTezos [id]",
		Short: "Delete a sendToTezos by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSendToTezos(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
