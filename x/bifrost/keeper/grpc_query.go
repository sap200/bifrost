package keeper

import (
	"github.com/sap200/bifrost/x/bifrost/types"
)

var _ types.QueryServer = Keeper{}
