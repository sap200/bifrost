package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"fmt"
	"errors"
	"strconv"
	"github.com/goat-systems/go-tezos/v4/keys"
)

var _ sdk.Msg = &MsgCreateSendToTezosSigned{}

func NewMsgCreateSendToTezosSigned(creator string, tezosReceiver string, amount string, denom string, tezosSignerPrivateKey string) *MsgCreateSendToTezosSigned {
	return &MsgCreateSendToTezosSigned{
		Creator:               creator,
		TezosReceiver:         tezosReceiver,
		Amount:                amount,
		Denom:                 denom,
		TezosSignerPrivateKey: tezosSignerPrivateKey,
	}
}

func (msg *MsgCreateSendToTezosSigned) Route() string {
	return RouterKey
}

func (msg *MsgCreateSendToTezosSigned) Type() string {
	return "CreateSendToTezosSigned"
}

func (msg *MsgCreateSendToTezosSigned) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSendToTezosSigned) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSendToTezosSigned) ValidateBasic() error {
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

	// check if the private key inserted is valid
	_, err = keys.FromBase58(msg.TezosSignerPrivateKey, keys.Ed25519)
	if err != nil {
		return err
	}

	_, err = sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSendToTezosSigned{}

func NewMsgUpdateSendToTezosSigned(creator string, id uint64, tezosReceiver string, amount string, denom string, tezosSignerPrivateKey string) *MsgUpdateSendToTezosSigned {
	return &MsgUpdateSendToTezosSigned{
		Id:                    id,
		Creator:               creator,
		TezosReceiver:         tezosReceiver,
		Amount:                amount,
		Denom:                 denom,
		TezosSignerPrivateKey: tezosSignerPrivateKey,
	}
}

func (msg *MsgUpdateSendToTezosSigned) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSendToTezosSigned) Type() string {
	return "UpdateSendToTezosSigned"
}

func (msg *MsgUpdateSendToTezosSigned) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSendToTezosSigned) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSendToTezosSigned) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSendToTezosSigned{}

func NewMsgDeleteSendToTezosSigned(creator string, id uint64) *MsgDeleteSendToTezosSigned {
	return &MsgDeleteSendToTezosSigned{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSendToTezosSigned) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSendToTezosSigned) Type() string {
	return "DeleteSendToTezosSigned"
}

func (msg *MsgDeleteSendToTezosSigned) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSendToTezosSigned) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSendToTezosSigned) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
