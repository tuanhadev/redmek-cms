import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: 'ID báo cáo',
    dataIndex: 'name',
  },
  {
    title: 'Tên câu hỏi',
    dataIndex: 'email',
  },
  {
    title: 'Lớp',
    dataIndex: 'phone',
  },
  {
    title: 'Môn',
    dataIndex: 'address',
  },
  {
    title: "Giá chốt",
    dataIndex: "stt"
  },
  {
    title: 'Thời gian đăng',
    dataIndex: 'name',
  },
  {
    title: 'Thời hạn',
    dataIndex: 'email',
  },
  {
    title: 'Người hỏi',
    dataIndex: 'phone',
  },
  {
    title: 'Số tiền đã nạp',
    dataIndex: 'address',
  },
  {
    title: "Số câu hỏi",
    dataIndex: "stt"
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'name',
  },
  {
    title: 'Người trả lời',
    dataIndex: 'email',
  },
  {
    title: 'Số tiền đã rút',
    dataIndex: 'phone',
  },
  {
    title: 'Số câu hỏi nhận',
    dataIndex: 'address',
  },
  {
    title: "Số ngày đăng kí",
    dataIndex: "stt"
  },
  {
    title: 'Người báo cáo',
    dataIndex: 'name',
  },
  {
    title: 'Thời gian',
    dataIndex: 'email',
  },
  {
    title: 'Nội dung',
    dataIndex: 'phone',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'address',
  },
  {
    title: 'Người xử lý',
    dataIndex: 'address',
  },
  {
    title: 'Xem chi tiết',
    dataIndex: 'address',
  }
];

class ReportMajor extends React.Component {

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
        <Card type="inner" title="Báo cáo">
          <Table pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default ReportMajor;