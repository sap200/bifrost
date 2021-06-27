import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.bifrost.bifrost";
export interface SendToTezosSigned {
    creator: string;
    id: number;
    tezosReceiver: string;
    amount: string;
    denom: string;
    tezosSignerPrivateKey: string;
}
export declare const SendToTezosSigned: {
    encode(message: SendToTezosSigned, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SendToTezosSigned;
    fromJSON(object: any): SendToTezosSigned;
    toJSON(message: SendToTezosSigned): unknown;
    fromPartial(object: DeepPartial<SendToTezosSigned>): SendToTezosSigned;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
