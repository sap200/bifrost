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

func CmdCreateReceivedFa12Txs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-receivedFa12Txs [txid] [tezosSender] [denom] [cosmosReceiver] [amount] [srcChain] [destChain] [txStatus] [isApproval] [approver] [timestamp] [relayTimestamp]",
		Short: "Create a new receivedFa12Txs",
		Args:  cobra.ExactArgs(12),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTxid, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsTezosSender, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsDenom, err := cast.ToStringE(args[2])
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
			argsIsApproval, err := cast.ToStringE(args[8])
			if err != nil {
				return err
			}
			argsApprover, err := cast.ToStringE(args[9])
			if err != nil {
				return err
			}
			argsTimestamp, err := cast.ToStringE(args[10])
			if err != nil {
				return err
			}
			argsRelayTimestamp, err := cast.ToStringE(args[11])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateReceivedFa12Txs(clientCtx.GetFromAddress().String(), argsTxid, argsTezosSender, argsDenom, argsCosmosReceiver, argsAmount, argsSrcChain, argsDestChain, argsTxStatus, argsIsApproval, argsApprover, argsTimestamp, argsRelayTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateReceivedFa12Txs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-receivedFa12Txs [id] [txid] [tezosSender] [denom] [cosmosReceiver] [amount] [srcChain] [destChain] [txStatus] [isApproval] [approver] [timestamp] [relayTimestamp]",
		Short: "Update a receivedFa12Txs",
		Args:  cobra.ExactArgs(13),
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

			argsDenom, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			argsCosmosReceiver, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			argsAmount, err := cast.ToStringE(args[5])
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

			argsIsApproval, err := cast.ToStringE(args[9])
			if err != nil {
				return err
			}

			argsApprover, err := cast.ToStringE(args[10])
			if err != nil {
				return err
			}

			argsTimestamp, err := cast.ToStringE(args[11])
			if err != nil {
				return err
			}

			argsRelayTimestamp, err := cast.ToStringE(args[12])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateReceivedFa12Txs(clientCtx.GetFromAddress().String(), id, argsTxid, argsTezosSender, argsDenom, argsCosmosReceiver, argsAmount, argsSrcChain, argsDestChain, argsTxStatus, argsIsApproval, argsApprover, argsTimestamp, argsRelayTimestamp)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteReceivedFa12Txs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-receivedFa12Txs [id]",
		Short: "Delete a receivedFa12Txs by id",
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

			msg := types.NewMsgDeleteReceivedFa12Txs(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
