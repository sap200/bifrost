import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.bifrost.bifrost";
export interface SendToTezos {
    creator: string;
    id: number;
    tezosReceiver: string;
    amount: string;
    denom: string;
}
export declare const SendToTezos: {
    encode(message: SendToTezos, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SendToTezos;
    fromJSON(object: any): SendToTezos;
    toJSON(message: SendToTezos): unknown;
    fromPartial(object: DeepPartial<SendToTezos>): SendToTezos;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
