/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sap200.bifrost.bifrost'

export interface SendToTezosSigned {
  creator: string
  id: number
  tezosReceiver: string
  amount: string
  denom: string
  tezosSignerPrivateKey: string
}

const baseSendToTezosSigned: object = { creator: '', id: 0, tezosReceiver: '', amount: '', denom: '', tezosSignerPrivateKey: '' }

export const SendToTezosSigned = {
  encode(message: SendToTezosSigned, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.tezosReceiver !== '') {
      writer.uint32(26).string(message.tezosReceiver)
    }
    if (message.amount !== '') {
      writer.uint32(34).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(42).string(message.denom)
    }
    if (message.tezosSignerPrivateKey !== '') {
      writer.uint32(50).string(message.tezosSignerPrivateKey)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): SendToTezosSigned {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSendToTezosSigned } as SendToTezosSigned
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.tezosReceiver = reader.string()
          break
        case 4:
          message.amount = reader.string()
          break
        case 5:
          message.denom = reader.string()
          break
        case 6:
          message.tezosSignerPrivateKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SendToTezosSigned {
    const message = { ...baseSendToTezosSigned } as SendToTezosSigned
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
      message.tezosReceiver = String(object.tezosReceiver)
    } else {
      message.tezosReceiver = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.tezosSignerPrivateKey !== undefined && object.tezosSignerPrivateKey !== null) {
      message.tezosSignerPrivateKey = String(object.tezosSignerPrivateKey)
    } else {
      message.tezosSignerPrivateKey = ''
    }
    return message
  },

  toJSON(message: SendToTezosSigned): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    message.tezosSignerPrivateKey !== undefined && (obj.tezosSignerPrivateKey = message.tezosSignerPrivateKey)
    return obj
  },

  fromPartial(object: DeepPartial<SendToTezosSigned>): SendToTezosSigned {
    const message = { ...baseSendToTezosSigned } as SendToTezosSigned
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
      message.tezosReceiver = object.tezosReceiver
    } else {
      message.tezosReceiver = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.tezosSignerPrivateKey !== undefined && object.tezosSignerPrivateKey !== null) {
      message.tezosSignerPrivateKey = object.tezosSignerPrivateKey
    } else {
      message.tezosSignerPrivateKey = ''
    }
    return message
  }
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
