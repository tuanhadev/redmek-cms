import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: 'Lớp',
    dataIndex: 'name',
  },
  {
    title: 'Môn',
    dataIndex: 'email',
  },
  {
    title: 'Giá gợi ý',
    dataIndex: 'phone',
  },
  {
    title: 'Giá chốt',
    dataIndex: 'phone',
  },
  {
    title: 'Mã khuyến mãi',
    dataIndex: 'address',
  },
  {
    title: "Ảnh",
    dataIndex: "stt"
  },
  {
    title: 'Mô tả',
    dataIndex: 'name',
  },
  {
    title: 'Thời gian đăng',
    dataIndex: 'email',
  },
  {
    title: 'Thời hạn',
    dataIndex: 'phone',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'address',
  },
  {
    title: "Người hỏi",
    dataIndex: "stt"
  },
  {
    title: 'Số tiền đã nạp',
    dataIndex: 'name',
  },
  {
    title: 'Số câu hỏi hoàn thành',
    dataIndex: 'email',
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'phone',
  },
  {
    title: 'Người trả lời',
    dataIndex: 'address',
  },
  {
    title: "Số tiền đã rút",
    dataIndex: "stt"
  },
  {
    title: 'Số câu hỏi nhận',
    dataIndex: 'name',
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'email',
  },
  {
    title: 'Hệ số chia thưởng',
    dataIndex: 'phone',
  },
  {
    title: 'Mô tả',
    dataIndex: 'address',
  },
  {
    title: 'Xem chi tiết',
    dataIndex: 'address',
  },
  {
    title: "Duyệt",
    dataIndex: "stt"
  },
  {
    title: 'Nhắc nhở A',
    dataIndex: 'name',
  },
  {
    title: 'Nhắc nhở B',
    dataIndex: 'email',
  },
  {
    title: 'Xoá câu hỏi',
    dataIndex: 'phone',
  },
  {
    title: 'A/B gian lận',
    dataIndex: 'address',
  },
  {
    title: 'Ẩn/hiện',
    dataIndex: 'address',
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
          <Table pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default QuestionMajor;