// @generated by protobuf-ts 2.9.4 with parameter client_generic
// @generated from protobuf file "tunnel.proto" (package "service.rpc.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message service.rpc.v1.PrepareReq
 */
export interface PrepareReq {
}
/**
 * @generated from protobuf message service.rpc.v1.PrepareResp
 */
export interface PrepareResp {
    /**
     * @generated from protobuf field: repeated service.rpc.v1.IceServer ice_servers = 1;
     */
    iceServers: IceServer[];
}
/**
 * @generated from protobuf message service.rpc.v1.IceServer
 */
export interface IceServer {
    /**
     * @generated from protobuf field: repeated string urls = 1;
     */
    urls: string[];
    /**
     * @generated from protobuf field: optional string username = 2;
     */
    username?: string;
}
/**
 * @generated from protobuf message service.rpc.v1.SendReq
 */
export interface SendReq {
    /**
     * @generated from protobuf field: service.rpc.v1.Message msg = 1;
     */
    msg?: Message;
}
/**
 * @generated from protobuf message service.rpc.v1.SendResp
 */
export interface SendResp {
}
/**
 * @generated from protobuf message service.rpc.v1.RecvReq
 */
export interface RecvReq {
    /**
     * @generated from protobuf field: service.rpc.v1.PeerInfo info = 1;
     */
    info?: PeerInfo;
}
/**
 * @generated from protobuf message service.rpc.v1.RecvResp
 */
export interface RecvResp {
    /**
     * @generated from protobuf field: repeated service.rpc.v1.Message msgs = 1;
     */
    msgs: Message[];
}
/**
 * @generated from protobuf message service.rpc.v1.PeerInfo
 */
export interface PeerInfo {
    /**
     * @generated from protobuf field: uint32 conn_id = 1;
     */
    connId: number;
    /**
     * @generated from protobuf field: bool enable_discovery = 2;
     */
    enableDiscovery: boolean;
}
/**
 * Use small tag numbers (1-15) for fields that are frequently used or are performance-sensitive, even if they are optional.
 * Larger tag numbers (16 and above) can be used for fields that are optional and not frequently included in messages, as they will require more bytes to encode.
 * Avoid the 19000–19999 range, as it's reserved.
 * Consider future-proofing your schema by leaving gaps between field numbers to allow for extensions or new fields later.
 *
 * @generated from protobuf message service.rpc.v1.Message
 */
export interface Message {
    /**
     * @generated from protobuf field: service.rpc.v1.MessageHeader header = 1;
     */
    header?: MessageHeader;
    /**
     * payload will be treated as opaque in backend. Size limit is 10kB.
     *
     * @generated from protobuf field: service.rpc.v1.MessagePayload payload = 2;
     */
    payload?: MessagePayload;
}
/**
 * @generated from protobuf message service.rpc.v1.MessagePayload
 */
