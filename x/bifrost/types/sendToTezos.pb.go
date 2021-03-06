// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bifrost/sendToTezos.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type SendToTezos struct {
	Creator       string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id            uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	TezosReceiver string `protobuf:"bytes,3,opt,name=tezosReceiver,proto3" json:"tezosReceiver,omitempty"`
	Amount        string `protobuf:"bytes,4,opt,name=amount,proto3" json:"amount,omitempty"`
	Denom         string `protobuf:"bytes,5,opt,name=denom,proto3" json:"denom,omitempty"`
}

func (m *SendToTezos) Reset()         { *m = SendToTezos{} }
func (m *SendToTezos) String() string { return proto.CompactTextString(m) }
func (*SendToTezos) ProtoMessage()    {}
func (*SendToTezos) Descriptor() ([]byte, []int) {
	return fileDescriptor_6dd68879a9f5b1a5, []int{0}
}
func (m *SendToTezos) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *SendToTezos) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_SendToTezos.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *SendToTezos) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SendToTezos.Merge(m, src)
}
func (m *SendToTezos) XXX_Size() int {
	return m.Size()
}
func (m *SendToTezos) XXX_DiscardUnknown() {
	xxx_messageInfo_SendToTezos.DiscardUnknown(m)
}

var xxx_messageInfo_SendToTezos proto.InternalMessageInfo

func (m *SendToTezos) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *SendToTezos) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *SendToTezos) GetTezosReceiver() string {
	if m != nil {
		return m.TezosReceiver
	}
	return ""
}

func (m *SendToTezos) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *SendToTezos) GetDenom() string {
	if m != nil {
		return m.Denom
	}
	return ""
}

func init() {
	proto.RegisterType((*SendToTezos)(nil), "sap200.bifrost.bifrost.SendToTezos")
}

func init() { proto.RegisterFile("bifrost/sendToTezos.proto", fileDescriptor_6dd68879a9f5b1a5) }

var fileDescriptor_6dd68879a9f5b1a5 = []byte{
	// 231 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4c, 0xca, 0x4c, 0x2b,
	0xca, 0x2f, 0x2e, 0xd1, 0x2f, 0x4e, 0xcd, 0x4b, 0x09, 0xc9, 0x0f, 0x49, 0xad, 0xca, 0x2f, 0xd6,
	0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x2b, 0x4e, 0x2c, 0x30, 0x32, 0x30, 0xd0, 0x83, 0xaa,
	0x80, 0xd1, 0x52, 0x22, 0xe9, 0xf9, 0xe9, 0xf9, 0x60, 0x25, 0xfa, 0x20, 0x16, 0x44, 0xb5, 0x52,
	0x37, 0x23, 0x17, 0x77, 0x30, 0xc2, 0x0c, 0x21, 0x09, 0x2e, 0xf6, 0xe4, 0xa2, 0xd4, 0xc4, 0x92,
	0xfc, 0x22, 0x09, 0x46, 0x05, 0x46, 0x0d, 0xce, 0x20, 0x18, 0x57, 0x88, 0x8f, 0x8b, 0x29, 0x33,
	0x45, 0x82, 0x49, 0x81, 0x51, 0x83, 0x25, 0x88, 0x29, 0x33, 0x45, 0x48, 0x85, 0x8b, 0xb7, 0x04,
	0xa4, 0x25, 0x28, 0x35, 0x39, 0x35, 0xb3, 0x2c, 0xb5, 0x48, 0x82, 0x19, 0xac, 0x1e, 0x55, 0x50,
	0x48, 0x8c, 0x8b, 0x2d, 0x31, 0x37, 0xbf, 0x34, 0xaf, 0x44, 0x82, 0x05, 0x2c, 0x0d, 0xe5, 0x09,
	0x89, 0x70, 0xb1, 0xa6, 0xa4, 0xe6, 0xe5, 0xe7, 0x4a, 0xb0, 0x82, 0x85, 0x21, 0x1c, 0x27, 0xe7,
	0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39,
	0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0xd2, 0x4c, 0xcf, 0x2c, 0xc9, 0x28,
	0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x87, 0x78, 0x50, 0x1f, 0x16, 0x04, 0x15, 0x70, 0x56, 0x49,
	0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0x67, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x1e,
	0x37, 0xfd, 0x25, 0x24, 0x01, 0x00, 0x00,
}

func (m *SendToTezos) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *SendToTezos) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *SendToTezos) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Denom) > 0 {
		i -= len(m.Denom)
		copy(dAtA[i:], m.Denom)
		i = encodeVarintSendToTezos(dAtA, i, uint64(len(m.Denom)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintSendToTezos(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.TezosReceiver) > 0 {
		i -= len(m.TezosReceiver)
		copy(dAtA[i:], m.TezosReceiver)
		i = encodeVarintSendToTezos(dAtA, i, uint64(len(m.TezosReceiver)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintSendToTezos(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintSendToTezos(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintSendToTezos(dAtA []byte, offset int, v uint64) int {
	offset -= sovSendToTezos(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *SendToTezos) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovSendToTezos(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovSendToTezos(uint64(m.Id))
	}
	l = len(m.TezosReceiver)
	if l > 0 {
		n += 1 + l + sovSendToTezos(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovSendToTezos(uint64(l))
	}
	l = len(m.Denom)
	if l > 0 {
		n += 1 + l + sovSendToTezos(uint64(l))
	}
	return n
}

func sovSendToTezos(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSendToTezos(x uint64) (n int) {
	return sovSendToTezos(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *SendToTezos) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSendToTezos
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: SendToTezos: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: SendToTezos: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendToTezos
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendToTezos
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendToTezos
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendToTezos
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TezosReceiver", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendToTezos
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendToTezos
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendToTezos
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TezosReceiver = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendToTezos
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendToTezos
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendToTezos
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendToTezos
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendToTezos
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendToTezos
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denom = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSendToTezos(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthSendToTezos
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipSendToTezos(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSendToTezos
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSendToTezos
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSendToTezos
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthSendToTezos
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSendToTezos
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSendToTezos
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSendToTezos        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSendToTezos          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSendToTezos = fmt.Errorf("proto: unexpected end of group")
)
