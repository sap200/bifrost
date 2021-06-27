/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { SendToTezosSigned } from '../bifrost/sendToTezosSigned';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { ReceivedFa12Txs } from '../bifrost/receivedFa12Txs';
import { SendToTezos } from '../bifrost/sendToTezos';
import { ReceivedTxs } from '../bifrost/receivedTxs';
export const protobufPackage = 'sap200.bifrost.bifrost';
const baseQueryGetSendToTezosSignedRequest = { id: 0 };
export const QueryGetSendToTezosSignedRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSendToTezosSignedRequest };
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
        const message = { ...baseQueryGetSendToTezosSignedRequest };
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
        const message = { ...baseQueryGetSendToTezosSignedRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetSendToTezosSignedResponse = {};
export const QueryGetSendToTezosSignedResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SendToTezosSigned !== undefined) {
            SendToTezosSigned.encode(message.SendToTezosSigned, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSendToTezosSignedResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SendToTezosSigned = SendToTezosSigned.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSendToTezosSignedResponse };
        if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
            message.SendToTezosSigned = SendToTezosSigned.fromJSON(object.SendToTezosSigned);
        }
        else {
            message.SendToTezosSigned = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SendToTezosSigned !== undefined &&
            (obj.SendToTezosSigned = message.SendToTezosSigned ? SendToTezosSigned.toJSON(message.SendToTezosSigned) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSendToTezosSignedResponse };
        if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
            message.SendToTezosSigned = SendToTezosSigned.fromPartial(object.SendToTezosSigned);
        }
        else {
            message.SendToTezosSigned = undefined;
        }
        return message;
    }
};
const baseQueryAllSendToTezosSignedRequest = {};
export const QueryAllSendToTezosSignedRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSendToTezosSignedRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSendToTezosSignedRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSendToTezosSignedRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSendToTezosSignedResponse = {};
export const QueryAllSendToTezosSignedResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SendToTezosSigned) {
            SendToTezosSigned.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSendToTezosSignedResponse };
        message.SendToTezosSigned = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SendToTezosSigned.push(SendToTezosSigned.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSendToTezosSignedResponse };
        message.SendToTezosSigned = [];
        if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
            for (const e of object.SendToTezosSigned) {
                message.SendToTezosSigned.push(SendToTezosSigned.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SendToTezosSigned) {
            obj.SendToTezosSigned = message.SendToTezosSigned.map((e) => (e ? SendToTezosSigned.toJSON(e) : undefined));
        }
        else {
            obj.SendToTezosSigned = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSendToTezosSignedResponse };
        message.SendToTezosSigned = [];
        if (object.SendToTezosSigned !== undefined && object.SendToTezosSigned !== null) {
            for (const e of object.SendToTezosSigned) {
                message.SendToTezosSigned.push(SendToTezosSigned.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetReceivedFa12TxsRequest = { id: 0 };
export const QueryGetReceivedFa12TxsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetReceivedFa12TxsRequest };
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
        const message = { ...baseQueryGetReceivedFa12TxsRequest };
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
        const message = { ...baseQueryGetReceivedFa12TxsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetReceivedFa12TxsResponse = {};
export const QueryGetReceivedFa12TxsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ReceivedFa12Txs !== undefined) {
            ReceivedFa12Txs.encode(message.ReceivedFa12Txs, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetReceivedFa12TxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ReceivedFa12Txs = ReceivedFa12Txs.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetReceivedFa12TxsResponse };
        if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
            message.ReceivedFa12Txs = ReceivedFa12Txs.fromJSON(object.ReceivedFa12Txs);
        }
        else {
            message.ReceivedFa12Txs = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ReceivedFa12Txs !== undefined && (obj.ReceivedFa12Txs = message.ReceivedFa12Txs ? ReceivedFa12Txs.toJSON(message.ReceivedFa12Txs) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetReceivedFa12TxsResponse };
        if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
            message.ReceivedFa12Txs = ReceivedFa12Txs.fromPartial(object.ReceivedFa12Txs);
        }
        else {
            message.ReceivedFa12Txs = undefined;
        }
        return message;
    }
};
const baseQueryAllReceivedFa12TxsRequest = {};
export const QueryAllReceivedFa12TxsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllReceivedFa12TxsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllReceivedFa12TxsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllReceivedFa12TxsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllReceivedFa12TxsResponse = {};
export const QueryAllReceivedFa12TxsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ReceivedFa12Txs) {
            ReceivedFa12Txs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllReceivedFa12TxsResponse };
        message.ReceivedFa12Txs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ReceivedFa12Txs.push(ReceivedFa12Txs.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllReceivedFa12TxsResponse };
        message.ReceivedFa12Txs = [];
        if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
            for (const e of object.ReceivedFa12Txs) {
                message.ReceivedFa12Txs.push(ReceivedFa12Txs.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ReceivedFa12Txs) {
            obj.ReceivedFa12Txs = message.ReceivedFa12Txs.map((e) => (e ? ReceivedFa12Txs.toJSON(e) : undefined));
        }
        else {
            obj.ReceivedFa12Txs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllReceivedFa12TxsResponse };
        message.ReceivedFa12Txs = [];
        if (object.ReceivedFa12Txs !== undefined && object.ReceivedFa12Txs !== null) {
            for (const e of object.ReceivedFa12Txs) {
                message.ReceivedFa12Txs.push(ReceivedFa12Txs.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetSendToTezosRequest = { id: 0 };
export const QueryGetSendToTezosRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSendToTezosRequest };
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
        const message = { ...baseQueryGetSendToTezosRequest };
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
        const message = { ...baseQueryGetSendToTezosRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetSendToTezosResponse = {};
export const QueryGetSendToTezosResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SendToTezos !== undefined) {
            SendToTezos.encode(message.SendToTezos, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSendToTezosResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SendToTezos = SendToTezos.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSendToTezosResponse };
        if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
            message.SendToTezos = SendToTezos.fromJSON(object.SendToTezos);
        }
        else {
            message.SendToTezos = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SendToTezos !== undefined && (obj.SendToTezos = message.SendToTezos ? SendToTezos.toJSON(message.SendToTezos) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSendToTezosResponse };
        if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
            message.SendToTezos = SendToTezos.fromPartial(object.SendToTezos);
        }
        else {
            message.SendToTezos = undefined;
        }
        return message;
    }
};
const baseQueryAllSendToTezosRequest = {};
export const QueryAllSendToTezosRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSendToTezosRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSendToTezosRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSendToTezosRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSendToTezosResponse = {};
export const QueryAllSendToTezosResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SendToTezos) {
            SendToTezos.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSendToTezosResponse };
        message.SendToTezos = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SendToTezos.push(SendToTezos.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSendToTezosResponse };
        message.SendToTezos = [];
        if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
            for (const e of object.SendToTezos) {
                message.SendToTezos.push(SendToTezos.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SendToTezos) {
            obj.SendToTezos = message.SendToTezos.map((e) => (e ? SendToTezos.toJSON(e) : undefined));
        }
        else {
            obj.SendToTezos = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSendToTezosResponse };
        message.SendToTezos = [];
        if (object.SendToTezos !== undefined && object.SendToTezos !== null) {
            for (const e of object.SendToTezos) {
                message.SendToTezos.push(SendToTezos.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetReceivedTxsRequest = { id: 0 };
export const QueryGetReceivedTxsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetReceivedTxsRequest };
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
        const message = { ...baseQueryGetReceivedTxsRequest };
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
        const message = { ...baseQueryGetReceivedTxsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetReceivedTxsResponse = {};
export const QueryGetReceivedTxsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ReceivedTxs !== undefined) {
            ReceivedTxs.encode(message.ReceivedTxs, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetReceivedTxsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ReceivedTxs = ReceivedTxs.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetReceivedTxsResponse };
        if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
            message.ReceivedTxs = ReceivedTxs.fromJSON(object.ReceivedTxs);
        }
        else {
            message.ReceivedTxs = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ReceivedTxs !== undefined && (obj.ReceivedTxs = message.ReceivedTxs ? ReceivedTxs.toJSON(message.ReceivedTxs) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetReceivedTxsResponse };
        if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
            message.ReceivedTxs = ReceivedTxs.fromPartial(object.ReceivedTxs);
        }
        else {
            message.ReceivedTxs = undefined;
        }
        return message;
    }
};
const baseQueryAllReceivedTxsRequest = {};
export const QueryAllReceivedTxsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllReceivedTxsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllReceivedTxsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllReceivedTxsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllReceivedTxsResponse = {};
export const QueryAllReceivedTxsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ReceivedTxs) {
            ReceivedTxs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllReceivedTxsResponse };
        message.ReceivedTxs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ReceivedTxs.push(ReceivedTxs.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllReceivedTxsResponse };
        message.ReceivedTxs = [];
        if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
            for (const e of object.ReceivedTxs) {
                message.ReceivedTxs.push(ReceivedTxs.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ReceivedTxs) {
            obj.ReceivedTxs = message.ReceivedTxs.map((e) => (e ? ReceivedTxs.toJSON(e) : undefined));
        }
        else {
            obj.ReceivedTxs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllReceivedTxsResponse };
        message.ReceivedTxs = [];
        if (object.ReceivedTxs !== undefined && object.ReceivedTxs !== null) {
            for (const e of object.ReceivedTxs) {
                message.ReceivedTxs.push(ReceivedTxs.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendToTezosSigned(request) {
        const data = QueryGetSendToTezosSignedRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezosSigned', data);
        return promise.then((data) => QueryGetSendToTezosSignedResponse.decode(new Reader(data)));
    }
    SendToTezosSignedAll(request) {
        const data = QueryAllSendToTezosSignedRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezosSignedAll', data);
        return promise.then((data) => QueryAllSendToTezosSignedResponse.decode(new Reader(data)));
    }
    ReceivedFa12Txs(request) {
        const data = QueryGetReceivedFa12TxsRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedFa12Txs', data);
        return promise.then((data) => QueryGetReceivedFa12TxsResponse.decode(new Reader(data)));
    }
    ReceivedFa12TxsAll(request) {
        const data = QueryAllReceivedFa12TxsRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedFa12TxsAll', data);
        return promise.then((data) => QueryAllReceivedFa12TxsResponse.decode(new Reader(data)));
    }
    SendToTezos(request) {
        const data = QueryGetSendToTezosRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezos', data);
        return promise.then((data) => QueryGetSendToTezosResponse.decode(new Reader(data)));
    }
    SendToTezosAll(request) {
        const data = QueryAllSendToTezosRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'SendToTezosAll', data);
        return promise.then((data) => QueryAllSendToTezosResponse.decode(new Reader(data)));
    }
    ReceivedTxs(request) {
        const data = QueryGetReceivedTxsRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedTxs', data);
        return promise.then((data) => QueryGetReceivedTxsResponse.decode(new Reader(data)));
    }
    ReceivedTxsAll(request) {
        const data = QueryAllReceivedTxsRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.bifrost.bifrost.Query', 'ReceivedTxsAll', data);
        return promise.then((data) => QueryAllReceivedTxsResponse.decode(new Reader(data)));
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
