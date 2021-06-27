export interface BifrostMsgCreateReceivedFa12TxsResponse {
    /** @format uint64 */
    id?: string;
}
export interface BifrostMsgCreateReceivedTxsResponse {
    /** @format uint64 */
    id?: string;
}
export interface BifrostMsgCreateSendToTezosResponse {
    /** @format uint64 */
    id?: string;
}
export interface BifrostMsgCreateSendToTezosSignedResponse {
    /** @format uint64 */
    id?: string;
}
export declare type BifrostMsgDeleteReceivedFa12TxsResponse = object;
export declare type BifrostMsgDeleteReceivedTxsResponse = object;
export declare type BifrostMsgDeleteSendToTezosResponse = object;
export declare type BifrostMsgDeleteSendToTezosSignedResponse = object;
export declare type BifrostMsgUpdateReceivedFa12TxsResponse = object;
export declare type BifrostMsgUpdateReceivedTxsResponse = object;
export declare type BifrostMsgUpdateSendToTezosResponse = object;
export declare type BifrostMsgUpdateSendToTezosSignedResponse = object;
export interface BifrostQueryAllReceivedFa12TxsResponse {
    ReceivedFa12Txs?: BifrostReceivedFa12Txs[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface BifrostQueryAllReceivedTxsResponse {
    ReceivedTxs?: BifrostReceivedTxs[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface BifrostQueryAllSendToTezosResponse {
    SendToTezos?: BifrostSendToTezos[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface BifrostQueryAllSendToTezosSignedResponse {
    SendToTezosSigned?: BifrostSendToTezosSigned[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface BifrostQueryGetReceivedFa12TxsResponse {
    ReceivedFa12Txs?: BifrostReceivedFa12Txs;
}
export interface BifrostQueryGetReceivedTxsResponse {
    ReceivedTxs?: BifrostReceivedTxs;
}
export interface BifrostQueryGetSendToTezosResponse {
    SendToTezos?: BifrostSendToTezos;
}
export interface BifrostQueryGetSendToTezosSignedResponse {
    SendToTezosSigned?: BifrostSendToTezosSigned;
}
export interface BifrostReceivedFa12Txs {
    creator?: string;
    /** @format uint64 */
    id?: string;
    txid?: string;
    tezosSender?: string;
    denom?: string;
    cosmosReceiver?: string;
    amount?: string;
    srcChain?: string;
    destChain?: string;
    txStatus?: string;
    isApproval?: string;
    approver?: string;
    timestamp?: string;
    relayTimestamp?: string;
}
export interface BifrostReceivedTxs {
    creator?: string;
    /** @format uint64 */
    id?: string;
    txid?: string;
    tezosSender?: string;
    cosmosReceiver?: string;
    amount?: string;
    denom?: string;
    srcChain?: string;
    destChain?: string;
    txStatus?: string;
    timestamp?: string;
    relayTimestamp?: string;
}
export interface BifrostSendToTezos {
    creator?: string;
    /** @format uint64 */
    id?: string;
    tezosReceiver?: string;
    amount?: string;
    denom?: string;
}
export interface BifrostSendToTezosSigned {
    creator?: string;
    /** @format uint64 */
    id?: string;
    tezosReceiver?: string;
    amount?: string;
    denom?: string;
    tezosSignerPrivateKey?: string;
}
export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title bifrost/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryReceivedFa12TxsAll
     * @summary Queries a list of receivedFa12Txs items.
     * @request GET:/sap200/bifrost/bifrost/receivedFa12Txs
     */
    queryReceivedFa12TxsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BifrostQueryAllReceivedFa12TxsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryReceivedFa12Txs
     * @summary Queries a receivedFa12Txs by id.
     * @request GET:/sap200/bifrost/bifrost/receivedFa12Txs/{id}
     */
    queryReceivedFa12Txs: (id: string, params?: RequestParams) => Promise<HttpResponse<BifrostQueryGetReceivedFa12TxsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryReceivedTxsAll
     * @summary Queries a list of receivedTxs items.
     * @request GET:/sap200/bifrost/bifrost/receivedTxs
     */
    queryReceivedTxsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BifrostQueryAllReceivedTxsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryReceivedTxs
     * @summary Queries a receivedTxs by id.
     * @request GET:/sap200/bifrost/bifrost/receivedTxs/{id}
     */
    queryReceivedTxs: (id: string, params?: RequestParams) => Promise<HttpResponse<BifrostQueryGetReceivedTxsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySendToTezosAll
     * @summary Queries a list of sendToTezos items.
     * @request GET:/sap200/bifrost/bifrost/sendToTezos
     */
    querySendToTezosAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BifrostQueryAllSendToTezosResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySendToTezos
     * @summary Queries a sendToTezos by id.
     * @request GET:/sap200/bifrost/bifrost/sendToTezos/{id}
     */
    querySendToTezos: (id: string, params?: RequestParams) => Promise<HttpResponse<BifrostQueryGetSendToTezosResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySendToTezosSignedAll
     * @summary Queries a list of sendToTezosSigned items.
     * @request GET:/sap200/bifrost/bifrost/sendToTezosSigned
     */
    querySendToTezosSignedAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BifrostQueryAllSendToTezosSignedResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySendToTezosSigned
     * @summary Queries a sendToTezosSigned by id.
     * @request GET:/sap200/bifrost/bifrost/sendToTezosSigned/{id}
     */
    querySendToTezosSigned: (id: string, params?: RequestParams) => Promise<HttpResponse<BifrostQueryGetSendToTezosSignedResponse, RpcStatus>>;
}
export {};
