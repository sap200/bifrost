package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/sap200/bifrost/x/bifrost/types"
)

func TestSendToTezosSignedMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateSendToTezosSigned(ctx, &types.MsgCreateSendToTezosSigned{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestSendToTezosSignedMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSendToTezosSigned
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSendToTezosSigned{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSendToTezosSigned{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSendToTezosSigned{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateSendToTezosSigned(ctx, &types.MsgCreateSendToTezosSigned{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateSendToTezosSigned(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestSendToTezosSignedMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSendToTezosSigned
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSendToTezosSigned{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSendToTezosSigned{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSendToTezosSigned{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateSendToTezosSigned(ctx, &types.MsgCreateSendToTezosSigned{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteSendToTezosSigned(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
