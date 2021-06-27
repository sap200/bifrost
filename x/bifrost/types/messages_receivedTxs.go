package types

import (
	"errors"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateReceivedTxs{}

func NewMsgCreateReceivedTxs(creator string, txid string, tezosSender string, cosmosReceiver string, amount string, denom string, srcChain string, destChain string, txStatus string, timestamp string, relayTimestamp string) *MsgCreateReceivedTxs {
	return &MsgCreateReceivedTxs{
		Creator:        creator,
		Txid:           txid,
		TezosSender:    tezosSender,
		CosmosReceiver: cosmosReceiver,
		Amount:         amount,
		Denom:          denom,
		SrcChain:       srcChain,
		DestChain:      destChain,
		TxStatus:       txStatus,
		Timestamp:      timestamp,
		RelayTimestamp: relayTimestamp,
	}
}

func (msg *MsgCreateReceivedTxs) Route() string {
	return RouterKey
}

func (msg *MsgCreateReceivedTxs) Type() string {
	return "CreateReceivedTxs"
}

func (msg *MsgCreateReceivedTxs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateReceivedTxs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateReceivedTxs) ValidateBasic() error {

	// verify amount txid if they are uint
	_, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return err
	}
	_, err = strconv.ParseUint(msg.Txid, 10, 64)
	if err != nil {
		return err
	}

	// check if the denom is mutez
	if msg.Denom != "mutez" {
		return errors.New("Denom is not mutez")
	}

	_, err = sdk.AccAddressFromBech32(msg.CosmosReceiver)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid cosmos receiver's address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateReceivedTxs{}

func NewMsgUpdateReceivedTxs(creator string, id uint64, txid string, tezosSender string, cosmosReceiver string, amount string, denom string, srcChain string, destChain string, txStatus string, timestamp string, relayTimestamp string) *MsgUpdateReceivedTxs {
	return &MsgUpdateReceivedTxs{
		Id:             id,
		Creator:        creator,
		Txid:           txid,
		TezosSender:    tezosSender,
		CosmosReceiver: cosmosReceiver,
		Amount:         amount,
		Denom:          denom,
		SrcChain:       srcChain,
		DestChain:      destChain,
		TxStatus:       txStatus,
		Timestamp:      timestamp,
		RelayTimestamp: relayTimestamp,
	}
}

func (msg *MsgUpdateReceivedTxs) Route() string {
	return RouterKey
}

func (msg *MsgUpdateReceivedTxs) Type() string {
	return "UpdateReceivedTxs"
}

func (msg *MsgUpdateReceivedTxs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateReceivedTxs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateReceivedTxs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteReceivedTxs{}

func NewMsgDeleteReceivedTxs(creator string, id uint64) *MsgDeleteReceivedTxs {
	return &MsgDeleteReceivedTxs{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteReceivedTxs) Route() string {
	return RouterKey
}

func (msg *MsgDeleteReceivedTxs) Type() string {
	return "DeleteReceivedTxs"
}

func (msg *MsgDeleteReceivedTxs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteReceivedTxs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteReceivedTxs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
