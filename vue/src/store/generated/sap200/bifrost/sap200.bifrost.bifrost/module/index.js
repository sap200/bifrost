// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateReceivedTxs } from "./types/bifrost/tx";
import { MsgCreateSendToTezos } from "./types/bifrost/tx";
import { MsgUpdateReceivedFa12Txs } from "./types/bifrost/tx";
import { MsgDeleteReceivedFa12Txs } from "./types/bifrost/tx";
import { MsgCreateReceivedTxs } from "./types/bifrost/tx";
import { MsgDeleteSendToTezos } from "./types/bifrost/tx";
import { MsgCreateReceivedFa12Txs } from "./types/bifrost/tx";
import { MsgDeleteReceivedTxs } from "./types/bifrost/tx";
import { MsgUpdateSendToTezos } from "./types/bifrost/tx";
import { MsgUpdateSendToTezosSigned } from "./types/bifrost/tx";
import { MsgCreateSendToTezosSigned } from "./types/bifrost/tx";
import { MsgDeleteSendToTezosSigned } from "./types/bifrost/tx";
const types = [
    ["/sap200.bifrost.bifrost.MsgUpdateReceivedTxs", MsgUpdateReceivedTxs],
    ["/sap200.bifrost.bifrost.MsgCreateSendToTezos", MsgCreateSendToTezos],
    ["/sap200.bifrost.bifrost.MsgUpdateReceivedFa12Txs", MsgUpdateReceivedFa12Txs],
    ["/sap200.bifrost.bifrost.MsgDeleteReceivedFa12Txs", MsgDeleteReceivedFa12Txs],
    ["/sap200.bifrost.bifrost.MsgCreateReceivedTxs", MsgCreateReceivedTxs],
    ["/sap200.bifrost.bifrost.MsgDeleteSendToTezos", MsgDeleteSendToTezos],
    ["/sap200.bifrost.bifrost.MsgCreateReceivedFa12Txs", MsgCreateReceivedFa12Txs],
    ["/sap200.bifrost.bifrost.MsgDeleteReceivedTxs", MsgDeleteReceivedTxs],
    ["/sap200.bifrost.bifrost.MsgUpdateSendToTezos", MsgUpdateSendToTezos],
    ["/sap200.bifrost.bifrost.MsgUpdateSendToTezosSigned", MsgUpdateSendToTezosSigned],
    ["/sap200.bifrost.bifrost.MsgCreateSendToTezosSigned", MsgCreateSendToTezosSigned],
    ["/sap200.bifrost.bifrost.MsgDeleteSendToTezosSigned", MsgDeleteSendToTezosSigned],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateReceivedTxs: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgUpdateReceivedTxs", value: data }),
        msgCreateSendToTezos: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgCreateSendToTezos", value: data }),
        msgUpdateReceivedFa12Txs: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgUpdateReceivedFa12Txs", value: data }),
        msgDeleteReceivedFa12Txs: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgDeleteReceivedFa12Txs", value: data }),
        msgCreateReceivedTxs: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgCreateReceivedTxs", value: data }),
        msgDeleteSendToTezos: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgDeleteSendToTezos", value: data }),
        msgCreateReceivedFa12Txs: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgCreateReceivedFa12Txs", value: data }),
        msgDeleteReceivedTxs: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgDeleteReceivedTxs", value: data }),
        msgUpdateSendToTezos: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgUpdateSendToTezos", value: data }),
        msgUpdateSendToTezosSigned: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgUpdateSendToTezosSigned", value: data }),
        msgCreateSendToTezosSigned: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgCreateSendToTezosSigned", value: data }),
        msgDeleteSendToTezosSigned: (data) => ({ typeUrl: "/sap200.bifrost.bifrost.MsgDeleteSendToTezosSigned", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
