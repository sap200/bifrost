/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'sap200.bifrost.bifrost'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateSendToTezosSigned {
  creator: string
  tezosReceiver: string
  amount: string
  denom: string
  tezosSignerPrivateKey: string
}

export interface MsgCreateSendToTezosSignedResponse {
  id: number
}

export interface MsgUpdateSendToTezosSigned {
  creator: string
  id: number
  tezosReceiver: string
  amount: string
  denom: string
  tezosSignerPrivateKey: string
}

export interface MsgUpdateSendToTezosSignedResponse {}

export interface MsgDeleteSendToTezosSigned {
  creator: string
  id: number
}

export interface MsgDeleteSendToTezosSignedResponse {}

export interface MsgCreateReceivedFa12Txs {
  creator: string
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

export interface MsgCreateReceivedFa12TxsResponse {
  id: number
}

export interface MsgUpdateReceivedFa12Txs {
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

export interface MsgUpdateReceivedFa12TxsResponse {}

export interface MsgDeleteReceivedFa12Txs {
  creator: string
  id: number
}

export interface MsgDeleteReceivedFa12TxsResponse {}

export interface MsgCreateSendToTezos {
  creator: string
  tezosReceiver: string
  amount: string
  denom: string
}

export interface MsgCreateSendToTezosResponse {
  id: number
}

export interface MsgUpdateSendToTezos {
  creator: string
  id: number
  tezosReceiver: string
  amount: string
  denom: string
}

export interface MsgUpdateSendToTezosResponse {}

export interface MsgDeleteSendToTezos {
  creator: string
  id: number
}

export interface MsgDeleteSendToTezosResponse {}

export interface MsgCreateReceivedTxs {
  creator: string
  txid: string
  tezosSender: string
  cosmosReceiver: string
  amount: string
  denom: string
  srcChain: string
  destChain: string
  txStatus: string
  timestamp: string
  relayTimestamp: string
}

export interface MsgCreateReceivedTxsResponse {
  id: number
}

export interface MsgUpdateReceivedTxs {
  creator: string
  id: number
  txid: string
  tezosSender: string
  cosmosReceiver: string
  amount: string
  denom: string
  srcChain: string
  destChain: string
  txStatus: string
  timestamp: string
  relayTimestamp: string
}

export interface MsgUpdateReceivedTxsResponse {}

export interface MsgDeleteReceivedTxs {
  creator: string
  id: number
}

export interface MsgDeleteReceivedTxsResponse {}

const baseMsgCreateSendToTezosSigned: object = { creator: '', tezosReceiver: '', amount: '', denom: '', tezosSignerPrivateKey: '' }

export const MsgCreateSendToTezosSigned = {
  encode(message: MsgCreateSendToTezosSigned, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.tezosReceiver !== '') {
      writer.uint32(18).string(message.tezosReceiver)
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(34).string(message.denom)
    }
    if (message.tezosSignerPrivateKey !== '') {
      writer.uint32(42).string(message.tezosSignerPrivateKey)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezosSigned {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSendToTezosSigned } as MsgCreateSendToTezosSigned
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.tezosReceiver = reader.string()
          break
        case 3:
          message.amount = reader.string()
          break
        case 4:
          message.denom = reader.string()
          break
        case 5:
          message.tezosSignerPrivateKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSendToTezosSigned {
    const message = { ...baseMsgCreateSendToTezosSigned } as MsgCreateSendToTezosSigned
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateSendToTezosSigned): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    message.tezosSignerPrivateKey !== undefined && (obj.tezosSignerPrivateKey = message.tezosSignerPrivateKey)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSendToTezosSigned>): MsgCreateSendToTezosSigned {
    const message = { ...baseMsgCreateSendToTezosSigned } as MsgCreateSendToTezosSigned
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateSendToTezosSignedResponse: object = { id: 0 }

export const MsgCreateSendToTezosSignedResponse = {
  encode(message: MsgCreateSendToTezosSignedResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezosSignedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSendToTezosSignedResponse } as MsgCreateSendToTezosSignedResponse
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

  fromJSON(object: any): MsgCreateSendToTezosSignedResponse {
    const message = { ...baseMsgCreateSendToTezosSignedResponse } as MsgCreateSendToTezosSignedResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateSendToTezosSignedResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSendToTezosSignedResponse>): MsgCreateSendToTezosSignedResponse {
    const message = { ...baseMsgCreateSendToTezosSignedResponse } as MsgCreateSendToTezosSignedResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateSendToTezosSigned: object = { creator: '', id: 0, tezosReceiver: '', amount: '', denom: '', tezosSignerPrivateKey: '' }

export const MsgUpdateSendToTezosSigned = {
  encode(message: MsgUpdateSendToTezosSigned, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezosSigned {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSendToTezosSigned } as MsgUpdateSendToTezosSigned
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

  fromJSON(object: any): MsgUpdateSendToTezosSigned {
    const message = { ...baseMsgUpdateSendToTezosSigned } as MsgUpdateSendToTezosSigned
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

  toJSON(message: MsgUpdateSendToTezosSigned): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    message.tezosSignerPrivateKey !== undefined && (obj.tezosSignerPrivateKey = message.tezosSignerPrivateKey)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateSendToTezosSigned>): MsgUpdateSendToTezosSigned {
    const message = { ...baseMsgUpdateSendToTezosSigned } as MsgUpdateSendToTezosSigned
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

const baseMsgUpdateSendToTezosSignedResponse: object = {}

export const MsgUpdateSendToTezosSignedResponse = {
  encode(_: MsgUpdateSendToTezosSignedResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezosSignedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSendToTezosSignedResponse } as MsgUpdateSendToTezosSignedResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateSendToTezosSignedResponse {
    const message = { ...baseMsgUpdateSendToTezosSignedResponse } as MsgUpdateSendToTezosSignedResponse
    return message
  },

  toJSON(_: MsgUpdateSendToTezosSignedResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateSendToTezosSignedResponse>): MsgUpdateSendToTezosSignedResponse {
    const message = { ...baseMsgUpdateSendToTezosSignedResponse } as MsgUpdateSendToTezosSignedResponse
    return message
  }
}

const baseMsgDeleteSendToTezosSigned: object = { creator: '', id: 0 }

export const MsgDeleteSendToTezosSigned = {
  encode(message: MsgDeleteSendToTezosSigned, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezosSigned {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSendToTezosSigned } as MsgDeleteSendToTezosSigned
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteSendToTezosSigned {
    const message = { ...baseMsgDeleteSendToTezosSigned } as MsgDeleteSendToTezosSigned
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
    return message
  },

  toJSON(message: MsgDeleteSendToTezosSigned): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteSendToTezosSigned>): MsgDeleteSendToTezosSigned {
    const message = { ...baseMsgDeleteSendToTezosSigned } as MsgDeleteSendToTezosSigned
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
    return message
  }
}

const baseMsgDeleteSendToTezosSignedResponse: object = {}

export const MsgDeleteSendToTezosSignedResponse = {
  encode(_: MsgDeleteSendToTezosSignedResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezosSignedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSendToTezosSignedResponse } as MsgDeleteSendToTezosSignedResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteSendToTezosSignedResponse {
    const message = { ...baseMsgDeleteSendToTezosSignedResponse } as MsgDeleteSendToTezosSignedResponse
    return message
  },

  toJSON(_: MsgDeleteSendToTezosSignedResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteSendToTezosSignedResponse>): MsgDeleteSendToTezosSignedResponse {
    const message = { ...baseMsgDeleteSendToTezosSignedResponse } as MsgDeleteSendToTezosSignedResponse
    return message
  }
}

const baseMsgCreateReceivedFa12Txs: object = {
  creator: '',
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

export const MsgCreateReceivedFa12Txs = {
  encode(message: MsgCreateReceivedFa12Txs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txid !== '') {
      writer.uint32(18).string(message.txid)
    }
    if (message.tezosSender !== '') {
      writer.uint32(26).string(message.tezosSender)
    }
    if (message.denom !== '') {
      writer.uint32(34).string(message.denom)
    }
    if (message.cosmosReceiver !== '') {
      writer.uint32(42).string(message.cosmosReceiver)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    if (message.srcChain !== '') {
      writer.uint32(58).string(message.srcChain)
    }
    if (message.destChain !== '') {
      writer.uint32(66).string(message.destChain)
    }
    if (message.txStatus !== '') {
      writer.uint32(74).string(message.txStatus)
    }
    if (message.isApproval !== '') {
      writer.uint32(82).string(message.isApproval)
    }
    if (message.approver !== '') {
      writer.uint32(90).string(message.approver)
    }
    if (message.timestamp !== '') {
      writer.uint32(98).string(message.timestamp)
    }
    if (message.relayTimestamp !== '') {
      writer.uint32(106).string(message.relayTimestamp)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedFa12Txs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateReceivedFa12Txs } as MsgCreateReceivedFa12Txs
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txid = reader.string()
          break
        case 3:
          message.tezosSender = reader.string()
          break
        case 4:
          message.denom = reader.string()
          break
        case 5:
          message.cosmosReceiver = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        case 7:
          message.srcChain = reader.string()
          break
        case 8:
          message.destChain = reader.string()
          break
        case 9:
          message.txStatus = reader.string()
          break
        case 10:
          message.isApproval = reader.string()
          break
        case 11:
          message.approver = reader.string()
          break
        case 12:
          message.timestamp = reader.string()
          break
        case 13:
          message.relayTimestamp = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateReceivedFa12Txs {
    const message = { ...baseMsgCreateReceivedFa12Txs } as MsgCreateReceivedFa12Txs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateReceivedFa12Txs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
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

  fromPartial(object: DeepPartial<MsgCreateReceivedFa12Txs>): MsgCreateReceivedFa12Txs {
    const message = { ...baseMsgCreateReceivedFa12Txs } as MsgCreateReceivedFa12Txs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateReceivedFa12TxsResponse: object = { id: 0 }

export const MsgCreateReceivedFa12TxsResponse = {
  encode(message: MsgCreateReceivedFa12TxsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedFa12TxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateReceivedFa12TxsResponse } as MsgCreateReceivedFa12TxsResponse
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

  fromJSON(object: any): MsgCreateReceivedFa12TxsResponse {
    const message = { ...baseMsgCreateReceivedFa12TxsResponse } as MsgCreateReceivedFa12TxsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateReceivedFa12TxsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateReceivedFa12TxsResponse>): MsgCreateReceivedFa12TxsResponse {
    const message = { ...baseMsgCreateReceivedFa12TxsResponse } as MsgCreateReceivedFa12TxsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateReceivedFa12Txs: object = {
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

export const MsgUpdateReceivedFa12Txs = {
  encode(message: MsgUpdateReceivedFa12Txs, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedFa12Txs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateReceivedFa12Txs } as MsgUpdateReceivedFa12Txs
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

  fromJSON(object: any): MsgUpdateReceivedFa12Txs {
    const message = { ...baseMsgUpdateReceivedFa12Txs } as MsgUpdateReceivedFa12Txs
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

  toJSON(message: MsgUpdateReceivedFa12Txs): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateReceivedFa12Txs>): MsgUpdateReceivedFa12Txs {
    const message = { ...baseMsgUpdateReceivedFa12Txs } as MsgUpdateReceivedFa12Txs
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

const baseMsgUpdateReceivedFa12TxsResponse: object = {}

export const MsgUpdateReceivedFa12TxsResponse = {
  encode(_: MsgUpdateReceivedFa12TxsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedFa12TxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateReceivedFa12TxsResponse } as MsgUpdateReceivedFa12TxsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateReceivedFa12TxsResponse {
    const message = { ...baseMsgUpdateReceivedFa12TxsResponse } as MsgUpdateReceivedFa12TxsResponse
    return message
  },

  toJSON(_: MsgUpdateReceivedFa12TxsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateReceivedFa12TxsResponse>): MsgUpdateReceivedFa12TxsResponse {
    const message = { ...baseMsgUpdateReceivedFa12TxsResponse } as MsgUpdateReceivedFa12TxsResponse
    return message
  }
}

const baseMsgDeleteReceivedFa12Txs: object = { creator: '', id: 0 }

export const MsgDeleteReceivedFa12Txs = {
  encode(message: MsgDeleteReceivedFa12Txs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedFa12Txs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteReceivedFa12Txs } as MsgDeleteReceivedFa12Txs
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteReceivedFa12Txs {
    const message = { ...baseMsgDeleteReceivedFa12Txs } as MsgDeleteReceivedFa12Txs
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
    return message
  },

  toJSON(message: MsgDeleteReceivedFa12Txs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteReceivedFa12Txs>): MsgDeleteReceivedFa12Txs {
    const message = { ...baseMsgDeleteReceivedFa12Txs } as MsgDeleteReceivedFa12Txs
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
    return message
  }
}

const baseMsgDeleteReceivedFa12TxsResponse: object = {}

export const MsgDeleteReceivedFa12TxsResponse = {
  encode(_: MsgDeleteReceivedFa12TxsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedFa12TxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteReceivedFa12TxsResponse } as MsgDeleteReceivedFa12TxsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteReceivedFa12TxsResponse {
    const message = { ...baseMsgDeleteReceivedFa12TxsResponse } as MsgDeleteReceivedFa12TxsResponse
    return message
  },

  toJSON(_: MsgDeleteReceivedFa12TxsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteReceivedFa12TxsResponse>): MsgDeleteReceivedFa12TxsResponse {
    const message = { ...baseMsgDeleteReceivedFa12TxsResponse } as MsgDeleteReceivedFa12TxsResponse
    return message
  }
}

const baseMsgCreateSendToTezos: object = { creator: '', tezosReceiver: '', amount: '', denom: '' }

export const MsgCreateSendToTezos = {
  encode(message: MsgCreateSendToTezos, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.tezosReceiver !== '') {
      writer.uint32(18).string(message.tezosReceiver)
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(34).string(message.denom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezos {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSendToTezos } as MsgCreateSendToTezos
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.tezosReceiver = reader.string()
          break
        case 3:
          message.amount = reader.string()
          break
        case 4:
          message.denom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateSendToTezos {
    const message = { ...baseMsgCreateSendToTezos } as MsgCreateSendToTezos
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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
    return message
  },

  toJSON(message: MsgCreateSendToTezos): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSendToTezos>): MsgCreateSendToTezos {
    const message = { ...baseMsgCreateSendToTezos } as MsgCreateSendToTezos
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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
    return message
  }
}

const baseMsgCreateSendToTezosResponse: object = { id: 0 }

export const MsgCreateSendToTezosResponse = {
  encode(message: MsgCreateSendToTezosResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSendToTezosResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateSendToTezosResponse } as MsgCreateSendToTezosResponse
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

  fromJSON(object: any): MsgCreateSendToTezosResponse {
    const message = { ...baseMsgCreateSendToTezosResponse } as MsgCreateSendToTezosResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateSendToTezosResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateSendToTezosResponse>): MsgCreateSendToTezosResponse {
    const message = { ...baseMsgCreateSendToTezosResponse } as MsgCreateSendToTezosResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateSendToTezos: object = { creator: '', id: 0, tezosReceiver: '', amount: '', denom: '' }

export const MsgUpdateSendToTezos = {
  encode(message: MsgUpdateSendToTezos, writer: Writer = Writer.create()): Writer {
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
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezos {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSendToTezos } as MsgUpdateSendToTezos
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateSendToTezos {
    const message = { ...baseMsgUpdateSendToTezos } as MsgUpdateSendToTezos
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
    return message
  },

  toJSON(message: MsgUpdateSendToTezos): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateSendToTezos>): MsgUpdateSendToTezos {
    const message = { ...baseMsgUpdateSendToTezos } as MsgUpdateSendToTezos
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
    return message
  }
}

const baseMsgUpdateSendToTezosResponse: object = {}

export const MsgUpdateSendToTezosResponse = {
  encode(_: MsgUpdateSendToTezosResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSendToTezosResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateSendToTezosResponse } as MsgUpdateSendToTezosResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateSendToTezosResponse {
    const message = { ...baseMsgUpdateSendToTezosResponse } as MsgUpdateSendToTezosResponse
    return message
  },

  toJSON(_: MsgUpdateSendToTezosResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateSendToTezosResponse>): MsgUpdateSendToTezosResponse {
    const message = { ...baseMsgUpdateSendToTezosResponse } as MsgUpdateSendToTezosResponse
    return message
  }
}

const baseMsgDeleteSendToTezos: object = { creator: '', id: 0 }

export const MsgDeleteSendToTezos = {
  encode(message: MsgDeleteSendToTezos, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezos {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSendToTezos } as MsgDeleteSendToTezos
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteSendToTezos {
    const message = { ...baseMsgDeleteSendToTezos } as MsgDeleteSendToTezos
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
    return message
  },

  toJSON(message: MsgDeleteSendToTezos): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteSendToTezos>): MsgDeleteSendToTezos {
    const message = { ...baseMsgDeleteSendToTezos } as MsgDeleteSendToTezos
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
    return message
  }
}

const baseMsgDeleteSendToTezosResponse: object = {}

export const MsgDeleteSendToTezosResponse = {
  encode(_: MsgDeleteSendToTezosResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSendToTezosResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteSendToTezosResponse } as MsgDeleteSendToTezosResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteSendToTezosResponse {
    const message = { ...baseMsgDeleteSendToTezosResponse } as MsgDeleteSendToTezosResponse
    return message
  },

  toJSON(_: MsgDeleteSendToTezosResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteSendToTezosResponse>): MsgDeleteSendToTezosResponse {
    const message = { ...baseMsgDeleteSendToTezosResponse } as MsgDeleteSendToTezosResponse
    return message
  }
}

const baseMsgCreateReceivedTxs: object = {
  creator: '',
  txid: '',
  tezosSender: '',
  cosmosReceiver: '',
  amount: '',
  denom: '',
  srcChain: '',
  destChain: '',
  txStatus: '',
  timestamp: '',
  relayTimestamp: ''
}

export const MsgCreateReceivedTxs = {
  encode(message: MsgCreateReceivedTxs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txid !== '') {
      writer.uint32(18).string(message.txid)
    }
    if (message.tezosSender !== '') {
      writer.uint32(26).string(message.tezosSender)
    }
    if (message.cosmosReceiver !== '') {
      writer.uint32(34).string(message.cosmosReceiver)
    }
    if (message.amount !== '') {
      writer.uint32(42).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(50).string(message.denom)
    }
    if (message.srcChain !== '') {
      writer.uint32(58).string(message.srcChain)
    }
    if (message.destChain !== '') {
      writer.uint32(66).string(message.destChain)
    }
    if (message.txStatus !== '') {
      writer.uint32(74).string(message.txStatus)
    }
    if (message.timestamp !== '') {
      writer.uint32(82).string(message.timestamp)
    }
    if (message.relayTimestamp !== '') {
      writer.uint32(90).string(message.relayTimestamp)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedTxs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateReceivedTxs } as MsgCreateReceivedTxs
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txid = reader.string()
          break
        case 3:
          message.tezosSender = reader.string()
          break
        case 4:
          message.cosmosReceiver = reader.string()
          break
        case 5:
          message.amount = reader.string()
          break
        case 6:
          message.denom = reader.string()
          break
        case 7:
          message.srcChain = reader.string()
          break
        case 8:
          message.destChain = reader.string()
          break
        case 9:
          message.txStatus = reader.string()
          break
        case 10:
          message.timestamp = reader.string()
          break
        case 11:
          message.relayTimestamp = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateReceivedTxs {
    const message = { ...baseMsgCreateReceivedTxs } as MsgCreateReceivedTxs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
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

  toJSON(message: MsgCreateReceivedTxs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txid !== undefined && (obj.txid = message.txid)
    message.tezosSender !== undefined && (obj.tezosSender = message.tezosSender)
    message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    message.srcChain !== undefined && (obj.srcChain = message.srcChain)
    message.destChain !== undefined && (obj.destChain = message.destChain)
    message.txStatus !== undefined && (obj.txStatus = message.txStatus)
    message.timestamp !== undefined && (obj.timestamp = message.timestamp)
    message.relayTimestamp !== undefined && (obj.relayTimestamp = message.relayTimestamp)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateReceivedTxs>): MsgCreateReceivedTxs {
    const message = { ...baseMsgCreateReceivedTxs } as MsgCreateReceivedTxs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
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

const baseMsgCreateReceivedTxsResponse: object = { id: 0 }

export const MsgCreateReceivedTxsResponse = {
  encode(message: MsgCreateReceivedTxsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateReceivedTxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateReceivedTxsResponse } as MsgCreateReceivedTxsResponse
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

  fromJSON(object: any): MsgCreateReceivedTxsResponse {
    const message = { ...baseMsgCreateReceivedTxsResponse } as MsgCreateReceivedTxsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateReceivedTxsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateReceivedTxsResponse>): MsgCreateReceivedTxsResponse {
    const message = { ...baseMsgCreateReceivedTxsResponse } as MsgCreateReceivedTxsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateReceivedTxs: object = {
  creator: '',
  id: 0,
  txid: '',
  tezosSender: '',
  cosmosReceiver: '',
  amount: '',
  denom: '',
  srcChain: '',
  destChain: '',
  txStatus: '',
  timestamp: '',
  relayTimestamp: ''
}

export const MsgUpdateReceivedTxs = {
  encode(message: MsgUpdateReceivedTxs, writer: Writer = Writer.create()): Writer {
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
    if (message.cosmosReceiver !== '') {
      writer.uint32(42).string(message.cosmosReceiver)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(58).string(message.denom)
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
    if (message.timestamp !== '') {
      writer.uint32(90).string(message.timestamp)
    }
    if (message.relayTimestamp !== '') {
      writer.uint32(98).string(message.relayTimestamp)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedTxs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateReceivedTxs } as MsgUpdateReceivedTxs
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
          message.cosmosReceiver = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        case 7:
          message.denom = reader.string()
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
          message.timestamp = reader.string()
          break
        case 12:
          message.relayTimestamp = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateReceivedTxs {
    const message = { ...baseMsgUpdateReceivedTxs } as MsgUpdateReceivedTxs
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
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
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

  toJSON(message: MsgUpdateReceivedTxs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txid !== undefined && (obj.txid = message.txid)
    message.tezosSender !== undefined && (obj.tezosSender = message.tezosSender)
    message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    message.srcChain !== undefined && (obj.srcChain = message.srcChain)
    message.destChain !== undefined && (obj.destChain = message.destChain)
    message.txStatus !== undefined && (obj.txStatus = message.txStatus)
    message.timestamp !== undefined && (obj.timestamp = message.timestamp)
    message.relayTimestamp !== undefined && (obj.relayTimestamp = message.relayTimestamp)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateReceivedTxs>): MsgUpdateReceivedTxs {
    const message = { ...baseMsgUpdateReceivedTxs } as MsgUpdateReceivedTxs
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
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
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

const baseMsgUpdateReceivedTxsResponse: object = {}

export const MsgUpdateReceivedTxsResponse = {
  encode(_: MsgUpdateReceivedTxsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateReceivedTxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateReceivedTxsResponse } as MsgUpdateReceivedTxsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateReceivedTxsResponse {
    const message = { ...baseMsgUpdateReceivedTxsResponse } as MsgUpdateReceivedTxsResponse
    return message
  },

  toJSON(_: MsgUpdateReceivedTxsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateReceivedTxsResponse>): MsgUpdateReceivedTxsResponse {
    const message = { ...baseMsgUpdateReceivedTxsResponse } as MsgUpdateReceivedTxsResponse
    return message
  }
}

const baseMsgDeleteReceivedTxs: object = { creator: '', id: 0 }

export const MsgDeleteReceivedTxs = {
  encode(message: MsgDeleteReceivedTxs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedTxs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteReceivedTxs } as MsgDeleteReceivedTxs
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteReceivedTxs {
    const message = { ...baseMsgDeleteReceivedTxs } as MsgDeleteReceivedTxs
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
    return message
  },

  toJSON(message: MsgDeleteReceivedTxs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteReceivedTxs>): MsgDeleteReceivedTxs {
    const message = { ...baseMsgDeleteReceivedTxs } as MsgDeleteReceivedTxs
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
    return message
  }
}

const baseMsgDeleteReceivedTxsResponse: object = {}

export const MsgDeleteReceivedTxsResponse = {
  encode(_: MsgDeleteReceivedTxsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteReceivedTxsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteReceivedTxsResponse } as MsgDeleteReceivedTxsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteReceivedTxsResponse {
    const message = { ...baseMsgDeleteReceivedTxsResponse } as MsgDeleteReceivedTxsResponse
    return message
  },

  toJSON(_: MsgDeleteReceivedTxsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteReceivedTxsResponse>): MsgDeleteReceivedTxsResponse {
    const message = { ...baseMsgDeleteReceivedTxsResponse } as MsgDeleteReceivedTxsResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateSendToTezosSigned(request: MsgCreateSendToTezosSigned): Promise<MsgCreateSendToTezosSignedResponse>
  UpdateSendToTezosSigned(request: MsgUpdateSendToTezosSigned): Promise<MsgUpdateSendToTezosSignedResponse>
  DeleteSendToTezosSigned(request: MsgDeleteSendToTezosSigned): Promise<MsgDeleteSendToTezosSignedResponse>
  CreateReceivedFa12Txs(request: MsgCreateReceivedFa12Txs): Promise<MsgCreateReceivedFa12TxsResponse>
  UpdateReceivedFa12Txs(request: MsgUpdateReceivedFa12Txs): Promise<MsgUpdateReceivedFa12TxsResponse>
  DeleteReceivedFa12Txs(request: MsgDeleteReceivedFa12Txs): Promise<MsgDeleteReceivedFa12TxsResponse>
  CreateSendToTezos(request: MsgCreateSendToTezos): Promise<MsgCreateSendToTezosResponse>
  UpdateSendToTezos(request: MsgUpdateSendToTezos): Promise<MsgUpdateSendToTezosResponse>
  DeleteSendToTezos(request: MsgDeleteSendToTezos): Promise<MsgDeleteSendToTezosResponse>
  CreateReceivedTxs(request: MsgCreateReceivedTxs): Promise<MsgCreateReceivedTxsResponse>
  UpdateReceivedTxs(request: MsgUpdateReceivedTxs): Promise<MsgUpdateReceivedTxsResponse>
  DeleteReceivedTxs(request: MsgDeleteReceivedTxs): Promise<MsgDeleteReceivedTxsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateSendToTezosSigned(request: MsgCreateSendToTezosSigned): Promise<MsgCreateSendToTezosSignedResponse> {
    const data = MsgCreateSendToTezosSigned.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateSendToTezosSigned', data)
    return promise.then((data) => MsgCreateSendToTezosSignedResponse.decode(new Reader(data)))
  }

  UpdateSendToTezosSigned(request: MsgUpdateSendToTezosSigned): Promise<MsgUpdateSendToTezosSignedResponse> {
    const data = MsgUpdateSendToTezosSigned.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateSendToTezosSigned', data)
    return promise.then((data) => MsgUpdateSendToTezosSignedResponse.decode(new Reader(data)))
  }

  DeleteSendToTezosSigned(request: MsgDeleteSendToTezosSigned): Promise<MsgDeleteSendToTezosSignedResponse> {
    const data = MsgDeleteSendToTezosSigned.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteSendToTezosSigned', data)
    return promise.then((data) => MsgDeleteSendToTezosSignedResponse.decode(new Reader(data)))
  }

  CreateReceivedFa12Txs(request: MsgCreateReceivedFa12Txs): Promise<MsgCreateReceivedFa12TxsResponse> {
    const data = MsgCreateReceivedFa12Txs.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateReceivedFa12Txs', data)
    return promise.then((data) => MsgCreateReceivedFa12TxsResponse.decode(new Reader(data)))
  }

  UpdateReceivedFa12Txs(request: MsgUpdateReceivedFa12Txs): Promise<MsgUpdateReceivedFa12TxsResponse> {
    const data = MsgUpdateReceivedFa12Txs.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateReceivedFa12Txs', data)
    return promise.then((data) => MsgUpdateReceivedFa12TxsResponse.decode(new Reader(data)))
  }

  DeleteReceivedFa12Txs(request: MsgDeleteReceivedFa12Txs): Promise<MsgDeleteReceivedFa12TxsResponse> {
    const data = MsgDeleteReceivedFa12Txs.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteReceivedFa12Txs', data)
    return promise.then((data) => MsgDeleteReceivedFa12TxsResponse.decode(new Reader(data)))
  }

  CreateSendToTezos(request: MsgCreateSendToTezos): Promise<MsgCreateSendToTezosResponse> {
    const data = MsgCreateSendToTezos.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateSendToTezos', data)
    return promise.then((data) => MsgCreateSendToTezosResponse.decode(new Reader(data)))
  }

  UpdateSendToTezos(request: MsgUpdateSendToTezos): Promise<MsgUpdateSendToTezosResponse> {
    const data = MsgUpdateSendToTezos.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateSendToTezos', data)
    return promise.then((data) => MsgUpdateSendToTezosResponse.decode(new Reader(data)))
  }

  DeleteSendToTezos(request: MsgDeleteSendToTezos): Promise<MsgDeleteSendToTezosResponse> {
    const data = MsgDeleteSendToTezos.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteSendToTezos', data)
    return promise.then((data) => MsgDeleteSendToTezosResponse.decode(new Reader(data)))
  }

  CreateReceivedTxs(request: MsgCreateReceivedTxs): Promise<MsgCreateReceivedTxsResponse> {
    const data = MsgCreateReceivedTxs.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateReceivedTxs', data)
    return promise.then((data) => MsgCreateReceivedTxsResponse.decode(new Reader(data)))
  }

  UpdateReceivedTxs(request: MsgUpdateReceivedTxs): Promise<MsgUpdateReceivedTxsResponse> {
    const data = MsgUpdateReceivedTxs.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateReceivedTxs', data)
    return promise.then((data) => MsgUpdateReceivedTxsResponse.decode(new Reader(data)))
  }

  DeleteReceivedTxs(request: MsgDeleteReceivedTxs): Promise<MsgDeleteReceivedTxsResponse> {
    const data = MsgDeleteReceivedTxs.encode(request).finish()
    const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteReceivedTxs', data)
    return promise.then((data) => MsgDeleteReceivedTxsResponse.decode(new Reader(data)))
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
