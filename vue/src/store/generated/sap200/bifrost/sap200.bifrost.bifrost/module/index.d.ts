import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateReceivedTxs: (data: MsgUpdateReceivedTxs) => EncodeObject;
    msgCreateSendToTezos: (data: MsgCreateSendToTezos) => EncodeObject;
    msgUpdateReceivedFa12Txs: (data: MsgUpdateReceivedFa12Txs) => EncodeObject;
    msgDeleteReceivedFa12Txs: (data: MsgDeleteReceivedFa12Txs) => EncodeObject;
    msgCreateReceivedTxs: (data: MsgCreateReceivedTxs) => EncodeObject;
    msgDeleteSendToTezos: (data: MsgDeleteSendToTezos) => EncodeObject;
    msgCreateReceivedFa12Txs: (data: MsgCreateReceivedFa12Txs) => EncodeObject;
    msgDeleteReceivedTxs: (data: MsgDeleteReceivedTxs) => EncodeObject;
    msgUpdateSendToTezos: (data: MsgUpdateSendToTezos) => EncodeObject;
    msgUpdateSendToTezosSigned: (data: MsgUpdateSendToTezosSigned) => EncodeObject;
    msgCreateSendToTezosSigned: (data: MsgCreateSendToTezosSigned) => EncodeObject;
    msgDeleteSendToTezosSigned: (data: MsgDeleteSendToTezosSigned) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
