import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt1"
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
    dataIndex: "stt"
  },
  {
    title: "Tình trạng",
    dataIndex: "stt"
  },
  {
    title: "Khóa TK/ Mở khóa",
    dataIndex: "stt"
  },
  {
    title: "Xóa TK",
    dataIndex: "stt"
  },
];

const data = [
  {
    key: 1,
    stt1: 1
  }
];

class AccountMajor extends React.Component {

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
        <Card type="inner" title="Tài khoản">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default AccountMajor;