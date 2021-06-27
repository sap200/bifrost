import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.bifrost.bifrost";
export interface ReceivedFa12Txs {
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
export declare const ReceivedFa12Txs: {
    encode(message: ReceivedFa12Txs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ReceivedFa12Txs;
    fromJSON(object: any): ReceivedFa12Txs;
    toJSON(message: ReceivedFa12Txs): unknown;
    fromPartial(object: DeepPartial<ReceivedFa12Txs>): ReceivedFa12Txs;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
