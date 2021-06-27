import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.bifrost.bifrost";
export interface ReceivedTxs {
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
export declare const ReceivedTxs: {
    encode(message: ReceivedTxs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ReceivedTxs;
    fromJSON(object: any): ReceivedTxs;
    toJSON(message: ReceivedTxs): unknown;
    fromPartial(object: DeepPartial<ReceivedTxs>): ReceivedTxs;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
