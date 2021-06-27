/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { SendToTezosSigned } from '../bifrost/sendToTezosSigned'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { ReceivedFa12Txs } from '../bifrost/receivedFa12Txs'
import { SendToTezos } from '../bifrost/sendToTezos'
import { ReceivedTxs } from '../bifrost/receivedTxs'

export const protobufPackage = 'sap200.bifrost.bifrost'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSendToTezosSignedRequest {
  id: number
}

export interface QueryGetSendToTezosSignedResponse {
  SendToTezosSigned: SendToTezosSigned | undefined
}

export interface QueryAllSendToTezosSignedRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSendToTezosSignedResponse {
  SendToTezosSigned: SendToTezosSigned[]
  pagination: PageResponse | undefined
}

export interface QueryGetReceivedFa12TxsRequest {
  id: number
}

export interface QueryGetReceivedFa12TxsResponse {
  ReceivedFa12Txs: ReceivedFa12Txs | undefined
}

export interface QueryAllReceivedFa12TxsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllReceivedFa12TxsResponse {
  ReceivedFa12Txs: ReceivedFa12Txs[]
  pagination: PageResponse | undefined
}

export interface QueryGetSendToTezosRequest {
  id: number
}

export interface QueryGetSendToTezosResponse {
  SendToTezos: SendToTezos | undefined
}

export interface QueryAllSendToTezosRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSendToTezosResponse {
  SendToTezos: SendToTezos[]
  pagination: PageResponse | undefined
}

export interface QueryGetReceivedTxsRequest {
  id: number
}

export interface QueryGetReceivedTxsResponse {
  ReceivedTxs: ReceivedTxs | undefined
}

export interface QueryAllReceivedTxsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllReceivedTxsResponse {
  ReceivedTxs: ReceivedTxs[]
  pagination: PageResponse | undefined
}

const baseQueryGetSendToTezosSignedRequest: object = { id: 0 }

