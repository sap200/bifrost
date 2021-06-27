package keeper

import (
	"errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/bifrost/x/bifrost/types"
	"strings"
)

func isBifrostIBCTezosToken(denom string) bool {
	return strings.HasPrefix(denom, "bifrost/") || denom == "token"
}

func (k Keeper) SafeMint(ctx sdk.Context, receiver sdk.AccAddress, denom string, amount uint64) error {
	if isBifrostIBCTezosToken(denom) {
		if err := k.MintTokens(ctx, receiver, sdk.NewCoin(denom, sdk.NewInt(int64(amount)))); err != nil {
			return err
		}
		return nil
	} else {
		return errors.New("Denom doesn't matches the bifrost-transfer denom")
	}
}

func (k Keeper) SafeBurn(ctx sdk.Context, sender sdk.AccAddress, denom string, amount uint64) error {
	if isBifrostIBCTezosToken(denom) {
		if err := k.BurnTokens(ctx, sender, sdk.NewCoin(denom, sdk.NewInt(int64(amount)))); err != nil {
			return err
		}
		return nil
	} else {
		return errors.New("Denom doesn't matches the bifrost-transfer denom")
	}
}

func (k Keeper) MintTokens(ctx sdk.Context, receiver sdk.AccAddress, amt sdk.Coin) error {
	err := k.BankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(amt))
	if err != nil {
		return err
	}

	err = k.BankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiver, sdk.NewCoins(amt))
	if err != nil {
		return err
	}

	return nil
}

func (k Keeper) BurnTokens(ctx sdk.Context, sender sdk.AccAddress, amt sdk.Coin) error {
	if err := k.BankKeeper.SendCoinsFromAccountToModule(ctx, sender, types.ModuleName, sdk.NewCoins(amt)); err != nil {
		return err
	}

	if err := k.BankKeeper.BurnCoins(ctx, types.ModuleName, sdk.NewCoins(amt)); err != nil {
		return err
	}

	return nil
}
