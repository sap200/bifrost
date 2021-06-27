package types

import (
	"errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"
)

var _ sdk.Msg = &MsgCreateReceivedFa12Txs{}

func NewMsgCreateReceivedFa12Txs(creator string, txid string, tezosSender string, denom string, cosmosReceiver string, amount string, srcChain string, destChain string, txStatus string, isApproval string, approver string, timestamp string, relayTimestamp string) *MsgCreateReceivedFa12Txs {
	return &MsgCreateReceivedFa12Txs{
		Creator:        creator,
		Txid:           txid,
		TezosSender:    tezosSender,
		Denom:          denom,
		CosmosReceiver: cosmosReceiver,
		Amount:         amount,
		SrcChain:       srcChain,
		DestChain:      destChain,
		TxStatus:       txStatus,
		IsApproval:     isApproval,
		Approver:       approver,
		Timestamp:      timestamp,
		RelayTimestamp: relayTimestamp,
	}
}

func (msg *MsgCreateReceivedFa12Txs) Route() string {
	return RouterKey
}

func (msg *MsgCreateReceivedFa12Txs) Type() string {
	return "CreateReceivedFa12Txs"
}

func (msg *MsgCreateReceivedFa12Txs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateReceivedFa12Txs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateReceivedFa12Txs) ValidateBasic() error {

	// parsing the amount
	// verify amount txid if they are uint
	_, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return err
	}

	_, err = strconv.ParseUint(msg.Txid, 10, 64)
	if err != nil {
		return err
	}

	_, err = strconv.ParseBool(msg.IsApproval)
	if err != nil {
		return err
	}

	// check if the denom is mutez
	if msg.Denom != "bifrost/token" {
		return errors.New("Denom is not token")
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

var _ sdk.Msg = &MsgUpdateReceivedFa12Txs{}

func NewMsgUpdateReceivedFa12Txs(creator string, id uint64, txid string, tezosSender string, denom string, cosmosReceiver string, amount string, srcChain string, destChain string, txStatus string, isApproval string, approver string, timestamp string, relayTimestamp string) *MsgUpdateReceivedFa12Txs {
	return &MsgUpdateReceivedFa12Txs{
		Id:             id,
		Creator:        creator,
		Txid:           txid,
		TezosSender:    tezosSender,
		Denom:          denom,
		CosmosReceiver: cosmosReceiver,
		Amount:         amount,
		SrcChain:       srcChain,
		DestChain:      destChain,
		TxStatus:       txStatus,
		IsApproval:     isApproval,
		Approver:       approver,
		Timestamp:      timestamp,
		RelayTimestamp: relayTimestamp,
	}
}

func (msg *MsgUpdateReceivedFa12Txs) Route() string {
	return RouterKey
}

func (msg *MsgUpdateReceivedFa12Txs) Type() string {
	return "UpdateReceivedFa12Txs"
}

func (msg *MsgUpdateReceivedFa12Txs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateReceivedFa12Txs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateReceivedFa12Txs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteReceivedFa12Txs{}

func NewMsgDeleteReceivedFa12Txs(creator string, id uint64) *MsgDeleteReceivedFa12Txs {
	return &MsgDeleteReceivedFa12Txs{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteReceivedFa12Txs) Route() string {
	return RouterKey
}

func (msg *MsgDeleteReceivedFa12Txs) Type() string {
	return "DeleteReceivedFa12Txs"
}

func (msg *MsgDeleteReceivedFa12Txs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteReceivedFa12Txs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteReceivedFa12Txs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
