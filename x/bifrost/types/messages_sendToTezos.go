package types

import (
	"errors"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"
	"blockwatch.cc/tzgo/tezos"
)

var _ sdk.Msg = &MsgCreateSendToTezos{}

func NewMsgCreateSendToTezos(creator string, tezosReceiver string, amount string, denom string) *MsgCreateSendToTezos {
	return &MsgCreateSendToTezos{
		Creator:       creator,
		TezosReceiver: tezosReceiver,
		Amount:        amount,
		Denom:         denom,
	}
}

func (msg *MsgCreateSendToTezos) Route() string {
	return RouterKey
}

func (msg *MsgCreateSendToTezos) Type() string {
	return "CreateSendToTezos"
}

func (msg *MsgCreateSendToTezos) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSendToTezos) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSendToTezos) ValidateBasic() error {

	// parse amount to see if it is valid
	_, err := strconv.ParseUint(msg.Amount, 10, 64)
	if err != nil {
		return errors.New("Unable to Parse amount...")
	}

	// check if denom is valid and can be parsed into payment
	if msg.Denom == "token" {
		_, err = sdk.ParseCoinNormalized(fmt.Sprintf("%v%s", msg.Amount, "token"))
		if err != nil {
			return errors.New("Uable to parse coins...")
		}
	} else if msg.Denom == "mutez" {
		_, err = sdk.ParseCoinNormalized(fmt.Sprintf("%v%s", msg.Amount, "bifrost/mutez"))
		if err != nil {
			return errors.New("Uable to parse coins...")
		}
	} else {
		return errors.New("Invalid denom...")
	}

	// check tezos receiver address
	_, err = tezos.ParseAddress(msg.TezosReceiver)
	if err != nil {
		return errors.New("Error: parsing TezosReceiver " + err.Error())
	}

	_, err = sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSendToTezos{}

func NewMsgUpdateSendToTezos(creator string, id uint64, tezosReceiver string, amount string, denom string) *MsgUpdateSendToTezos {
	return &MsgUpdateSendToTezos{
		Id:            id,
		Creator:       creator,
		TezosReceiver: tezosReceiver,
		Amount:        amount,
		Denom:         denom,
	}
}

func (msg *MsgUpdateSendToTezos) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSendToTezos) Type() string {
	return "UpdateSendToTezos"
}

func (msg *MsgUpdateSendToTezos) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSendToTezos) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSendToTezos) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSendToTezos{}

func NewMsgDeleteSendToTezos(creator string, id uint64) *MsgDeleteSendToTezos {
	return &MsgDeleteSendToTezos{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSendToTezos) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSendToTezos) Type() string {
	return "DeleteSendToTezos"
}

func (msg *MsgDeleteSendToTezos) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSendToTezos) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSendToTezos) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
