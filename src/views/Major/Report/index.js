import React from "react";
import { Table, Card } from 'antd';
import { Link } from "react-router-dom";
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: 'ID báo cáo',
    dataIndex: 'stt',
  },
  {
    title: 'Tên câu hỏi',
    dataIndex: 'stt',
  },
  {
    title: 'Lớp',
    dataIndex: 'stt',
  },
  {
    title: 'Môn',
    dataIndex: 'stt',
  },
  {
    title: "Giá chốt",
    dataIndex: "stt"
  },
  {
    title: 'Thời gian đăng',
    dataIndex: 'stt',
  },
  {
    title: 'Thời hạn',
    dataIndex: 'stt',
  },
  {
    title: 'Người hỏi',
    dataIndex: 'stt',
  },
  {
    title: 'Số tiền đã nạp',
    dataIndex: 'stt',
  },
  {
    title: "Số câu hỏi",
    dataIndex: "stt"
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'stt',
  },
  {
    title: 'Người trả lời',
    dataIndex: 'stt',
  },
  {
    title: 'Số tiền đã rút',
    dataIndex: 'stt',
  },
  {
    title: 'Số câu hỏi nhận',
    dataIndex: 'stt',
  },
  {
    title: "Số ngày đăng kí",
    dataIndex: "stt"
  },
  {
    title: 'Người báo cáo',
    dataIndex: 'stt',
  },
  {
    title: 'Thời gian',
    dataIndex: 'stt',
  },
  {
    title: 'Nội dung',
    dataIndex: 'stt',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'stt',
  },
  {
    title: 'Người xử lý',
    dataIndex: 'stt',
  },
  {
    title: 'Xem chi tiết',
    dataIndex: 'stt22',
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt22: <Link to={`/bao-cao/chi-tiet-bao-cao`}>Xem chi tiết</Link>,
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
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default ReportMajor;