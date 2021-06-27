import { Writer, Reader } from 'protobufjs/minimal';
import { SendToTezosSigned } from '../bifrost/sendToTezosSigned';
import { ReceivedFa12Txs } from '../bifrost/receivedFa12Txs';
import { SendToTezos } from '../bifrost/sendToTezos';
import { ReceivedTxs } from '../bifrost/receivedTxs';
export declare const protobufPackage = "sap200.bifrost.bifrost";
/** GenesisState defines the bifrost module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    sendToTezosSignedList: SendToTezosSigned[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    sendToTezosSignedCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    receivedFa12TxsList: ReceivedFa12Txs[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    receivedFa12TxsCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    sendToTezosList: SendToTezos[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    sendToTezosCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    receivedTxsList: ReceivedTxs[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    receivedTxsCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
