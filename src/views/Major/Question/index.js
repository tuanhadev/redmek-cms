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
    title: 'Lớp',
    dataIndex: 'stt',
  },
  {
    title: 'Môn',
    dataIndex: 'stt',
  },
  {
    title: 'Giá gợi ý',
    dataIndex: 'stt',
  },
  {
    title: 'Giá chốt',
    dataIndex: 'stt',
  },
  {
    title: 'Mã khuyến mãi',
    dataIndex: 'stt',
  },
  {
    title: "Ảnh",
    dataIndex: "stt"
  },
  {
    title: 'Mô tả',
    dataIndex: 'stt',
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
    title: 'Trạng thái',
    dataIndex: 'stt',
  },
  {
    title: "Người hỏi",
    dataIndex: "stt"
  },
  {
    title: 'Số tiền đã nạp',
    dataIndex: 'stt',
  },
  {
    title: 'Số câu hỏi hoàn thành',
    dataIndex: 'stt',
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
    title: "Số tiền đã rút",
    dataIndex: "stt"
  },
  {
    title: 'Số câu hỏi nhận',
    dataIndex: 'stt',
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'stt',
  },
  {
    title: 'Hệ số chia thưởng',
    dataIndex: 'stt20',
  },
  {
    title: 'Mô tả',
    dataIndex: 'stt',
  },
  {
    title: 'Xem chi tiết',
    dataIndex: 'stt22',
  },
  {
    title: "Duyệt",
    dataIndex: "stt"
  },
  {
    title: 'Nhắc nhở A',
    dataIndex: 'stt',
  },
  {
    title: 'Nhắc nhở B',
    dataIndex: 'stt',
  },
  {
    title: 'Xoá câu hỏi',
    dataIndex: 'stt',
  },
  {
    title: 'A/B gian lận',
    dataIndex: 'stt',
  },
  {
    title: 'Ẩn/hiện',
    dataIndex: 'stt',
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt22: <Link to={`/cau-hoi/chi-tiet-cau-hoi`}>Xem chi tiết</Link>,
    stt20: <Link to={`/cau-hoi/he-so-chia-thuong`}>75,6%</Link>,
  }
];

class QuestionMajor extends React.Component {

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
        <Card type="inner" title="Câu hỏi">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} dataSource={data} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default QuestionMajor;