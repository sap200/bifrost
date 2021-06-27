/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sap200.bifrost.bifrost'

export interface ReceivedFa12Txs {
  creator: string
  id: number
  txid: string
  tezosSender: string
  denom: string
  cosmosReceiver: string
  amount: string
  srcChain: string
  destChain: string
  txStatus: string
  isApproval: string
  approver: string
  timestamp: string
  relayTimestamp: string
}

const baseReceivedFa12Txs: object = {
  creator: '',
  id: 0,
  txid: '',
  tezosSender: '',
  denom: '',
  cosmosReceiver: '',
  amount: '',
  srcChain: '',
  destChain: '',
  txStatus: '',
  isApproval: '',
  approver: '',
  timestamp: '',
  relayTimestamp: ''
}

export const ReceivedFa12Txs = {
  encode(message: ReceivedFa12Txs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.txid !== '') {
      writer.uint32(26).string(message.txid)
    }
    if (message.tezosSender !== '') {
      writer.uint32(34).string(message.tezosSender)
    }
    if (message.denom !== '') {
      writer.uint32(42).string(message.denom)
    }
    if (message.cosmosReceiver !== '') {
      writer.uint32(50).string(message.cosmosReceiver)
    }
    if (message.amount !== '') {
      writer.uint32(58).string(message.amount)
    }
    if (message.srcChain !== '') {
      writer.uint32(66).string(message.srcChain)
    }
    if (message.destChain !== '') {
      writer.uint32(74).string(message.destChain)
    }
    if (message.txStatus !== '') {
      writer.uint32(82).string(message.txStatus)
    }
    if (message.isApproval !== '') {
      writer.uint32(90).string(message.isApproval)
    }
    if (message.approver !== '') {
      writer.uint32(98).string(message.approver)
    }
    if (message.timestamp !== '') {
      writer.uint32(106).string(message.timestamp)
    }
    if (message.relayTimestamp !== '') {
      writer.uint32(114).string(message.relayTimestamp)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ReceivedFa12Txs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseReceivedFa12Txs } as ReceivedFa12Txs
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
          message.txid = reader.string()
          break
        case 4:
          message.tezosSender = reader.string()
          break
        case 5:
          message.denom = reader.string()
          break
        case 6:
          message.cosmosReceiver = reader.string()
          break
        case 7:
          message.amount = reader.string()
          break
        case 8:
          message.srcChain = reader.string()
          break
        case 9:
          message.destChain = reader.string()
          break
        case 10:
          message.txStatus = reader.string()
          break
        case 11:
          message.isApproval = reader.string()
          break
        case 12:
          message.approver = reader.string()
          break
        case 13:
          message.timestamp = reader.string()
          break
        case 14:
          message.relayTimestamp = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ReceivedFa12Txs {
    const message = { ...baseReceivedFa12Txs } as ReceivedFa12Txs
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
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.tezosSender !== undefined && object.tezosSender !== null) {
      message.tezosSender = String(object.tezosSender)
    } else {
      message.tezosSender = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
      message.cosmosReceiver = String(object.cosmosReceiver)
    } else {
      message.cosmosReceiver = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.srcChain !== undefined && object.srcChain !== null) {
      message.srcChain = String(object.srcChain)
    } else {
      message.srcChain = ''
    }
    if (object.destChain !== undefined && object.destChain !== null) {
      message.destChain = String(object.destChain)
    } else {
      message.destChain = ''
    }
    if (object.txStatus !== undefined && object.txStatus !== null) {
      message.txStatus = String(object.txStatus)
    } else {
      message.txStatus = ''
    }
    if (object.isApproval !== undefined && object.isApproval !== null) {
      message.isApproval = String(object.isApproval)
    } else {
      message.isApproval = ''
    }
    if (object.approver !== undefined && object.approver !== null) {
      message.approver = String(object.approver)
    } else {
      message.approver = ''
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp)
    } else {
      message.timestamp = ''
    }
    if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
      message.relayTimestamp = String(object.relayTimestamp)
    } else {
      message.relayTimestamp = ''
    }
    return message
  },

  toJSON(message: ReceivedFa12Txs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txid !== undefined && (obj.txid = message.txid)
    message.tezosSender !== undefined && (obj.tezosSender = message.tezosSender)
    message.denom !== undefined && (obj.denom = message.denom)
    message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.srcChain !== undefined && (obj.srcChain = message.srcChain)
    message.destChain !== undefined && (obj.destChain = message.destChain)
    message.txStatus !== undefined && (obj.txStatus = message.txStatus)
    message.isApproval !== undefined && (obj.isApproval = message.isApproval)
    message.approver !== undefined && (obj.approver = message.approver)
    message.timestamp !== undefined && (obj.timestamp = message.timestamp)
    message.relayTimestamp !== undefined && (obj.relayTimestamp = message.relayTimestamp)
    return obj
  },

  fromPartial(object: DeepPartial<ReceivedFa12Txs>): ReceivedFa12Txs {
    const message = { ...baseReceivedFa12Txs } as ReceivedFa12Txs
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
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.tezosSender !== undefined && object.tezosSender !== null) {
      message.tezosSender = object.tezosSender
    } else {
      message.tezosSender = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
      message.cosmosReceiver = object.cosmosReceiver
    } else {
      message.cosmosReceiver = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.srcChain !== undefined && object.srcChain !== null) {
      message.srcChain = object.srcChain
    } else {
      message.srcChain = ''
    }
    if (object.destChain !== undefined && object.destChain !== null) {
      message.destChain = object.destChain
    } else {
      message.destChain = ''
    }
    if (object.txStatus !== undefined && object.txStatus !== null) {
      message.txStatus = object.txStatus
    } else {
      message.txStatus = ''
    }
    if (object.isApproval !== undefined && object.isApproval !== null) {
      message.isApproval = object.isApproval
    } else {
      message.isApproval = ''
    }
    if (object.approver !== undefined && object.approver !== null) {
      message.approver = object.approver
    } else {
      message.approver = ''
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp
    } else {
      message.timestamp = ''
    }
    if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
      message.relayTimestamp = object.relayTimestamp
    } else {
      message.relayTimestamp = ''
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
