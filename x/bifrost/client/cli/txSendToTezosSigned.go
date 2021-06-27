package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/bifrost/x/bifrost/types"
)

func CmdCreateSendToTezosSigned() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sendToTezosSigned [tezosReceiver] [amount] [denom] [tezosSignerPrivateKey]",
		Short: "Create a new sendToTezosSigned",
		Args:  cobra.ExactArgs(4),
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
			argsTezosSignerPrivateKey, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSendToTezosSigned(clientCtx.GetFromAddress().String(), argsTezosReceiver, argsAmount, argsDenom, argsTezosSignerPrivateKey)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSendToTezosSigned() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sendToTezosSigned [id] [tezosReceiver] [amount] [denom] [tezosSignerPrivateKey]",
		Short: "Update a sendToTezosSigned",
		Args:  cobra.ExactArgs(5),
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

			argsTezosSignerPrivateKey, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSendToTezosSigned(clientCtx.GetFromAddress().String(), id, argsTezosReceiver, argsAmount, argsDenom, argsTezosSignerPrivateKey)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSendToTezosSigned() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sendToTezosSigned [id]",
		Short: "Delete a sendToTezosSigned by id",
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

			msg := types.NewMsgDeleteSendToTezosSigned(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