export const QueryGetSendToTezosSignedRequest = {
  encode(message: QueryGetSendToTezosSignedRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosSignedRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSendToTezosSignedRequest } as QueryGetSendToTezosSignedRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSendToTezosSignedRequest {
    const message = { ...baseQueryGetSendToTezosSignedRequest } as QueryGetSendToTezosSignedRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetSendToTezosSignedRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSendToTezosSignedRequest>): QueryGetSendToTezosSignedRequest {
    const message = { ...baseQueryGetSendToTezosSignedRequest } as QueryGetSendToTezosSignedRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetSendToTezosSignedResponse: object = {}

export const QueryGetSendToTezosSignedResponse = {
  encode(message: QueryGetSendToTezosSignedResponse, writer: Writer = Writer.create()): Writer {
    if (message.SendToTezosSigned !== undefined) {
      SendToTezosSigned.encode(message.SendToTezosSigned, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosSignedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSendToTezosSignedResponse } as QueryGetSendToTezosSignedResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SendToTezosSigned = SendToTezosSigned.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSendToTezosSignedResponse {
    const message = { ...baseQueryGetSendToTezosSignedResponse } as QueryGetSendToTezosSignedResponse
    if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
      message.SendToTezosSigned = SendToTezosSigned.fromJSON(object.SendToTezosSigned)
    } else {
      message.SendToTezosSigned = undefined
    }
    return message
  },

  toJSON(message: QueryGetSendToTezosSignedResponse): unknown {
    const obj: any = {}
    message.SendToTezosSigned !== undefined &&
      (obj.SendToTezosSigned = message.SendToTezosSigned ? SendToTezosSigned.toJSON(message.SendToTezosSigned) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSendToTezosSignedResponse>): QueryGetSendToTezosSignedResponse {
    const message = { ...baseQueryGetSendToTezosSignedResponse } as QueryGetSendToTezosSignedResponse
    if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
      message.SendToTezosSigned = SendToTezosSigned.fromPartial(object.SendToTezosSigned)
    } else {
      message.SendToTezosSigned = undefined
    }
    return message
  }
}

const baseQueryAllSendToTezosSignedRequest: object = {}

export const QueryAllSendToTezosSignedRequest = {
  encode(message: QueryAllSendToTezosSignedRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosSignedRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSendToTezosSignedRequest } as QueryAllSendToTezosSignedRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSendToTezosSignedRequest {
    const message = { ...baseQueryAllSendToTezosSignedRequest } as QueryAllSendToTezosSignedRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSendToTezosSignedRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSendToTezosSignedRequest>): QueryAllSendToTezosSignedRequest {
    const message = { ...baseQueryAllSendToTezosSignedRequest } as QueryAllSendToTezosSignedRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSendToTezosSignedResponse: object = {}

export const QueryAllSendToTezosSignedResponse = {
  encode(message: QueryAllSendToTezosSignedResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.SendToTezosSigned) {
      SendToTezosSigned.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosSignedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSendToTezosSignedResponse } as QueryAllSendToTezosSignedResponse
    message.SendToTezosSigned = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SendToTezosSigned.push(SendToTezosSigned.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSendToTezosSignedResponse {
    const message = { ...baseQueryAllSendToTezosSignedResponse } as QueryAllSendToTezosSignedResponse
    message.SendToTezosSigned = []
    if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
      for (const e of object.SendToTezosSigned) {
        message.SendToTezosSigned.push(SendToTezosSigned.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSendToTezosSignedResponse): unknown {
    const obj: any = {}
    if (message.SendToTezosSigned) {
      obj.SendToTezosSigned = message.SendToTezosSigned.map((e) => (e ? SendToTezosSigned.toJSON(e) : undefined))
    } else {
      obj.SendToTezosSigned = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSendToTezosSignedResponse>): QueryAllSendToTezosSignedResponse {
    const message = { ...baseQueryAllSendToTezosSignedResponse } as QueryAllSendToTezosSignedResponse
    message.SendToTezosSigned = []
    if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
      for (const e of object.SendToTezosSigned) {
        message.SendToTezosSigned.push(SendToTezosSigned.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetReceivedFa12TxsRequest: object = { id: 0 }

export const QueryGetReceivedFa12TxsRequest = {
  encode(message: QueryGetReceivedFa12TxsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedFa12TxsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetReceivedFa12TxsRequest } as QueryGetReceivedFa12TxsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetReceivedFa12TxsRequest {
    const message = { ...baseQueryGetReceivedFa12TxsRequest } as QueryGetReceivedFa12TxsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetReceivedFa12TxsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetReceivedFa12TxsRequest>): QueryGetReceivedFa12TxsRequest {
    const message = { ...baseQueryGetReceivedFa12TxsRequest } as QueryGetReceivedFa12TxsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetReceivedFa12TxsResponse: object = {}

export const QueryGetReceivedFa12TxsResponse = {
  encode(message: QueryGetReceivedFa12TxsResponse, writer: Writer = Writer.create()): Writer {
    if (message.ReceivedFa12Txs !== undefined) {
      ReceivedFa12Txs.encode(message.ReceivedFa12Txs, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedFa12TxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetReceivedFa12TxsResponse } as QueryGetReceivedFa12TxsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ReceivedFa12Txs = ReceivedFa12Txs.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetReceivedFa12TxsResponse {
    const message = { ...baseQueryGetReceivedFa12TxsResponse } as QueryGetReceivedFa12TxsResponse
    if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
      message.ReceivedFa12Txs = ReceivedFa12Txs.fromJSON(object.ReceivedFa12Txs)
    } else {
      message.ReceivedFa12Txs = undefined
    }
    return message
  },

  toJSON(message: QueryGetReceivedFa12TxsResponse): unknown {
    const obj: any = {}
    message.ReceivedFa12Txs !== undefined && (obj.ReceivedFa12Txs = message.ReceivedFa12Txs ? ReceivedFa12Txs.toJSON(message.ReceivedFa12Txs) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetReceivedFa12TxsResponse>): QueryGetReceivedFa12TxsResponse {
    const message = { ...baseQueryGetReceivedFa12TxsResponse } as QueryGetReceivedFa12TxsResponse
    if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
      message.ReceivedFa12Txs = ReceivedFa12Txs.fromPartial(object.ReceivedFa12Txs)
    } else {
      message.ReceivedFa12Txs = undefined
    }
    return message
  }
}

const baseQueryAllReceivedFa12TxsRequest: object = {}

export const QueryAllReceivedFa12TxsRequest = {
  encode(message: QueryAllReceivedFa12TxsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedFa12TxsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllReceivedFa12TxsRequest } as QueryAllReceivedFa12TxsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllReceivedFa12TxsRequest {
    const message = { ...baseQueryAllReceivedFa12TxsRequest } as QueryAllReceivedFa12TxsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllReceivedFa12TxsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllReceivedFa12TxsRequest>): QueryAllReceivedFa12TxsRequest {
    const message = { ...baseQueryAllReceivedFa12TxsRequest } as QueryAllReceivedFa12TxsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllReceivedFa12TxsResponse: object = {}

export const QueryAllReceivedFa12TxsResponse = {
  encode(message: QueryAllReceivedFa12TxsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ReceivedFa12Txs) {
      ReceivedFa12Txs.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedFa12TxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllReceivedFa12TxsResponse } as QueryAllReceivedFa12TxsResponse
    message.ReceivedFa12Txs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ReceivedFa12Txs.push(ReceivedFa12Txs.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllReceivedFa12TxsResponse {
    const message = { ...baseQueryAllReceivedFa12TxsResponse } as QueryAllReceivedFa12TxsResponse
    message.ReceivedFa12Txs = []
    if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
      for (const e of object.ReceivedFa12Txs) {
        message.ReceivedFa12Txs.push(ReceivedFa12Txs.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllReceivedFa12TxsResponse): unknown {
    const obj: any = {}
    if (message.ReceivedFa12Txs) {
      obj.ReceivedFa12Txs = message.ReceivedFa12Txs.map((e) => (e ? ReceivedFa12Txs.toJSON(e) : undefined))
    } else {
      obj.ReceivedFa12Txs = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllReceivedFa12TxsResponse>): QueryAllReceivedFa12TxsResponse {
    const message = { ...baseQueryAllReceivedFa12TxsResponse } as QueryAllReceivedFa12TxsResponse
    message.ReceivedFa12Txs = []
    if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
      for (const e of object.ReceivedFa12Txs) {
        message.ReceivedFa12Txs.push(ReceivedFa12Txs.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetSendToTezosRequest: object = { id: 0 }

export const QueryGetSendToTezosRequest = {
  encode(message: QueryGetSendToTezosRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSendToTezosRequest } as QueryGetSendToTezosRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSendToTezosRequest {
    const message = { ...baseQueryGetSendToTezosRequest } as QueryGetSendToTezosRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetSendToTezosRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSendToTezosRequest>): QueryGetSendToTezosRequest {
    const message = { ...baseQueryGetSendToTezosRequest } as QueryGetSendToTezosRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetSendToTezosResponse: object = {}

export const QueryGetSendToTezosResponse = {
  encode(message: QueryGetSendToTezosResponse, writer: Writer = Writer.create()): Writer {
    if (message.SendToTezos !== undefined) {
      SendToTezos.encode(message.SendToTezos, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSendToTezosResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSendToTezosResponse } as QueryGetSendToTezosResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SendToTezos = SendToTezos.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSendToTezosResponse {
    const message = { ...baseQueryGetSendToTezosResponse } as QueryGetSendToTezosResponse
    if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
      message.SendToTezos = SendToTezos.fromJSON(object.SendToTezos)
    } else {
      message.SendToTezos = undefined
    }
    return message
  },

  toJSON(message: QueryGetSendToTezosResponse): unknown {
    const obj: any = {}
    message.SendToTezos !== undefined && (obj.SendToTezos = message.SendToTezos ? SendToTezos.toJSON(message.SendToTezos) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSendToTezosResponse>): QueryGetSendToTezosResponse {
    const message = { ...baseQueryGetSendToTezosResponse } as QueryGetSendToTezosResponse
    if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
      message.SendToTezos = SendToTezos.fromPartial(object.SendToTezos)
    } else {
      message.SendToTezos = undefined
    }
    return message
  }
}

const baseQueryAllSendToTezosRequest: object = {}

export const QueryAllSendToTezosRequest = {
  encode(message: QueryAllSendToTezosRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSendToTezosRequest } as QueryAllSendToTezosRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSendToTezosRequest {
    const message = { ...baseQueryAllSendToTezosRequest } as QueryAllSendToTezosRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSendToTezosRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSendToTezosRequest>): QueryAllSendToTezosRequest {
    const message = { ...baseQueryAllSendToTezosRequest } as QueryAllSendToTezosRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSendToTezosResponse: object = {}

export const QueryAllSendToTezosResponse = {
  encode(message: QueryAllSendToTezosResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.SendToTezos) {
      SendToTezos.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSendToTezosResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSendToTezosResponse } as QueryAllSendToTezosResponse
    message.SendToTezos = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SendToTezos.push(SendToTezos.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSendToTezosResponse {
    const message = { ...baseQueryAllSendToTezosResponse } as QueryAllSendToTezosResponse
    message.SendToTezos = []
    if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
      for (const e of object.SendToTezos) {
        message.SendToTezos.push(SendToTezos.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSendToTezosResponse): unknown {
    const obj: any = {}
    if (message.SendToTezos) {
      obj.SendToTezos = message.SendToTezos.map((e) => (e ? SendToTezos.toJSON(e) : undefined))
    } else {
      obj.SendToTezos = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSendToTezosResponse>): QueryAllSendToTezosResponse {
    const message = { ...baseQueryAllSendToTezosResponse } as QueryAllSendToTezosResponse
    message.SendToTezos = []
    if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
      for (const e of object.SendToTezos) {
        message.SendToTezos.push(SendToTezos.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetReceivedTxsRequest: object = { id: 0 }

export const QueryGetReceivedTxsRequest = {
  encode(message: QueryGetReceivedTxsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedTxsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetReceivedTxsRequest } as QueryGetReceivedTxsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetReceivedTxsRequest {
    const message = { ...baseQueryGetReceivedTxsRequest } as QueryGetReceivedTxsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetReceivedTxsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetReceivedTxsRequest>): QueryGetReceivedTxsRequest {
    const message = { ...baseQueryGetReceivedTxsRequest } as QueryGetReceivedTxsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetReceivedTxsResponse: object = {}

export const QueryGetReceivedTxsResponse = {
  encode(message: QueryGetReceivedTxsResponse, writer: Writer = Writer.create()): Writer {
    if (message.ReceivedTxs !== undefined) {
      ReceivedTxs.encode(message.ReceivedTxs, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetReceivedTxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetReceivedTxsResponse } as QueryGetReceivedTxsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ReceivedTxs = ReceivedTxs.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetReceivedTxsResponse {
    const message = { ...baseQueryGetReceivedTxsResponse } as QueryGetReceivedTxsResponse
    if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
      message.ReceivedTxs = ReceivedTxs.fromJSON(object.ReceivedTxs)
    } else {
      message.ReceivedTxs = undefined
    }
    return message
  },

  toJSON(message: QueryGetReceivedTxsResponse): unknown {
    const obj: any = {}
    message.ReceivedTxs !== undefined && (obj.ReceivedTxs = message.ReceivedTxs ? ReceivedTxs.toJSON(message.ReceivedTxs) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetReceivedTxsResponse>): QueryGetReceivedTxsResponse {
    const message = { ...baseQueryGetReceivedTxsResponse } as QueryGetReceivedTxsResponse
    if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
      message.ReceivedTxs = ReceivedTxs.fromPartial(object.ReceivedTxs)
    } else {
      message.ReceivedTxs = undefined
    }
    return message
  }
}

const baseQueryAllReceivedTxsRequest: object = {}

export const QueryAllReceivedTxsRequest = {
  encode(message: QueryAllReceivedTxsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedTxsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllReceivedTxsRequest } as QueryAllReceivedTxsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllReceivedTxsRequest {
    const message = { ...baseQueryAllReceivedTxsRequest } as QueryAllReceivedTxsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllReceivedTxsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllReceivedTxsRequest>): QueryAllReceivedTxsRequest {
    const message = { ...baseQueryAllReceivedTxsRequest } as QueryAllReceivedTxsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllReceivedTxsResponse: object = {}

export const QueryAllReceivedTxsResponse = {
  encode(message: QueryAllReceivedTxsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ReceivedTxs) {
      ReceivedTxs.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllReceivedTxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllReceivedTxsResponse } as QueryAllReceivedTxsResponse
    message.ReceivedTxs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ReceivedTxs.push(ReceivedTxs.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllReceivedTxsResponse {
    const message = { ...baseQueryAllReceivedTxsResponse } as QueryAllReceivedTxsResponse
    message.ReceivedTxs = []
    if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
      for (const e of object.ReceivedTxs) {
        message.ReceivedTxs.push(ReceivedTxs.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllReceivedTxsResponse): unknown {
    const obj: any = {}
    if (message.ReceivedTxs) {
      obj.ReceivedTxs = message.ReceivedTxs.map((e) => (e ? ReceivedTxs.toJSON(e) : undefined))
    } else {
      obj.ReceivedTxs = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllReceivedTxsResponse>): QueryAllReceivedTxsResponse {
    const message = { ...baseQueryAllReceivedTxsResponse } as QueryAllReceivedTxsResponse
    message.ReceivedTxs = []
    if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
      for (const e of object.ReceivedTxs) {
        message.ReceivedTxs.push(ReceivedTxs.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a sendToTezosSigned by id. */
  SendToTezosSigned(request: QueryGetSendToTezosSignedRequest): Promise<QueryGetSendToTezosSignedResponse>
  /** Queries a list of sendToTezosSigned items. */
  SendToTezosSignedAll(request: QueryAllSendToTezosSignedRequest): Promise<QueryAllSendToTezosSignedResponse>
  /** Queries a receivedFa12Txs by id. */
  ReceivedFa12Txs(request: QueryGetReceivedFa12TxsRequest): Promise<QueryGetReceivedFa12TxsResponse>
  /** Queries a list of receivedFa12Txs items. */
  ReceivedFa12TxsAll(request: QueryAllReceivedFa12TxsRequest): Promise<QueryAllReceivedFa12TxsResponse>
  /** Queries a sendToTezos by id. */
  SendToTezos(request: QueryGetSendToTezosRequest): Promise<QueryGetSendToTezosResponse>
  /** Queries a list of sendToTezos items. */
  SendToTezosAll(request: QueryAllSendToTezosRequest): Promise<QueryAllSendToTezosResponse>
  /** Queries a receivedTxs by id. */
  ReceivedTxs(request: QueryGetReceivedTxsRequest): Promise<QueryGetReceivedTxsResponse>
  /** Queries a list of receivedTxs items. */
  ReceivedTxsAll(request: QueryAllReceivedTxsRequest): Promise<QueryAllReceivedTxsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SendToTezosSigned(request: QueryGetSendToTezosSignedRequest): Promise<QueryGetSendToTezosSignedResponse> {
    const data = QueryGetSendToTezosSignedRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezosSigned', data)
    return promise.then((data) => QueryGetSendToTezosSignedResponse.decode(new Reader(data)))
  }

  SendToTezosSignedAll(request: QueryAllSendToTezosSignedRequest): Promise<QueryAllSendToTezosSignedResponse> {
    const data = QueryAllSendToTezosSignedRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezosSignedAll', data)
    return promise.then((data) => QueryAllSendToTezosSignedResponse.decode(new Reader(data)))
  }

  ReceivedFa12Txs(request: QueryGetReceivedFa12TxsRequest): Promise<QueryGetReceivedFa12TxsResponse> {
    const data = QueryGetReceivedFa12TxsRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedFa12Txs', data)
    return promise.then((data) => QueryGetReceivedFa12TxsResponse.decode(new Reader(data)))
  }

  ReceivedFa12TxsAll(request: QueryAllReceivedFa12TxsRequest): Promise<QueryAllReceivedFa12TxsResponse> {
    const data = QueryAllReceivedFa12TxsRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedFa12TxsAll', data)
    return promise.then((data) => QueryAllReceivedFa12TxsResponse.decode(new Reader(data)))
  }

  SendToTezos(request: QueryGetSendToTezosRequest): Promise<QueryGetSendToTezosResponse> {
    const data = QueryGetSendToTezosRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezos', data)
    return promise.then((data) => QueryGetSendToTezosResponse.decode(new Reader(data)))
  }

  SendToTezosAll(request: QueryAllSendToTezosRequest): Promise<QueryAllSendToTezosResponse> {
    const data = QueryAllSendToTezosRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezosAll', data)
    return promise.then((data) => QueryAllSendToTezosResponse.decode(new Reader(data)))
  }

  ReceivedTxs(request: QueryGetReceivedTxsRequest): Promise<QueryGetReceivedTxsResponse> {
    const data = QueryGetReceivedTxsRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedTxs', data)
    return promise.then((data) => QueryGetReceivedTxsResponse.decode(new Reader(data)))
  }

  ReceivedTxsAll(request: QueryAllReceivedTxsRequest): Promise<QueryAllReceivedTxsResponse> {
    const data = QueryAllReceivedTxsRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedTxsAll', data)
    return promise.then((data) => QueryAllReceivedTxsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
