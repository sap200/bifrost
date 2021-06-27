package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/sap200/bifrost/x/bifrost/types"
)

func TestReceivedFa12TxsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateReceivedFa12Txs(ctx, &types.MsgCreateReceivedFa12Txs{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestReceivedFa12TxsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateReceivedFa12Txs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateReceivedFa12Txs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateReceivedFa12Txs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateReceivedFa12Txs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateReceivedFa12Txs(ctx, &types.MsgCreateReceivedFa12Txs{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateReceivedFa12Txs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestReceivedFa12TxsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteReceivedFa12Txs
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteReceivedFa12Txs{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteReceivedFa12Txs{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteReceivedFa12Txs{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateReceivedFa12Txs(ctx, &types.MsgCreateReceivedFa12Txs{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteReceivedFa12Txs(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
