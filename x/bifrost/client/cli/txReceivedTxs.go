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

func CmdCreateReceivedTxs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-receivedTxs [txid] [tezosSender] [cosmosReceiver] [amount] [denom] [srcChain] [destChain] [txStatus] [timestamp] [relayTimestamp]",
		Short: "Create a new receivedTxs",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTxid, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsTezosSender, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsCosmosReceiver, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsAmount, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}
			argsDenom, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}
			argsSrcChain, err := cast.ToStringE(args[5])
			if err != nil {
				return err
			}
			argsDestChain, err := cast.ToStringE(args[6])
			if err != nil {
				return err
			}
			argsTxStatus, err := cast.ToStringE(args[7])
			if err != nil {
				return err
			}
			argsTimestamp, err := cast.ToStringE(args[8])
			if err != nil {
				return err
			}
			argsRelayTimestamp, err := cast.ToStringE(args[9])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// if everything goes well then it might be time to actually record the txs in blockchain and mint new tokens
			msg := types.NewMsgCreateReceivedTxs(clientCtx.GetFromAddress().String(), argsTxid, argsTezosSender, argsCosmosReceiver, argsAmount, argsDenom, argsSrcChain, argsDestChain, argsTxStatus, argsTimestamp, argsRelayTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateReceivedTxs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-receivedTxs [id] [txid] [tezosSender] [cosmosReceiver] [amount] [denom] [srcChain] [destChain] [txStatus] [timestamp] [relayTimestamp]",
		Short: "Update a receivedTxs",
		Args:  cobra.ExactArgs(11),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsTxid, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsTezosSender, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsCosmosReceiver, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			argsAmount, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			argsDenom, err := cast.ToStringE(args[5])
			if err != nil {
				return err
			}

			argsSrcChain, err := cast.ToStringE(args[6])
			if err != nil {
				return err
			}

			argsDestChain, err := cast.ToStringE(args[7])
			if err != nil {
				return err
			}

			argsTxStatus, err := cast.ToStringE(args[8])
			if err != nil {
				return err
			}

			argsTimestamp, err := cast.ToStringE(args[9])
			if err != nil {
				return err
			}

			argsRelayTimestamp, err := cast.ToStringE(args[10])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateReceivedTxs(clientCtx.GetFromAddress().String(), id, argsTxid, argsTezosSender, argsCosmosReceiver, argsAmount, argsDenom, argsSrcChain, argsDestChain, argsTxStatus, argsTimestamp, argsRelayTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteReceivedTxs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-receivedTxs [id]",
		Short: "Delete a receivedTxs by id",
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

			msg := types.NewMsgDeleteReceivedTxs(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