export interface MessagePayload {
    /**
     * @generated from protobuf oneof: payload_type
     */
    payloadType: {
        oneofKind: "signal";
        /**
         * @generated from protobuf field: service.rpc.v1.Signal signal = 1;
         */
        signal: Signal;
    } | {
        oneofKind: "join";
        /**
         * @generated from protobuf field: service.rpc.v1.Join join = 2;
         */
        join: Join;
    } | {
        oneofKind: "bye";
        /**
         * @generated from protobuf field: service.rpc.v1.Bye bye = 3;
         */
        bye: Bye;
    } | {
        oneofKind: "ack";
        /**
         * @generated from protobuf field: service.rpc.v1.Ack ack = 4;
         */
        ack: Ack;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message service.rpc.v1.MessageHeader
 */
export interface MessageHeader {
    /**
     * @generated from protobuf field: string group_id = 1;
     */
    groupId: string;
    /**
     * @generated from protobuf field: string peer_id = 2;
     */
    peerId: string; // where this message is originated from. Special values: "SYSTEM"
    /**
     * @generated from protobuf field: uint32 conn_id = 3;
     */
    connId: number; // used for deciding polite vs impolite. higher id wins. It also is used to detect connection breakages
    /**
     * @generated from protobuf field: string other_group_id = 4;
     */
    otherGroupId: string;
    /**
     * @generated from protobuf field: string other_peer_id = 5;
     */
    otherPeerId: string; // Special values: "SYSTEM"
    /**
     * @generated from protobuf field: uint32 other_conn_id = 6;
     */
    otherConnId: number; // Special values: 0-16
    /**
     * @generated from protobuf field: uint32 seqnum = 7;
     */
    seqnum: number;
    /**
     * @generated from protobuf field: bool reliable = 8;
     */
    reliable: boolean; // true: tcp like, false: fire & forget
}
/**
 * @generated from protobuf message service.rpc.v1.Signal
 */
export interface Signal {
    /**
     * @generated from protobuf field: uint32 generation_counter = 1;
     */
    generationCounter: number;
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "sdp";
        /**
         * @generated from protobuf field: service.rpc.v1.Sdp sdp = 9;
         */
        sdp: Sdp;
    } | {
        oneofKind: "iceCandidate";
        /**
         * @generated from protobuf field: service.rpc.v1.ICECandidate ice_candidate = 10;
         */
        iceCandidate: ICECandidate;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message service.rpc.v1.Sdp
 */
export interface Sdp {
    /**
     * @generated from protobuf field: service.rpc.v1.SdpKind kind = 1;
     */
    kind: SdpKind;
    /**
     * @generated from protobuf field: string sdp = 2;
     */
    sdp: string;
}
/**
 * @generated from protobuf message service.rpc.v1.ICECandidate
 */
export interface ICECandidate {
    /**
     * @generated from protobuf field: string candidate = 1;
     */
    candidate: string;
    /**
     * @generated from protobuf field: optional uint32 sdp_m_line_index = 2;
     */
    sdpMLineIndex?: number;
    /**
     * @generated from protobuf field: optional string sdp_mid = 3;
     */
    sdpMid?: string;
    /**
     * @generated from protobuf field: optional string username = 4;
     */
    username?: string;
    /**
     * @generated from protobuf field: optional string password = 5;
     */
    password?: string;
}
/**
 * @generated from protobuf message service.rpc.v1.Join
 */
export interface Join {
}
/**
 * @generated from protobuf message service.rpc.v1.Bye
 */
export interface Bye {
}
/**
 * @generated from protobuf message service.rpc.v1.Ack
 */
export interface Ack {
    /**
     * @generated from protobuf field: repeated service.rpc.v1.AckRange ack_ranges = 1;
     */
    ackRanges: AckRange[];
}
/**
 * @generated from protobuf message service.rpc.v1.AckRange
 */
export interface AckRange {
    /**
     * @generated from protobuf field: uint32 seqnum_start = 1;
     */
    seqnumStart: number;
    /**
     * @generated from protobuf field: uint32 seqnum_end = 2;
     */
    seqnumEnd: number;
}
/**
 * reserved for headers
 *
 * @generated from protobuf message service.rpc.v1.DataChannel
 */
export interface DataChannel {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "heartbeat";
        /**
         * @generated from protobuf field: service.rpc.v1.DataChannelHeartbeat heartbeat = 10;
         */
        heartbeat: DataChannelHeartbeat;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message service.rpc.v1.DataChannelHeartbeat
 */
export interface DataChannelHeartbeat {
}
/**
 * @generated from protobuf enum service.rpc.v1.SdpKind
 */
export enum SdpKind {
    /**
     * @generated from protobuf enum value: SDP_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: SDP_KIND_OFFER = 1;
     */
    OFFER = 1,
    /**
     * @generated from protobuf enum value: SDP_KIND_ANSWER = 2;
     */
    ANSWER = 2,
    /**
     * @generated from protobuf enum value: SDP_KIND_PRANSWER = 3;
     */
    PRANSWER = 3,
    /**
     * @generated from protobuf enum value: SDP_KIND_ROLLBACK = 4;
     */
    ROLLBACK = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class PrepareReq$Type extends MessageType<PrepareReq> {
    constructor() {
        super("service.rpc.v1.PrepareReq", []);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.PrepareReq
 */
export const PrepareReq = new PrepareReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrepareResp$Type extends MessageType<PrepareResp> {
    constructor() {
        super("service.rpc.v1.PrepareResp", [
            { no: 1, name: "ice_servers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IceServer }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.PrepareResp
 */
export const PrepareResp = new PrepareResp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IceServer$Type extends MessageType<IceServer> {
    constructor() {
        super("service.rpc.v1.IceServer", [
            { no: 1, name: "urls", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.IceServer
 */
export const IceServer = new IceServer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendReq$Type extends MessageType<SendReq> {
    constructor() {
        super("service.rpc.v1.SendReq", [
            { no: 1, name: "msg", kind: "message", T: () => Message }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.SendReq
 */
export const SendReq = new SendReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendResp$Type extends MessageType<SendResp> {
    constructor() {
        super("service.rpc.v1.SendResp", []);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.SendResp
 */
export const SendResp = new SendResp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RecvReq$Type extends MessageType<RecvReq> {
    constructor() {
        super("service.rpc.v1.RecvReq", [
            { no: 1, name: "info", kind: "message", T: () => PeerInfo }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.RecvReq
 */
export const RecvReq = new RecvReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RecvResp$Type extends MessageType<RecvResp> {
    constructor() {
        super("service.rpc.v1.RecvResp", [
            { no: 1, name: "msgs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Message }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.RecvResp
 */
export const RecvResp = new RecvResp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PeerInfo$Type extends MessageType<PeerInfo> {
    constructor() {
        super("service.rpc.v1.PeerInfo", [
            { no: 1, name: "conn_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "enable_discovery", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.PeerInfo
 */
export const PeerInfo = new PeerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Message$Type extends MessageType<Message> {
    constructor() {
        super("service.rpc.v1.Message", [
            { no: 1, name: "header", kind: "message", T: () => MessageHeader },
            { no: 2, name: "payload", kind: "message", T: () => MessagePayload }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.Message
 */
export const Message = new Message$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MessagePayload$Type extends MessageType<MessagePayload> {
    constructor() {
        super("service.rpc.v1.MessagePayload", [
            { no: 1, name: "signal", kind: "message", oneof: "payloadType", T: () => Signal },
            { no: 2, name: "join", kind: "message", oneof: "payloadType", T: () => Join },
            { no: 3, name: "bye", kind: "message", oneof: "payloadType", T: () => Bye },
            { no: 4, name: "ack", kind: "message", oneof: "payloadType", T: () => Ack }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.MessagePayload
 */
export const MessagePayload = new MessagePayload$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MessageHeader$Type extends MessageType<MessageHeader> {
    constructor() {
        super("service.rpc.v1.MessageHeader", [
            { no: 1, name: "group_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "peer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "conn_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "other_group_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "other_peer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "other_conn_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "seqnum", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "reliable", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.MessageHeader
 */
export const MessageHeader = new MessageHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Signal$Type extends MessageType<Signal> {
    constructor() {
        super("service.rpc.v1.Signal", [
            { no: 1, name: "generation_counter", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "sdp", kind: "message", oneof: "data", T: () => Sdp },
            { no: 10, name: "ice_candidate", kind: "message", oneof: "data", T: () => ICECandidate }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.Signal
 */
export const Signal = new Signal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Sdp$Type extends MessageType<Sdp> {
    constructor() {
        super("service.rpc.v1.Sdp", [
            { no: 1, name: "kind", kind: "enum", T: () => ["service.rpc.v1.SdpKind", SdpKind, "SDP_KIND_"] },
            { no: 2, name: "sdp", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.Sdp
 */
export const Sdp = new Sdp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ICECandidate$Type extends MessageType<ICECandidate> {
    constructor() {
        super("service.rpc.v1.ICECandidate", [
            { no: 1, name: "candidate", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "sdp_m_line_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "sdp_mid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "username", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "password", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.ICECandidate
 */
export const ICECandidate = new ICECandidate$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Join$Type extends MessageType<Join> {
    constructor() {
        super("service.rpc.v1.Join", []);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.Join
 */
export const Join = new Join$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Bye$Type extends MessageType<Bye> {
    constructor() {
        super("service.rpc.v1.Bye", []);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.Bye
 */
export const Bye = new Bye$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Ack$Type extends MessageType<Ack> {
    constructor() {
        super("service.rpc.v1.Ack", [
            { no: 1, name: "ack_ranges", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AckRange }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.Ack
 */
export const Ack = new Ack$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AckRange$Type extends MessageType<AckRange> {
    constructor() {
        super("service.rpc.v1.AckRange", [
            { no: 1, name: "seqnum_start", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "seqnum_end", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.AckRange
 */
export const AckRange = new AckRange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DataChannel$Type extends MessageType<DataChannel> {
    constructor() {
        super("service.rpc.v1.DataChannel", [
            { no: 10, name: "heartbeat", kind: "message", oneof: "payload", T: () => DataChannelHeartbeat }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.DataChannel
 */
export const DataChannel = new DataChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DataChannelHeartbeat$Type extends MessageType<DataChannelHeartbeat> {
    constructor() {
        super("service.rpc.v1.DataChannelHeartbeat", []);
    }
}
/**
 * @generated MessageType for protobuf message service.rpc.v1.DataChannelHeartbeat
 */
export const DataChannelHeartbeat = new DataChannelHeartbeat$Type();
/**
 * @generated ServiceType for protobuf service service.rpc.v1.Tunnel
 */
export const Tunnel = new ServiceType("service.rpc.v1.Tunnel", [
    { name: "Prepare", options: {}, I: PrepareReq, O: PrepareResp },
    { name: "Send", options: {}, I: SendReq, O: SendResp },
    { name: "Recv", options: {}, I: RecvReq, O: RecvResp }
]);
