package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/sap200/bifrost/x/bifrost/types"
)

func TestSendToTezosMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateSendToTezos(ctx, &types.MsgCreateSendToTezos{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestSendToTezosMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSendToTezos
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSendToTezos{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSendToTezos{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSendToTezos{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateSendToTezos(ctx, &types.MsgCreateSendToTezos{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateSendToTezos(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestSendToTezosMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSendToTezos
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSendToTezos{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSendToTezos{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSendToTezos{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateSendToTezos(ctx, &types.MsgCreateSendToTezos{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteSendToTezos(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
