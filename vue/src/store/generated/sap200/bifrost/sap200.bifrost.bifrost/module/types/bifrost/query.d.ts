import { Reader, Writer } from 'protobufjs/minimal';
import { SendToTezosSigned } from '../bifrost/sendToTezosSigned';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { ReceivedFa12Txs } from '../bifrost/receivedFa12Txs';
import { SendToTezos } from '../bifrost/sendToTezos';
import { ReceivedTxs } from '../bifrost/receivedTxs';
export declare const protobufPackage = "sap200.bifrost.bifrost";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetSendToTezosSignedRequest {
    id: number;
}
export interface QueryGetSendToTezosSignedResponse {
    SendToTezosSigned: SendToTezosSigned | undefined;
}
export interface QueryAllSendToTezosSignedRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSendToTezosSignedResponse {
    SendToTezosSigned: SendToTezosSigned[];
    pagination: PageResponse | undefined;
}
export interface QueryGetReceivedFa12TxsRequest {
    id: number;
}
export interface QueryGetReceivedFa12TxsResponse {
    ReceivedFa12Txs: ReceivedFa12Txs | undefined;
}
export interface QueryAllReceivedFa12TxsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllReceivedFa12TxsResponse {
    ReceivedFa12Txs: ReceivedFa12Txs[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSendToTezosRequest {
    id: number;
}
export interface QueryGetSendToTezosResponse {
    SendToTezos: SendToTezos | undefined;
}
export interface QueryAllSendToTezosRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSendToTezosResponse {
    SendToTezos: SendToTezos[];
    pagination: PageResponse | undefined;
}
export interface QueryGetReceivedTxsRequest {
    id: number;
}
export interface QueryGetReceivedTxsResponse {
    ReceivedTxs: ReceivedTxs | undefined;
}
export interface QueryAllReceivedTxsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllReceivedTxsResponse {
    ReceivedTxs: ReceivedTxs[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetSendToTezosSignedRequest: {
    encode(message: QueryGetSendToTezosSignedRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosSignedRequest;
    fromJSON(object: any): QueryGetSendToTezosSignedRequest;
    toJSON(message: QueryGetSendToTezosSignedRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSendToTezosSignedRequest>): QueryGetSendToTezosSignedRequest;
};
export declare const QueryGetSendToTezosSignedResponse: {
    encode(message: QueryGetSendToTezosSignedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosSignedResponse;
    fromJSON(object: any): QueryGetSendToTezosSignedResponse;
    toJSON(message: QueryGetSendToTezosSignedResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSendToTezosSignedResponse>): QueryGetSendToTezosSignedResponse;
};
export declare const QueryAllSendToTezosSignedRequest: {
    encode(message: QueryAllSendToTezosSignedRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosSignedRequest;
    fromJSON(object: any): QueryAllSendToTezosSignedRequest;
    toJSON(message: QueryAllSendToTezosSignedRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSendToTezosSignedRequest>): QueryAllSendToTezosSignedRequest;
};
export declare const QueryAllSendToTezosSignedResponse: {
    encode(message: QueryAllSendToTezosSignedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosSignedResponse;
    fromJSON(object: any): QueryAllSendToTezosSignedResponse;
    toJSON(message: QueryAllSendToTezosSignedResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSendToTezosSignedResponse>): QueryAllSendToTezosSignedResponse;
};
export declare const QueryGetReceivedFa12TxsRequest: {
    encode(message: QueryGetReceivedFa12TxsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedFa12TxsRequest;
    fromJSON(object: any): QueryGetReceivedFa12TxsRequest;
    toJSON(message: QueryGetReceivedFa12TxsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetReceivedFa12TxsRequest>): QueryGetReceivedFa12TxsRequest;
};
export declare const QueryGetReceivedFa12TxsResponse: {
    encode(message: QueryGetReceivedFa12TxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedFa12TxsResponse;
    fromJSON(object: any): QueryGetReceivedFa12TxsResponse;
    toJSON(message: QueryGetReceivedFa12TxsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetReceivedFa12TxsResponse>): QueryGetReceivedFa12TxsResponse;
};
export declare const QueryAllReceivedFa12TxsRequest: {
    encode(message: QueryAllReceivedFa12TxsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedFa12TxsRequest;
    fromJSON(object: any): QueryAllReceivedFa12TxsRequest;
    toJSON(message: QueryAllReceivedFa12TxsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllReceivedFa12TxsRequest>): QueryAllReceivedFa12TxsRequest;
};
export declare const QueryAllReceivedFa12TxsResponse: {
    encode(message: QueryAllReceivedFa12TxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedFa12TxsResponse;
    fromJSON(object: any): QueryAllReceivedFa12TxsResponse;
    toJSON(message: QueryAllReceivedFa12TxsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllReceivedFa12TxsResponse>): QueryAllReceivedFa12TxsResponse;
};
export declare const QueryGetSendToTezosRequest: {
    encode(message: QueryGetSendToTezosRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosRequest;
    fromJSON(object: any): QueryGetSendToTezosRequest;
    toJSON(message: QueryGetSendToTezosRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSendToTezosRequest>): QueryGetSendToTezosRequest;
};
export declare const QueryGetSendToTezosResponse: {
    encode(message: QueryGetSendToTezosResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosResponse;
    fromJSON(object: any): QueryGetSendToTezosResponse;
    toJSON(message: QueryGetSendToTezosResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSendToTezosResponse>): QueryGetSendToTezosResponse;
};
export declare const QueryAllSendToTezosRequest: {
    encode(message: QueryAllSendToTezosRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosRequest;
    fromJSON(object: any): QueryAllSendToTezosRequest;
    toJSON(message: QueryAllSendToTezosRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSendToTezosRequest>): QueryAllSendToTezosRequest;
};
export declare const QueryAllSendToTezosResponse: {
    encode(message: QueryAllSendToTezosResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosResponse;
    fromJSON(object: any): QueryAllSendToTezosResponse;
    toJSON(message: QueryAllSendToTezosResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSendToTezosResponse>): QueryAllSendToTezosResponse;
};
export declare const QueryGetReceivedTxsRequest: {
    encode(message: QueryGetReceivedTxsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedTxsRequest;
    fromJSON(object: any): QueryGetReceivedTxsRequest;
    toJSON(message: QueryGetReceivedTxsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetReceivedTxsRequest>): QueryGetReceivedTxsRequest;
};
export declare const QueryGetReceivedTxsResponse: {
    encode(message: QueryGetReceivedTxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedTxsResponse;
    fromJSON(object: any): QueryGetReceivedTxsResponse;
    toJSON(message: QueryGetReceivedTxsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetReceivedTxsResponse>): QueryGetReceivedTxsResponse;
};
export declare const QueryAllReceivedTxsRequest: {
    encode(message: QueryAllReceivedTxsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedTxsRequest;
    fromJSON(object: any): QueryAllReceivedTxsRequest;
    toJSON(message: QueryAllReceivedTxsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllReceivedTxsRequest>): QueryAllReceivedTxsRequest;
};
export declare const QueryAllReceivedTxsResponse: {
    encode(message: QueryAllReceivedTxsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedTxsResponse;
    fromJSON(object: any): QueryAllReceivedTxsResponse;
    toJSON(message: QueryAllReceivedTxsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllReceivedTxsResponse>): QueryAllReceivedTxsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a sendToTezosSigned by id. */
    SendToTezosSigned(request: QueryGetSendToTezosSignedRequest): Promise<QueryGetSendToTezosSignedResponse>;
    /** Queries a list of sendToTezosSigned items. */
    SendToTezosSignedAll(request: QueryAllSendToTezosSignedRequest): Promise<QueryAllSendToTezosSignedResponse>;
    /** Queries a receivedFa12Txs by id. */
    ReceivedFa12Txs(request: QueryGetReceivedFa12TxsRequest): Promise<QueryGetReceivedFa12TxsResponse>;
    /** Queries a list of receivedFa12Txs items. */
    ReceivedFa12TxsAll(request: QueryAllReceivedFa12TxsRequest): Promise<QueryAllReceivedFa12TxsResponse>;
    /** Queries a sendToTezos by id. */
    SendToTezos(request: QueryGetSendToTezosRequest): Promise<QueryGetSendToTezosResponse>;
    /** Queries a list of sendToTezos items. */
    SendToTezosAll(request: QueryAllSendToTezosRequest): Promise<QueryAllSendToTezosResponse>;
    /** Queries a receivedTxs by id. */
    ReceivedTxs(request: QueryGetReceivedTxsRequest): Promise<QueryGetReceivedTxsResponse>;
    /** Queries a list of receivedTxs items. */
    ReceivedTxsAll(request: QueryAllReceivedTxsRequest): Promise<QueryAllReceivedTxsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendToTezosSigned(request: QueryGetSendToTezosSignedRequest): Promise<QueryGetSendToTezosSignedResponse>;
    SendToTezosSignedAll(request: QueryAllSendToTezosSignedRequest): Promise<QueryAllSendToTezosSignedResponse>;
    ReceivedFa12Txs(request: QueryGetReceivedFa12TxsRequest): Promise<QueryGetReceivedFa12TxsResponse>;
    ReceivedFa12TxsAll(request: QueryAllReceivedFa12TxsRequest): Promise<QueryAllReceivedFa12TxsResponse>;
    SendToTezos(request: QueryGetSendToTezosRequest): Promise<QueryGetSendToTezosResponse>;
    SendToTezosAll(request: QueryAllSendToTezosRequest): Promise<QueryAllSendToTezosResponse>;
    ReceivedTxs(request: QueryGetReceivedTxsRequest): Promise<QueryGetReceivedTxsResponse>;
    ReceivedTxsAll(request: QueryAllReceivedTxsRequest): Promise<QueryAllReceivedTxsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
