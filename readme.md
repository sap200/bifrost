# bifrost

<p align="center">
    <img src="./bifrost_pegzone.jpg" />
 </p>

**bifrost** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

Right now it supports only tokens with denom token to be sent to tezos blockchain
but adding other tokens is as simple as allowing more denoms inside the bifrost zone code.

## Installation

```
$ git clone github.com/sap200/bifrost

$ cd bifrost
```

```
starport serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

## Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

## Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

## Usage

List available querying commands in bifrost module

```
$ bifrostd q bifrost

Querying commands for the bifrost module

Usage:
  bifrostd query bifrost [flags]
  bifrostd query bifrost [command]

Available Commands:
  list-receivedFa12Txs   list all receivedFa12Txs
  list-receivedTxs       list all receivedTxs
  list-sendToTezos       list all sendToTezos
  list-sendToTezosSigned list all sendToTezosSigned
  show-receivedFa12Txs   shows a receivedFa12Txs
  show-receivedTxs       shows a receivedTxs
  show-sendToTezos       shows a sendToTezos
  show-sendToTezosSigned shows a sendToTezosSigned

Flags:
  -h, --help   help for bifrost

Global Flags:
      --chain-id string     The network chain ID (default "bifrost")
      --home string         directory for config and data (default "/home/saptarsi/.bifrost")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "bifrostd query bifrost [command] --help" for more information about a command.
```

List Transaction commands available in bifrost module

```
$ bifrostd tx bifros

bifrost transactions subcommands

Usage:
  bifrostd tx bifrost [flags]
  bifrostd tx bifrost [command]

Available Commands:
  create-receivedFa12Txs Create a new receivedFa12Txs
  create-receivedTxs     Create a new receivedTxs
  sendToTezos            Create a new sendToTezos

Flags:
  -h, --help   help for bifrost

Global Flags:
      --chain-id string     The network chain ID (default "bifrost")
      --home string         directory for config and data (default "/home/saptarsi/.bifrost")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "bifrostd tx bifrost [command] --help" for more information about a command.
```


Send tezos to Tezos blockchain

```
$ bifrostd tx bifrost sendToTezos tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6 50 mutez --from bob
```

Send tokens i.e. cosmos token to to tezos

```
$ bifrostd tx bifrost sendToTezos tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6 50 mutez --from bob
```

Query balances for specific address

```
$ bifrostd q bank balances cosmos1j5pz7cp5w6wr65z47azefzygcevqssrguccc88
```

Query all received Txs from Tezos blockchain containing Tezos

```
$ bifrostd q bifrost list-receivedTxs
```

Query all received Txs from Tezos containing FA12 Tokens that is representation of cosmos token in tezos blockchain

```
$ bifrostd q bifrost list-receivedFa12Txs
```

Query all Sent Txs from cosmos chain to Tezos chain

```
$ bifrostd q bifrost list-sendToTezos
```

For IBC Transfer of tokens

```
$ bifrostd tx ibc-transfer transfer [src-port] [src-channel] [receiver] [amount] [flags]
```
IBC Transfer help

```
$ bifrostd tx ibc-transfer transfer -h

Transfer a fungible token through IBC. Timeouts can be specified
as absolute or relative using the "absolute-timeouts" flag. Timeout height can be set by passing in the height string
in the form {revision}-{height} using the "packet-timeout-height" flag. Relative timeouts are added to
the block height and block timestamp queried from the latest consensus state corresponding
to the counterparty channel. Any timeout set to 0 is disabled.

Usage:
  bifrostd tx ibc-transfer transfer [src-port] [src-channel] [receiver] [amount] [flags]

Examples:
<appd> tx ibc-transfer transfer [src-port] [src-channel] [receiver] [amount]

Flags:
      --absolute-timeouts               Timeout flags are used as absolute timeouts.
  -a, --account-number uint             The account number of the signing account (offline mode only)
  -b, --broadcast-mode string           Transaction broadcasting mode (sync|async|block) (default "sync")
      --dry-run                         ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it
      --fees string                     Fees to pay along with transaction; eg: 10uatom
      --from string                     Name or address of private key with which to sign
      --gas string                      gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically (default 200000)
      --gas-adjustment float            adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)
      --gas-prices string               Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
      --generate-only                   Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase is not accessible)
  -h, --help                            help for transfer
      --keyring-backend string          Select keyring's backend (os|file|kwallet|pass|test|memory) (default "test")
      --keyring-dir string              The client Keyring directory; if omitted, the default 'home' directory will be used
      --ledger                          Use a connected Ledger device
      --memo string                     Memo to send along with transaction
      --node string                     <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")
      --offline                         Offline mode (does not allow any online functionality
      --packet-timeout-height string    Packet timeout block height. The timeout is disabled when set to 0-0. (default "0-1000")
      --packet-timeout-timestamp uint   Packet timeout timestamp in nanoseconds. Default is 10 minutes. The timeout is disabled when set to 0. (default 600000000000)
  -s, --sequence uint                   The sequence number of the signing account (offline mode only)
      --sign-mode string                Choose sign mode (direct|amino-json), this is an advanced feature
      --timeout-height uint             Set a block timeout height to prevent the tx from being committed past a certain height
  -y, --yes                             Skip tx broadcasting prompt confirmation

Global Flags:
      --chain-id string     The network chain ID (default "bifrost")
      --home string         directory for config and data (default "/home/saptarsi/.bifrost")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```




## Starport

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)
