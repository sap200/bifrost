/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { SendToTezosSigned } from '../bifrost/sendToTezosSigned';
import { ReceivedFa12Txs } from '../bifrost/receivedFa12Txs';
import { SendToTezos } from '../bifrost/sendToTezos';
import { ReceivedTxs } from '../bifrost/receivedTxs';
export const protobufPackage = 'sap200.bifrost.bifrost';
const baseGenesisState = { sendToTezosSignedCount: 0, receivedFa12TxsCount: 0, sendToTezosCount: 0, receivedTxsCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sendToTezosSignedList) {
            SendToTezosSigned.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.sendToTezosSignedCount !== 0) {
            writer.uint32(64).uint64(message.sendToTezosSignedCount);
        }
        for (const v of message.receivedFa12TxsList) {
            ReceivedFa12Txs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.receivedFa12TxsCount !== 0) {
            writer.uint32(48).uint64(message.receivedFa12TxsCount);
        }
        for (const v of message.sendToTezosList) {
            SendToTezos.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.sendToTezosCount !== 0) {
            writer.uint32(32).uint64(message.sendToTezosCount);
        }
        for (const v of message.receivedTxsList) {
            ReceivedTxs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.receivedTxsCount !== 0) {
            writer.uint32(16).uint64(message.receivedTxsCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.sendToTezosSignedList = [];
        message.receivedFa12TxsList = [];
        message.sendToTezosList = [];
        message.receivedTxsList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 7:
                    message.sendToTezosSignedList.push(SendToTezosSigned.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.sendToTezosSignedCount = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.receivedFa12TxsList.push(ReceivedFa12Txs.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.receivedFa12TxsCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.sendToTezosList.push(SendToTezos.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sendToTezosCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.receivedTxsList.push(ReceivedTxs.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.receivedTxsCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.sendToTezosSignedList = [];
        message.receivedFa12TxsList = [];
        message.sendToTezosList = [];
        message.receivedTxsList = [];
        if (object.sendToTezosSignedList !== undefined && object.sendToTezosSignedList !== null) {
            for (const e of object.sendToTezosSignedList) {
                message.sendToTezosSignedList.push(SendToTezosSigned.fromJSON(e));
            }
        }
        if (object.sendToTezosSignedCount !== undefined && object.sendToTezosSignedCount !== null) {
            message.sendToTezosSignedCount = Number(object.sendToTezosSignedCount);
        }
        else {
            message.sendToTezosSignedCount = 0;
        }
        if (object.receivedFa12TxsList !== undefined && object.receivedFa12TxsList !== null) {
            for (const e of object.receivedFa12TxsList) {
                message.receivedFa12TxsList.push(ReceivedFa12Txs.fromJSON(e));
            }
        }
        if (object.receivedFa12TxsCount !== undefined && object.receivedFa12TxsCount !== null) {
            message.receivedFa12TxsCount = Number(object.receivedFa12TxsCount);
        }
        else {
            message.receivedFa12TxsCount = 0;
        }
        if (object.sendToTezosList !== undefined && object.sendToTezosList !== null) {
            for (const e of object.sendToTezosList) {
                message.sendToTezosList.push(SendToTezos.fromJSON(e));
            }
        }
        if (object.sendToTezosCount !== undefined && object.sendToTezosCount !== null) {
            message.sendToTezosCount = Number(object.sendToTezosCount);
        }
        else {
            message.sendToTezosCount = 0;
        }
        if (object.receivedTxsList !== undefined && object.receivedTxsList !== null) {
            for (const e of object.receivedTxsList) {
                message.receivedTxsList.push(ReceivedTxs.fromJSON(e));
            }
        }
        if (object.receivedTxsCount !== undefined && object.receivedTxsCount !== null) {
            message.receivedTxsCount = Number(object.receivedTxsCount);
        }
        else {
            message.receivedTxsCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sendToTezosSignedList) {
            obj.sendToTezosSignedList = message.sendToTezosSignedList.map((e) => (e ? SendToTezosSigned.toJSON(e) : undefined));
        }
        else {
            obj.sendToTezosSignedList = [];
        }
        message.sendToTezosSignedCount !== undefined && (obj.sendToTezosSignedCount = message.sendToTezosSignedCount);
        if (message.receivedFa12TxsList) {
            obj.receivedFa12TxsList = message.receivedFa12TxsList.map((e) => (e ? ReceivedFa12Txs.toJSON(e) : undefined));
        }
        else {
            obj.receivedFa12TxsList = [];
        }
        message.receivedFa12TxsCount !== undefined && (obj.receivedFa12TxsCount = message.receivedFa12TxsCount);
        if (message.sendToTezosList) {
            obj.sendToTezosList = message.sendToTezosList.map((e) => (e ? SendToTezos.toJSON(e) : undefined));
        }
        else {
            obj.sendToTezosList = [];
        }
        message.sendToTezosCount !== undefined && (obj.sendToTezosCount = message.sendToTezosCount);
        if (message.receivedTxsList) {
            obj.receivedTxsList = message.receivedTxsList.map((e) => (e ? ReceivedTxs.toJSON(e) : undefined));
        }
        else {
            obj.receivedTxsList = [];
        }
        message.receivedTxsCount !== undefined && (obj.receivedTxsCount = message.receivedTxsCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.sendToTezosSignedList = [];
        message.receivedFa12TxsList = [];
        message.sendToTezosList = [];
        message.receivedTxsList = [];
        if (object.sendToTezosSignedList !== undefined && object.sendToTezosSignedList !== null) {
            for (const e of object.sendToTezosSignedList) {
                message.sendToTezosSignedList.push(SendToTezosSigned.fromPartial(e));
            }
        }
        if (object.sendToTezosSignedCount !== undefined && object.sendToTezosSignedCount !== null) {
            message.sendToTezosSignedCount = object.sendToTezosSignedCount;
        }
        else {
            message.sendToTezosSignedCount = 0;
        }
        if (object.receivedFa12TxsList !== undefined && object.receivedFa12TxsList !== null) {
            for (const e of object.receivedFa12TxsList) {
                message.receivedFa12TxsList.push(ReceivedFa12Txs.fromPartial(e));
            }
        }
        if (object.receivedFa12TxsCount !== undefined && object.receivedFa12TxsCount !== null) {
            message.receivedFa12TxsCount = object.receivedFa12TxsCount;
        }
        else {
            message.receivedFa12TxsCount = 0;
        }
        if (object.sendToTezosList !== undefined && object.sendToTezosList !== null) {
            for (const e of object.sendToTezosList) {
                message.sendToTezosList.push(SendToTezos.fromPartial(e));
            }
        }
        if (object.sendToTezosCount !== undefined && object.sendToTezosCount !== null) {
            message.sendToTezosCount = object.sendToTezosCount;
        }
        else {
            message.sendToTezosCount = 0;
        }
        if (object.receivedTxsList !== undefined && object.receivedTxsList !== null) {
            for (const e of object.receivedTxsList) {
                message.receivedTxsList.push(ReceivedTxs.fromPartial(e));
            }
        }
        if (object.receivedTxsCount !== undefined && object.receivedTxsCount !== null) {
            message.receivedTxsCount = object.receivedTxsCount;
        }
        else {
            message.receivedTxsCount = 0;
        }
        return message;
    }
};
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
