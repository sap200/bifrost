package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/sap200/bifrost/x/bifrost/types"
)

func TestReceivedTxsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateReceivedTxs(ctx, &types.MsgCreateReceivedTxs{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestReceivedTxsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateReceivedTxs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateReceivedTxs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateReceivedTxs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateReceivedTxs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateReceivedTxs(ctx, &types.MsgCreateReceivedTxs{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateReceivedTxs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestReceivedTxsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteReceivedTxs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteReceivedTxs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteReceivedTxs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteReceivedTxs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateReceivedTxs(ctx, &types.MsgCreateReceivedTxs{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteReceivedTxs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
