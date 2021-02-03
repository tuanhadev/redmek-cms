import React from "react";
import { Table, Card, Button } from 'antd';
import config from "../../../config";

const columns1 = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "ID",
    dataIndex: "stt"
  },
  {
    title: "Tên",
    dataIndex: "stt"
  },
  {
    title: "A/B",
    dataIndex: "stt"
  },
  {
    title: "Định danh",
    dataIndex: "stt"
  },
  {
    title: "Email",
    dataIndex: "stt"
  },
  {
    title: "Điện thoại",
    dataIndex: "stt"
  },
  {
    title: "Facebook",
    dataIndex: "stt"
  },
  {
    title: "TK Google",
    dataIndex: "stt"
  },
  {
    title: "Tỉnh",
    dataIndex: "stt"
  },
  {
    title: "Ngày đăng ký",
    dataIndex: "stt"
  },
  {
    title: "Số ngày đăng ký",
    dataIndex: "stt"
  },
  {
    title: "Kích hoạt",
    dataIndex: "stt"
  },
  {
    title: "Hạng",
    dataIndex: "stt"
  },
  {
    title: "Số CH đăng / nhận",
    dataIndex: "stt"
  },
  {
    title: "Số Câu hỏi Hoàn thành",
    dataIndex: "stt"
  },
  {
    title: "Số lần bị nhắc nhở",
    dataIndex: "stt"
  },
  {
    title: "Danh sách câu hỏi",
    dataIndex: "stt"
  },
  {
    title: "Rate",
    dataIndex: "stt"
  },
  {
    title: "Thiết bị",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đã nạp",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đã rút",
    dataIndex: "stt"
  },
  {
    title: "Tài khoản có liên quan",
    dataIndex: "stt"
  },
  {
    title: "Thông báo từ Redmek",
    dataIndex: "stt"
  },
  {
    title: "Nạp tiền",
    dataIndex: "stt3"
  },
  {
    title: "Tình trạng",
    dataIndex: "stt4"
  },
  {
    title: "Khóa TK/ Mở khóa",
    dataIndex: "stt5"
  },
  {
    title: "Xóa TK",
    dataIndex: "stt6"
  },
];

const columns2 = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "Tên Câu hỏi",
    dataIndex: "stt"
  },
  {
    title: "Lớp",
    dataIndex: "stt"
  },
  {
    title: "Môn",
    dataIndex: "stt"
  },
  {
    title: "Giá gợi ý",
    dataIndex: "stt"
  },
  {
    title: "Giá chốt",
    dataIndex: "stt"
  },
  {
    title: "Mã KM",
    dataIndex: "stt"
  },
  {
    title: "Ảnh",
    dataIndex: "stt"
  },
  {
    title: "Mô tả",
    dataIndex: "stt"
  },
  {
    title: "Thời gian đăng",
    dataIndex: "stt"
  },
  {
    title: "Thời hạn",
    dataIndex: "stt"
  },
  {
    title: "Trạng thái",
    dataIndex: "stt"
  },
  {
    title: "Nguời hỏi",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đã nạp",
    dataIndex: "stt"
  },
  {
    title: "Số Câu hỏi Hoàn thành",
    dataIndex: "stt"
  },
  {
    title: "Số ngày đăng kí",
    dataIndex: "stt"
  },
  {
    title: "Người trả lời",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đã rút",
    dataIndex: "stt"
  },
  {
    title: "Số câu hỏi nhận/ Hoàn thành",
    dataIndex: "stt"
  },
  {
    title: "Số ngày đăng kí",
    dataIndex: "stt"
  },
  {
    title: "Hệ số chia thưởng",
    dataIndex: "stt"
  },
  {
    title: "Ảnh LG",
    dataIndex: "stt"
  },
  {
    title: "Mô tả LG",
    dataIndex: "Xem chi tiết"
  },
  {
    title: "Nhắc nhở A",
    dataIndex: "stt7"
  },
  {
    title: "Xoá câu hỏi",
    dataIndex: "stt8"
  },
  {
    title: "A/B gian lận",
    dataIndex: "stt9"
  },
  {
    title: "Ẩn / hiện",
    dataIndex: "stt10"
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt3: <Button type="primary">Gửi</Button>,
    stt4: <Button type="primary">Active</Button>,
    stt5: <Button danger type="text">Khóa</Button>,
    stt6: <Button danger type="text">Xóa</Button>,
    stt7: <Button danger type="text">Nhắc nhở A</Button>,
    stt8: <Button danger type="text">Xóa</Button>,
    stt9: <Button danger type="text">Xử lý</Button>,
    stt10: <Button danger type="text">Hiện</Button>
  }
];

class ListQuestionAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  componentDidMount = async () => {
    this.getListAgency();
  }

  getListAgency = async () => {
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Card className="mb-5" type="inner" title="Xem chi tiết Danh sách câu hỏi">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns1} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
        <Card type="inner" title="Danh sách Câu hỏi">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns2} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default ListQuestionAccount;