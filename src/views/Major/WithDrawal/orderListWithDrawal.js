import React from "react";
import { Table, Card } from 'antd';
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
    dataIndex: "stt"
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
    dataIndex: "stt"
  },
  {
    title: "Nhập lý do từ chối",
    dataIndex: "stt"
  },
  {
    title: "Từ chối",
    dataIndex: "stt"
  }
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class OrderListWithDrawal extends React.Component {

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
        <Card type="inner" title="Danh sách lệnh">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default OrderListWithDrawal;