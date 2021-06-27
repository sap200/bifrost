import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.bifrost.bifrost";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateSendToTezosSigned {
    creator: string;
    tezosReceiver: string;
    amount: string;
    denom: string;
    tezosSignerPrivateKey: string;
}
export interface MsgCreateSendToTezosSignedResponse {
    id: number;
}
export interface MsgUpdateSendToTezosSigned {
    creator: string;
    id: number;
    tezosReceiver: string;
    amount: string;
    denom: string;
    tezosSignerPrivateKey: string;
}
export interface MsgUpdateSendToTezosSignedResponse {
}
export interface MsgDeleteSendToTezosSigned {
    creator: string;
    id: number;
}
export interface MsgDeleteSendToTezosSignedResponse {
}
export interface MsgCreateReceivedFa12Txs {
    creator: string;
    txid: string;
    tezosSender: string;
    denom: string;
    cosmosReceiver: string;
    amount: string;
    srcChain: string;
    destChain: string;
    txStatus: string;
    isApproval: string;
    approver: string;
    timestamp: string;
    relayTimestamp: string;
}
export interface MsgCreateReceivedFa12TxsResponse {
    id: number;
}
export interface MsgUpdateReceivedFa12Txs {
    creator: string;
    id: number;
    txid: string;
    tezosSender: string;
    denom: string;
    cosmosReceiver: string;
    amount: string;
    srcChain: string;
    destChain: string;
    txStatus: string;
    isApproval: string;
    approver: string;
    timestamp: string;
    relayTimestamp: string;
}
export interface MsgUpdateReceivedFa12TxsResponse {
}
export interface MsgDeleteReceivedFa12Txs {
    creator: string;
    id: number;
}
export interface MsgDeleteReceivedFa12TxsResponse {
}
export interface MsgCreateSendToTezos {
    creator: string;
    tezosReceiver: string;
    amount: string;
    denom: string;
}
export interface MsgCreateSendToTezosResponse {
    id: number;
}
export interface MsgUpdateSendToTezos {
    creator: string;
    id: number;
    tezosReceiver: string;
    amount: string;
    denom: string;
}
export interface MsgUpdateSendToTezosResponse {
}
export interface MsgDeleteSendToTezos {
    creator: string;
    id: number;
}
export interface MsgDeleteSendToTezosResponse {
}
export interface MsgCreateReceivedTxs {
    creator: string;
    txid: string;
    tezosSender: string;
    cosmosReceiver: string;
    amount: string;
    denom: string;
    srcChain: string;
    destChain: string;
    txStatus: string;
    timestamp: string;
    relayTimestamp: string;
}
export interface MsgCreateReceivedTxsResponse {
    id: number;
}
export interface MsgUpdateReceivedTxs {
    creator: string;
    id: number;
    txid: string;
    tezosSender: string;
    cosmosReceiver: string;
    amount: string;
    denom: string;
    srcChain: string;
    destChain: string;
    txStatus: string;
    timestamp: string;
    relayTimestamp: string;
}
export interface MsgUpdateReceivedTxsResponse {
}
export interface MsgDeleteReceivedTxs {
    creator: string;
    id: number;
}
export interface MsgDeleteReceivedTxsResponse {
}
export declare const MsgCreateSendToTezosSigned: {
    encode(message: MsgCreateSendToTezosSigned, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezosSigned;
    fromJSON(object: any): MsgCreateSendToTezosSigned;
    toJSON(message: MsgCreateSendToTezosSigned): unknown;
    fromPartial(object: DeepPartial<MsgCreateSendToTezosSigned>): MsgCreateSendToTezosSigned;
};
export declare const MsgCreateSendToTezosSignedResponse: {
    encode(message: MsgCreateSendToTezosSignedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezosSignedResponse;
    fromJSON(object: any): MsgCreateSendToTezosSignedResponse;
    toJSON(message: MsgCreateSendToTezosSignedResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSendToTezosSignedResponse>): MsgCreateSendToTezosSignedResponse;
};
export declare const MsgUpdateSendToTezosSigned: {
    encode(message: MsgUpdateSendToTezosSigned, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezosSigned;
    fromJSON(object: any): MsgUpdateSendToTezosSigned;
    toJSON(message: MsgUpdateSendToTezosSigned): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSendToTezosSigned>): MsgUpdateSendToTezosSigned;
};
export declare const MsgUpdateSendToTezosSignedResponse: {
    encode(_: MsgUpdateSendToTezosSignedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezosSignedResponse;
    fromJSON(_: any): MsgUpdateSendToTezosSignedResponse;
    toJSON(_: MsgUpdateSendToTezosSignedResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSendToTezosSignedResponse>): MsgUpdateSendToTezosSignedResponse;
};
export declare const MsgDeleteSendToTezosSigned: {
    encode(message: MsgDeleteSendToTezosSigned, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezosSigned;
    fromJSON(object: any): MsgDeleteSendToTezosSigned;
    toJSON(message: MsgDeleteSendToTezosSigned): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSendToTezosSigned>): MsgDeleteSendToTezosSigned;
};
export declare const MsgDeleteSendToTezosSignedResponse: {
    encode(_: MsgDeleteSendToTezosSignedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezosSignedResponse;
    fromJSON(_: any): MsgDeleteSendToTezosSignedResponse;
    toJSON(_: MsgDeleteSendToTezosSignedResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSendToTezosSignedResponse>): MsgDeleteSendToTezosSignedResponse;
};
export declare const MsgCreateReceivedFa12Txs: {
    encode(message: MsgCreateReceivedFa12Txs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedFa12Txs;
    fromJSON(object: any): MsgCreateReceivedFa12Txs;
    toJSON(message: MsgCreateReceivedFa12Txs): unknown;
    fromPartial(object: DeepPartial<MsgCreateReceivedFa12Txs>): MsgCreateReceivedFa12Txs;
};
export declare const MsgCreateReceivedFa12TxsResponse: {
    encode(message: MsgCreateReceivedFa12TxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedFa12TxsResponse;
    fromJSON(object: any): MsgCreateReceivedFa12TxsResponse;
    toJSON(message: MsgCreateReceivedFa12TxsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateReceivedFa12TxsResponse>): MsgCreateReceivedFa12TxsResponse;
};
export declare const MsgUpdateReceivedFa12Txs: {
    encode(message: MsgUpdateReceivedFa12Txs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedFa12Txs;
    fromJSON(object: any): MsgUpdateReceivedFa12Txs;
    toJSON(message: MsgUpdateReceivedFa12Txs): unknown;
    fromPartial(object: DeepPartial<MsgUpdateReceivedFa12Txs>): MsgUpdateReceivedFa12Txs;
};
export declare const MsgUpdateReceivedFa12TxsResponse: {
    encode(_: MsgUpdateReceivedFa12TxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedFa12TxsResponse;
    fromJSON(_: any): MsgUpdateReceivedFa12TxsResponse;
    toJSON(_: MsgUpdateReceivedFa12TxsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateReceivedFa12TxsResponse>): MsgUpdateReceivedFa12TxsResponse;
};
export declare const MsgDeleteReceivedFa12Txs: {
    encode(message: MsgDeleteReceivedFa12Txs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedFa12Txs;
    fromJSON(object: any): MsgDeleteReceivedFa12Txs;
    toJSON(message: MsgDeleteReceivedFa12Txs): unknown;
    fromPartial(object: DeepPartial<MsgDeleteReceivedFa12Txs>): MsgDeleteReceivedFa12Txs;
};
export declare const MsgDeleteReceivedFa12TxsResponse: {
    encode(_: MsgDeleteReceivedFa12TxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedFa12TxsResponse;
    fromJSON(_: any): MsgDeleteReceivedFa12TxsResponse;
    toJSON(_: MsgDeleteReceivedFa12TxsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteReceivedFa12TxsResponse>): MsgDeleteReceivedFa12TxsResponse;
};
export declare const MsgCreateSendToTezos: {
    encode(message: MsgCreateSendToTezos, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezos;
    fromJSON(object: any): MsgCreateSendToTezos;
    toJSON(message: MsgCreateSendToTezos): unknown;
    fromPartial(object: DeepPartial<MsgCreateSendToTezos>): MsgCreateSendToTezos;
};
export declare const MsgCreateSendToTezosResponse: {
    encode(message: MsgCreateSendToTezosResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezosResponse;
    fromJSON(object: any): MsgCreateSendToTezosResponse;
    toJSON(message: MsgCreateSendToTezosResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSendToTezosResponse>): MsgCreateSendToTezosResponse;
};
export declare const MsgUpdateSendToTezos: {
    encode(message: MsgUpdateSendToTezos, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezos;
    fromJSON(object: any): MsgUpdateSendToTezos;
    toJSON(message: MsgUpdateSendToTezos): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSendToTezos>): MsgUpdateSendToTezos;
};
export declare const MsgUpdateSendToTezosResponse: {
    encode(_: MsgUpdateSendToTezosResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezosResponse;
    fromJSON(_: any): MsgUpdateSendToTezosResponse;
    toJSON(_: MsgUpdateSendToTezosResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSendToTezosResponse>): MsgUpdateSendToTezosResponse;
};
export declare const MsgDeleteSendToTezos: {
    encode(message: MsgDeleteSendToTezos, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezos;
    fromJSON(object: any): MsgDeleteSendToTezos;
    toJSON(message: MsgDeleteSendToTezos): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSendToTezos>): MsgDeleteSendToTezos;
};
export declare const MsgDeleteSendToTezosResponse: {
    encode(_: MsgDeleteSendToTezosResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezosResponse;
    fromJSON(_: any): MsgDeleteSendToTezosResponse;
    toJSON(_: MsgDeleteSendToTezosResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSendToTezosResponse>): MsgDeleteSendToTezosResponse;
};
export declare const MsgCreateReceivedTxs: {
    encode(message: MsgCreateReceivedTxs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedTxs;
    fromJSON(object: any): MsgCreateReceivedTxs;
    toJSON(message: MsgCreateReceivedTxs): unknown;
    fromPartial(object: DeepPartial<MsgCreateReceivedTxs>): MsgCreateReceivedTxs;
};
export declare const MsgCreateReceivedTxsResponse: {
    encode(message: MsgCreateReceivedTxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedTxsResponse;
    fromJSON(object: any): MsgCreateReceivedTxsResponse;
    toJSON(message: MsgCreateReceivedTxsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateReceivedTxsResponse>): MsgCreateReceivedTxsResponse;
};
export declare const MsgUpdateReceivedTxs: {
    encode(message: MsgUpdateReceivedTxs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedTxs;
    fromJSON(object: any): MsgUpdateReceivedTxs;
    toJSON(message: MsgUpdateReceivedTxs): unknown;
    fromPartial(object: DeepPartial<MsgUpdateReceivedTxs>): MsgUpdateReceivedTxs;
};
export declare const MsgUpdateReceivedTxsResponse: {
    encode(_: MsgUpdateReceivedTxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedTxsResponse;
    fromJSON(_: any): MsgUpdateReceivedTxsResponse;
    toJSON(_: MsgUpdateReceivedTxsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateReceivedTxsResponse>): MsgUpdateReceivedTxsResponse;
};
export declare const MsgDeleteReceivedTxs: {
    encode(message: MsgDeleteReceivedTxs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedTxs;
    fromJSON(object: any): MsgDeleteReceivedTxs;
    toJSON(message: MsgDeleteReceivedTxs): unknown;
    fromPartial(object: DeepPartial<MsgDeleteReceivedTxs>): MsgDeleteReceivedTxs;
};
export declare const MsgDeleteReceivedTxsResponse: {
    encode(_: MsgDeleteReceivedTxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedTxsResponse;
    fromJSON(_: any): MsgDeleteReceivedTxsResponse;
    toJSON(_: MsgDeleteReceivedTxsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteReceivedTxsResponse>): MsgDeleteReceivedTxsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateSendToTezosSigned(request: MsgCreateSendToTezosSigned): Promise<MsgCreateSendToTezosSignedResponse>;
    UpdateSendToTezosSigned(request: MsgUpdateSendToTezosSigned): Promise<MsgUpdateSendToTezosSignedResponse>;
    DeleteSendToTezosSigned(request: MsgDeleteSendToTezosSigned): Promise<MsgDeleteSendToTezosSignedResponse>;
    CreateReceivedFa12Txs(request: MsgCreateReceivedFa12Txs): Promise<MsgCreateReceivedFa12TxsResponse>;
    UpdateReceivedFa12Txs(request: MsgUpdateReceivedFa12Txs): Promise<MsgUpdateReceivedFa12TxsResponse>;
    DeleteReceivedFa12Txs(request: MsgDeleteReceivedFa12Txs): Promise<MsgDeleteReceivedFa12TxsResponse>;
    CreateSendToTezos(request: MsgCreateSendToTezos): Promise<MsgCreateSendToTezosResponse>;
    UpdateSendToTezos(request: MsgUpdateSendToTezos): Promise<MsgUpdateSendToTezosResponse>;
    DeleteSendToTezos(request: MsgDeleteSendToTezos): Promise<MsgDeleteSendToTezosResponse>;
    CreateReceivedTxs(request: MsgCreateReceivedTxs): Promise<MsgCreateReceivedTxsResponse>;
    UpdateReceivedTxs(request: MsgUpdateReceivedTxs): Promise<MsgUpdateReceivedTxsResponse>;
    DeleteReceivedTxs(request: MsgDeleteReceivedTxs): Promise<MsgDeleteReceivedTxsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateSendToTezosSigned(request: MsgCreateSendToTezosSigned): Promise<MsgCreateSendToTezosSignedResponse>;
    UpdateSendToTezosSigned(request: MsgUpdateSendToTezosSigned): Promise<MsgUpdateSendToTezosSignedResponse>;
    DeleteSendToTezosSigned(request: MsgDeleteSendToTezosSigned): Promise<MsgDeleteSendToTezosSignedResponse>;
    CreateReceivedFa12Txs(request: MsgCreateReceivedFa12Txs): Promise<MsgCreateReceivedFa12TxsResponse>;
    UpdateReceivedFa12Txs(request: MsgUpdateReceivedFa12Txs): Promise<MsgUpdateReceivedFa12TxsResponse>;
    DeleteReceivedFa12Txs(request: MsgDeleteReceivedFa12Txs): Promise<MsgDeleteReceivedFa12TxsResponse>;
    CreateSendToTezos(request: MsgCreateSendToTezos): Promise<MsgCreateSendToTezosResponse>;
    UpdateSendToTezos(request: MsgUpdateSendToTezos): Promise<MsgUpdateSendToTezosResponse>;
    DeleteSendToTezos(request: MsgDeleteSendToTezos): Promise<MsgDeleteSendToTezosResponse>;
    CreateReceivedTxs(request: MsgCreateReceivedTxs): Promise<MsgCreateReceivedTxsResponse>;
    UpdateReceivedTxs(request: MsgUpdateReceivedTxs): Promise<MsgUpdateReceivedTxsResponse>;
    DeleteReceivedTxs(request: MsgDeleteReceivedTxs): Promise<MsgDeleteReceivedTxsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
