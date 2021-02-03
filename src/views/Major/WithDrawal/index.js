import React from "react";
import { Table, Card, Button } from 'antd';
import { Link } from "react-router-dom";
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "ID Yêu cầu rút",
    dataIndex: "stt"
  },
  {
    title: "Tên tài khoản",
    dataIndex: "stt"
  },
  {
    title: "Địa chỉ định danh",
    dataIndex: "stt"
  },
  {
    title: "ID tài khoản B",
    dataIndex: "stt"
  },
  {
    title: "Số dư tài khoản",
    dataIndex: "stt"
  },
  {
    title: "Tạm giữ",
    dataIndex: "stt"
  },
  {
    title: "Thời gian",
    dataIndex: "stt"
  },
  {
    title: "Số ngày đăng ký",
    dataIndex: "stt"
  },
  {
    title: "Danh sách câu hỏi",
    dataIndex: "stt"
  },
  {
    title: "Số Câu hỏi Nhận/Hoàn thành",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đã rút",
    dataIndex: "stt"
  },
  {
    title: "Danh sách lệnh",
    dataIndex: "stt22"
  },
  {
    title: "Tài khoản đăng ký nhận",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đặt rút",
    dataIndex: "stt"
  },
  {
    title: "Trạng thái",
    dataIndex: "stt"
  },
  {
    title: "Duyệt",
    dataIndex: "stt1"
  },
  {
    title: "Nhập lý do từ chối",
    dataIndex: "stt"
  },
  {
    title: "Từ chối",
    dataIndex: "stt2"
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt1: <Button type="primary">Duyệt</Button>,
    stt2: <Button danger type="text">Từ chối</Button>,
    stt22: <Link to={`/rut-tien/danh-sach-lenh`}>Danh sách lệnh</Link>,
  }
];

class WithDawalMajor extends React.Component {

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
        <Card className="mb-5" type="inner" title="Danh sách Chờ xử lý">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
        <Card type="inner" title="Danh sách Yêu cầu rút tiền đã xử lý">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default WithDawalMajor;