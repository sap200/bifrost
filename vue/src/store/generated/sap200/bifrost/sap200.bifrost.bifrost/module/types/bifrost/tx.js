/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'sap200.bifrost.bifrost';
const baseMsgCreateSendToTezosSigned = { creator: '', tezosReceiver: '', amount: '', denom: '', tezosSignerPrivateKey: '' };
export const MsgCreateSendToTezosSigned = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.tezosReceiver !== '') {
            writer.uint32(18).string(message.tezosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(34).string(message.denom);
        }
        if (message.tezosSignerPrivateKey !== '') {
            writer.uint32(42).string(message.tezosSignerPrivateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSendToTezosSigned };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.tezosReceiver = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.tezosSignerPrivateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSendToTezosSigned };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = String(object.tezosReceiver);
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.tezosSignerPrivateKey !== undefined && object.tezosSignerPrivateKey !== null) {
            message.tezosSignerPrivateKey = String(object.tezosSignerPrivateKey);
        }
        else {
            message.tezosSignerPrivateKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.tezosSignerPrivateKey !== undefined && (obj.tezosSignerPrivateKey = message.tezosSignerPrivateKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSendToTezosSigned };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = object.tezosReceiver;
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.tezosSignerPrivateKey !== undefined && object.tezosSignerPrivateKey !== null) {
            message.tezosSignerPrivateKey = object.tezosSignerPrivateKey;
        }
        else {
            message.tezosSignerPrivateKey = '';
        }
        return message;
    }
};
const baseMsgCreateSendToTezosSignedResponse = { id: 0 };
export const MsgCreateSendToTezosSignedResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSendToTezosSignedResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSendToTezosSignedResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSendToTezosSignedResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateSendToTezosSigned = { creator: '', id: 0, tezosReceiver: '', amount: '', denom: '', tezosSignerPrivateKey: '' };
export const MsgUpdateSendToTezosSigned = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.tezosReceiver !== '') {
            writer.uint32(26).string(message.tezosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(42).string(message.denom);
        }
        if (message.tezosSignerPrivateKey !== '') {
            writer.uint32(50).string(message.tezosSignerPrivateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSendToTezosSigned };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.tezosReceiver = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.denom = reader.string();
                    break;
                case 6:
                    message.tezosSignerPrivateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSendToTezosSigned };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = String(object.tezosReceiver);
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.tezosSignerPrivateKey !== undefined && object.tezosSignerPrivateKey !== null) {
            message.tezosSignerPrivateKey = String(object.tezosSignerPrivateKey);
        }
        else {
            message.tezosSignerPrivateKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.tezosSignerPrivateKey !== undefined && (obj.tezosSignerPrivateKey = message.tezosSignerPrivateKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSendToTezosSigned };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = object.tezosReceiver;
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.tezosSignerPrivateKey !== undefined && object.tezosSignerPrivateKey !== null) {
            message.tezosSignerPrivateKey = object.tezosSignerPrivateKey;
        }
        else {
            message.tezosSignerPrivateKey = '';
        }
        return message;
    }
};
const baseMsgUpdateSendToTezosSignedResponse = {};
export const MsgUpdateSendToTezosSignedResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSendToTezosSignedResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateSendToTezosSignedResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateSendToTezosSignedResponse };
        return message;
    }
};
const baseMsgDeleteSendToTezosSigned = { creator: '', id: 0 };
export const MsgDeleteSendToTezosSigned = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSendToTezosSigned };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteSendToTezosSigned };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSendToTezosSigned };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteSendToTezosSignedResponse = {};
export const MsgDeleteSendToTezosSignedResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSendToTezosSignedResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteSendToTezosSignedResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteSendToTezosSignedResponse };
        return message;
    }
};
const baseMsgCreateReceivedFa12Txs = {
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
};
export const MsgCreateReceivedFa12Txs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.txid !== '') {
            writer.uint32(18).string(message.txid);
        }
        if (message.tezosSender !== '') {
            writer.uint32(26).string(message.tezosSender);
        }
        if (message.denom !== '') {
            writer.uint32(34).string(message.denom);
        }
        if (message.cosmosReceiver !== '') {
            writer.uint32(42).string(message.cosmosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(50).string(message.amount);
        }
        if (message.srcChain !== '') {
            writer.uint32(58).string(message.srcChain);
        }
        if (message.destChain !== '') {
            writer.uint32(66).string(message.destChain);
        }
        if (message.txStatus !== '') {
            writer.uint32(74).string(message.txStatus);
        }
        if (message.isApproval !== '') {
            writer.uint32(82).string(message.isApproval);
        }
        if (message.approver !== '') {
            writer.uint32(90).string(message.approver);
        }
        if (message.timestamp !== '') {
            writer.uint32(98).string(message.timestamp);
        }
        if (message.relayTimestamp !== '') {
            writer.uint32(106).string(message.relayTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateReceivedFa12Txs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.txid = reader.string();
                    break;
                case 3:
                    message.tezosSender = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.cosmosReceiver = reader.string();
                    break;
                case 6:
                    message.amount = reader.string();
                    break;
                case 7:
                    message.srcChain = reader.string();
                    break;
                case 8:
                    message.destChain = reader.string();
                    break;
                case 9:
                    message.txStatus = reader.string();
                    break;
                case 10:
                    message.isApproval = reader.string();
                    break;
                case 11:
                    message.approver = reader.string();
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.relayTimestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateReceivedFa12Txs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = String(object.txid);
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = String(object.tezosSender);
        }
        else {
            message.tezosSender = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = String(object.cosmosReceiver);
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = String(object.srcChain);
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = String(object.destChain);
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = String(object.txStatus);
        }
        else {
            message.txStatus = '';
        }
        if (object.isApproval !== undefined && object.isApproval !== null) {
            message.isApproval = String(object.isApproval);
        }
        else {
            message.isApproval = '';
        }
        if (object.approver !== undefined && object.approver !== null) {
            message.approver = String(object.approver);
        }
        else {
            message.approver = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = String(object.relayTimestamp);
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txid !== undefined && (obj.txid = message.txid);
        message.tezosSender !== undefined && (obj.tezosSender = message.tezosSender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.srcChain !== undefined && (obj.srcChain = message.srcChain);
        message.destChain !== undefined && (obj.destChain = message.destChain);
        message.txStatus !== undefined && (obj.txStatus = message.txStatus);
        message.isApproval !== undefined && (obj.isApproval = message.isApproval);
        message.approver !== undefined && (obj.approver = message.approver);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.relayTimestamp !== undefined && (obj.relayTimestamp = message.relayTimestamp);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateReceivedFa12Txs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = object.txid;
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = object.tezosSender;
        }
        else {
            message.tezosSender = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = object.cosmosReceiver;
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = object.srcChain;
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = object.destChain;
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = object.txStatus;
        }
        else {
            message.txStatus = '';
        }
        if (object.isApproval !== undefined && object.isApproval !== null) {
            message.isApproval = object.isApproval;
        }
        else {
            message.isApproval = '';
        }
        if (object.approver !== undefined && object.approver !== null) {
            message.approver = object.approver;
        }
        else {
            message.approver = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = object.relayTimestamp;
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    }
};
const baseMsgCreateReceivedFa12TxsResponse = { id: 0 };
export const MsgCreateReceivedFa12TxsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateReceivedFa12TxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateReceivedFa12TxsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateReceivedFa12TxsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateReceivedFa12Txs = {
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
};
export const MsgUpdateReceivedFa12Txs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.txid !== '') {
            writer.uint32(26).string(message.txid);
        }
        if (message.tezosSender !== '') {
            writer.uint32(34).string(message.tezosSender);
        }
        if (message.denom !== '') {
            writer.uint32(42).string(message.denom);
        }
        if (message.cosmosReceiver !== '') {
            writer.uint32(50).string(message.cosmosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(58).string(message.amount);
        }
        if (message.srcChain !== '') {
            writer.uint32(66).string(message.srcChain);
        }
        if (message.destChain !== '') {
            writer.uint32(74).string(message.destChain);
        }
        if (message.txStatus !== '') {
            writer.uint32(82).string(message.txStatus);
        }
        if (message.isApproval !== '') {
            writer.uint32(90).string(message.isApproval);
        }
        if (message.approver !== '') {
            writer.uint32(98).string(message.approver);
        }
        if (message.timestamp !== '') {
            writer.uint32(106).string(message.timestamp);
        }
        if (message.relayTimestamp !== '') {
            writer.uint32(114).string(message.relayTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateReceivedFa12Txs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.txid = reader.string();
                    break;
                case 4:
                    message.tezosSender = reader.string();
                    break;
                case 5:
                    message.denom = reader.string();
                    break;
                case 6:
                    message.cosmosReceiver = reader.string();
                    break;
                case 7:
                    message.amount = reader.string();
                    break;
                case 8:
                    message.srcChain = reader.string();
                    break;
                case 9:
                    message.destChain = reader.string();
                    break;
                case 10:
                    message.txStatus = reader.string();
                    break;
                case 11:
                    message.isApproval = reader.string();
                    break;
                case 12:
                    message.approver = reader.string();
                    break;
                case 13:
                    message.timestamp = reader.string();
                    break;
                case 14:
                    message.relayTimestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateReceivedFa12Txs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = String(object.txid);
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = String(object.tezosSender);
        }
        else {
            message.tezosSender = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = String(object.cosmosReceiver);
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = String(object.srcChain);
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = String(object.destChain);
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = String(object.txStatus);
        }
        else {
            message.txStatus = '';
        }
        if (object.isApproval !== undefined && object.isApproval !== null) {
            message.isApproval = String(object.isApproval);
        }
        else {
            message.isApproval = '';
        }
        if (object.approver !== undefined && object.approver !== null) {
            message.approver = String(object.approver);
        }
        else {
            message.approver = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = String(object.relayTimestamp);
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.txid !== undefined && (obj.txid = message.txid);
        message.tezosSender !== undefined && (obj.tezosSender = message.tezosSender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.srcChain !== undefined && (obj.srcChain = message.srcChain);
        message.destChain !== undefined && (obj.destChain = message.destChain);
        message.txStatus !== undefined && (obj.txStatus = message.txStatus);
        message.isApproval !== undefined && (obj.isApproval = message.isApproval);
        message.approver !== undefined && (obj.approver = message.approver);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.relayTimestamp !== undefined && (obj.relayTimestamp = message.relayTimestamp);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateReceivedFa12Txs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = object.txid;
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = object.tezosSender;
        }
        else {
            message.tezosSender = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = object.cosmosReceiver;
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = object.srcChain;
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = object.destChain;
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = object.txStatus;
        }
        else {
            message.txStatus = '';
        }
        if (object.isApproval !== undefined && object.isApproval !== null) {
            message.isApproval = object.isApproval;
        }
        else {
            message.isApproval = '';
        }
        if (object.approver !== undefined && object.approver !== null) {
            message.approver = object.approver;
        }
        else {
            message.approver = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = object.relayTimestamp;
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    }
};
const baseMsgUpdateReceivedFa12TxsResponse = {};
export const MsgUpdateReceivedFa12TxsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateReceivedFa12TxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateReceivedFa12TxsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateReceivedFa12TxsResponse };
        return message;
    }
};
const baseMsgDeleteReceivedFa12Txs = { creator: '', id: 0 };
export const MsgDeleteReceivedFa12Txs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteReceivedFa12Txs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteReceivedFa12Txs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteReceivedFa12Txs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteReceivedFa12TxsResponse = {};
export const MsgDeleteReceivedFa12TxsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteReceivedFa12TxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteReceivedFa12TxsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteReceivedFa12TxsResponse };
        return message;
    }
};
const baseMsgCreateSendToTezos = { creator: '', tezosReceiver: '', amount: '', denom: '' };
export const MsgCreateSendToTezos = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.tezosReceiver !== '') {
            writer.uint32(18).string(message.tezosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(34).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSendToTezos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.tezosReceiver = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSendToTezos };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = String(object.tezosReceiver);
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSendToTezos };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = object.tezosReceiver;
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        return message;
    }
};
const baseMsgCreateSendToTezosResponse = { id: 0 };
export const MsgCreateSendToTezosResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSendToTezosResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSendToTezosResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSendToTezosResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateSendToTezos = { creator: '', id: 0, tezosReceiver: '', amount: '', denom: '' };
export const MsgUpdateSendToTezos = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.tezosReceiver !== '') {
            writer.uint32(26).string(message.tezosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(42).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSendToTezos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.tezosReceiver = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSendToTezos };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = String(object.tezosReceiver);
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.tezosReceiver !== undefined && (obj.tezosReceiver = message.tezosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSendToTezos };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.tezosReceiver !== undefined && object.tezosReceiver !== null) {
            message.tezosReceiver = object.tezosReceiver;
        }
        else {
            message.tezosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        return message;
    }
};
const baseMsgUpdateSendToTezosResponse = {};
export const MsgUpdateSendToTezosResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSendToTezosResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateSendToTezosResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateSendToTezosResponse };
        return message;
    }
};
const baseMsgDeleteSendToTezos = { creator: '', id: 0 };
export const MsgDeleteSendToTezos = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSendToTezos };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteSendToTezos };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSendToTezos };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteSendToTezosResponse = {};
export const MsgDeleteSendToTezosResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSendToTezosResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteSendToTezosResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteSendToTezosResponse };
        return message;
    }
};
const baseMsgCreateReceivedTxs = {
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
};
export const MsgCreateReceivedTxs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.txid !== '') {
            writer.uint32(18).string(message.txid);
        }
        if (message.tezosSender !== '') {
            writer.uint32(26).string(message.tezosSender);
        }
        if (message.cosmosReceiver !== '') {
            writer.uint32(34).string(message.cosmosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(42).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(50).string(message.denom);
        }
        if (message.srcChain !== '') {
            writer.uint32(58).string(message.srcChain);
        }
        if (message.destChain !== '') {
            writer.uint32(66).string(message.destChain);
        }
        if (message.txStatus !== '') {
            writer.uint32(74).string(message.txStatus);
        }
        if (message.timestamp !== '') {
            writer.uint32(82).string(message.timestamp);
        }
        if (message.relayTimestamp !== '') {
            writer.uint32(90).string(message.relayTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateReceivedTxs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.txid = reader.string();
                    break;
                case 3:
                    message.tezosSender = reader.string();
                    break;
                case 4:
                    message.cosmosReceiver = reader.string();
                    break;
                case 5:
                    message.amount = reader.string();
                    break;
                case 6:
                    message.denom = reader.string();
                    break;
                case 7:
                    message.srcChain = reader.string();
                    break;
                case 8:
                    message.destChain = reader.string();
                    break;
                case 9:
                    message.txStatus = reader.string();
                    break;
                case 10:
                    message.timestamp = reader.string();
                    break;
                case 11:
                    message.relayTimestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateReceivedTxs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = String(object.txid);
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = String(object.tezosSender);
        }
        else {
            message.tezosSender = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = String(object.cosmosReceiver);
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = String(object.srcChain);
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = String(object.destChain);
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = String(object.txStatus);
        }
        else {
            message.txStatus = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = String(object.relayTimestamp);
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txid !== undefined && (obj.txid = message.txid);
        message.tezosSender !== undefined && (obj.tezosSender = message.tezosSender);
        message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.srcChain !== undefined && (obj.srcChain = message.srcChain);
        message.destChain !== undefined && (obj.destChain = message.destChain);
        message.txStatus !== undefined && (obj.txStatus = message.txStatus);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.relayTimestamp !== undefined && (obj.relayTimestamp = message.relayTimestamp);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateReceivedTxs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = object.txid;
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = object.tezosSender;
        }
        else {
            message.tezosSender = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = object.cosmosReceiver;
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = object.srcChain;
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = object.destChain;
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = object.txStatus;
        }
        else {
            message.txStatus = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = object.relayTimestamp;
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    }
};
const baseMsgCreateReceivedTxsResponse = { id: 0 };
export const MsgCreateReceivedTxsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateReceivedTxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateReceivedTxsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateReceivedTxsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateReceivedTxs = {
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
};
export const MsgUpdateReceivedTxs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.txid !== '') {
            writer.uint32(26).string(message.txid);
        }
        if (message.tezosSender !== '') {
            writer.uint32(34).string(message.tezosSender);
        }
        if (message.cosmosReceiver !== '') {
            writer.uint32(42).string(message.cosmosReceiver);
        }
        if (message.amount !== '') {
            writer.uint32(50).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(58).string(message.denom);
        }
        if (message.srcChain !== '') {
            writer.uint32(66).string(message.srcChain);
        }
        if (message.destChain !== '') {
            writer.uint32(74).string(message.destChain);
        }
        if (message.txStatus !== '') {
            writer.uint32(82).string(message.txStatus);
        }
        if (message.timestamp !== '') {
            writer.uint32(90).string(message.timestamp);
        }
        if (message.relayTimestamp !== '') {
            writer.uint32(98).string(message.relayTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateReceivedTxs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.txid = reader.string();
                    break;
                case 4:
                    message.tezosSender = reader.string();
                    break;
                case 5:
                    message.cosmosReceiver = reader.string();
                    break;
                case 6:
                    message.amount = reader.string();
                    break;
                case 7:
                    message.denom = reader.string();
                    break;
                case 8:
                    message.srcChain = reader.string();
                    break;
                case 9:
                    message.destChain = reader.string();
                    break;
                case 10:
                    message.txStatus = reader.string();
                    break;
                case 11:
                    message.timestamp = reader.string();
                    break;
                case 12:
                    message.relayTimestamp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateReceivedTxs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = String(object.txid);
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = String(object.tezosSender);
        }
        else {
            message.tezosSender = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = String(object.cosmosReceiver);
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = String(object.srcChain);
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = String(object.destChain);
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = String(object.txStatus);
        }
        else {
            message.txStatus = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = String(object.relayTimestamp);
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.txid !== undefined && (obj.txid = message.txid);
        message.tezosSender !== undefined && (obj.tezosSender = message.tezosSender);
        message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.srcChain !== undefined && (obj.srcChain = message.srcChain);
        message.destChain !== undefined && (obj.destChain = message.destChain);
        message.txStatus !== undefined && (obj.txStatus = message.txStatus);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.relayTimestamp !== undefined && (obj.relayTimestamp = message.relayTimestamp);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateReceivedTxs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.txid !== undefined && object.txid !== null) {
            message.txid = object.txid;
        }
        else {
            message.txid = '';
        }
        if (object.tezosSender !== undefined && object.tezosSender !== null) {
            message.tezosSender = object.tezosSender;
        }
        else {
            message.tezosSender = '';
        }
        if (object.cosmosReceiver !== undefined && object.cosmosReceiver !== null) {
            message.cosmosReceiver = object.cosmosReceiver;
        }
        else {
            message.cosmosReceiver = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.srcChain !== undefined && object.srcChain !== null) {
            message.srcChain = object.srcChain;
        }
        else {
            message.srcChain = '';
        }
        if (object.destChain !== undefined && object.destChain !== null) {
            message.destChain = object.destChain;
        }
        else {
            message.destChain = '';
        }
        if (object.txStatus !== undefined && object.txStatus !== null) {
            message.txStatus = object.txStatus;
        }
        else {
            message.txStatus = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = '';
        }
        if (object.relayTimestamp !== undefined && object.relayTimestamp !== null) {
            message.relayTimestamp = object.relayTimestamp;
        }
        else {
            message.relayTimestamp = '';
        }
        return message;
    }
};
const baseMsgUpdateReceivedTxsResponse = {};
export const MsgUpdateReceivedTxsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateReceivedTxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateReceivedTxsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateReceivedTxsResponse };
        return message;
    }
};
const baseMsgDeleteReceivedTxs = { creator: '', id: 0 };
export const MsgDeleteReceivedTxs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteReceivedTxs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteReceivedTxs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteReceivedTxs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteReceivedTxsResponse = {};
export const MsgDeleteReceivedTxsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteReceivedTxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteReceivedTxsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteReceivedTxsResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateSendToTezosSigned(request) {
        const data = MsgCreateSendToTezosSigned.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateSendToTezosSigned', data);
        return promise.then((data) => MsgCreateSendToTezosSignedResponse.decode(new Reader(data)));
    }
    UpdateSendToTezosSigned(request) {
        const data = MsgUpdateSendToTezosSigned.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateSendToTezosSigned', data);
        return promise.then((data) => MsgUpdateSendToTezosSignedResponse.decode(new Reader(data)));
    }
    DeleteSendToTezosSigned(request) {
        const data = MsgDeleteSendToTezosSigned.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteSendToTezosSigned', data);
        return promise.then((data) => MsgDeleteSendToTezosSignedResponse.decode(new Reader(data)));
    }
    CreateReceivedFa12Txs(request) {
        const data = MsgCreateReceivedFa12Txs.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateReceivedFa12Txs', data);
        return promise.then((data) => MsgCreateReceivedFa12TxsResponse.decode(new Reader(data)));
    }
    UpdateReceivedFa12Txs(request) {
        const data = MsgUpdateReceivedFa12Txs.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateReceivedFa12Txs', data);
        return promise.then((data) => MsgUpdateReceivedFa12TxsResponse.decode(new Reader(data)));
    }
    DeleteReceivedFa12Txs(request) {
        const data = MsgDeleteReceivedFa12Txs.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteReceivedFa12Txs', data);
        return promise.then((data) => MsgDeleteReceivedFa12TxsResponse.decode(new Reader(data)));
    }
    CreateSendToTezos(request) {
        const data = MsgCreateSendToTezos.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateSendToTezos', data);
        return promise.then((data) => MsgCreateSendToTezosResponse.decode(new Reader(data)));
    }
    UpdateSendToTezos(request) {
        const data = MsgUpdateSendToTezos.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateSendToTezos', data);
        return promise.then((data) => MsgUpdateSendToTezosResponse.decode(new Reader(data)));
    }
    DeleteSendToTezos(request) {
        const data = MsgDeleteSendToTezos.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteSendToTezos', data);
        return promise.then((data) => MsgDeleteSendToTezosResponse.decode(new Reader(data)));
    }
    CreateReceivedTxs(request) {
        const data = MsgCreateReceivedTxs.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'CreateReceivedTxs', data);
        return promise.then((data) => MsgCreateReceivedTxsResponse.decode(new Reader(data)));
    }
    UpdateReceivedTxs(request) {
        const data = MsgUpdateReceivedTxs.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'UpdateReceivedTxs', data);
        return promise.then((data) => MsgUpdateReceivedTxsResponse.decode(new Reader(data)));
    }
    DeleteReceivedTxs(request) {
        const data = MsgDeleteReceivedTxs.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Msg', 'DeleteReceivedTxs', data);
        return promise.then((data) => MsgDeleteReceivedTxsResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
