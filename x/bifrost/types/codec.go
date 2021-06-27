package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateSendToTezosSigned{}, "bifrost/CreateSendToTezosSigned", nil)
	cdc.RegisterConcrete(&MsgUpdateSendToTezosSigned{}, "bifrost/UpdateSendToTezosSigned", nil)
	cdc.RegisterConcrete(&MsgDeleteSendToTezosSigned{}, "bifrost/DeleteSendToTezosSigned", nil)

	cdc.RegisterConcrete(&MsgCreateReceivedFa12Txs{}, "bifrost/CreateReceivedFa12Txs", nil)
	cdc.RegisterConcrete(&MsgUpdateReceivedFa12Txs{}, "bifrost/UpdateReceivedFa12Txs", nil)
	cdc.RegisterConcrete(&MsgDeleteReceivedFa12Txs{}, "bifrost/DeleteReceivedFa12Txs", nil)

	cdc.RegisterConcrete(&MsgCreateSendToTezos{}, "bifrost/CreateSendToTezos", nil)
	cdc.RegisterConcrete(&MsgUpdateSendToTezos{}, "bifrost/UpdateSendToTezos", nil)
	cdc.RegisterConcrete(&MsgDeleteSendToTezos{}, "bifrost/DeleteSendToTezos", nil)

	cdc.RegisterConcrete(&MsgCreateReceivedTxs{}, "bifrost/CreateReceivedTxs", nil)
	cdc.RegisterConcrete(&MsgUpdateReceivedTxs{}, "bifrost/UpdateReceivedTxs", nil)
	cdc.RegisterConcrete(&MsgDeleteReceivedTxs{}, "bifrost/DeleteReceivedTxs", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSendToTezosSigned{},
		&MsgUpdateSendToTezosSigned{},
		&MsgDeleteSendToTezosSigned{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateReceivedFa12Txs{},
		&MsgUpdateReceivedFa12Txs{},
		&MsgDeleteReceivedFa12Txs{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSendToTezos{},
		&MsgUpdateSendToTezos{},
		&MsgDeleteSendToTezos{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateReceivedTxs{},
		&MsgUpdateReceivedTxs{},
		&MsgDeleteReceivedTxs{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
