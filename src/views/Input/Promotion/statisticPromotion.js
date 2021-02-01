import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
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
    title: 'Giá gợi ý',
    dataIndex: 'stt',
  },
  {
    title: 'Giá chốt',
    dataIndex: 'stt',
  },
  {
    title: 'Mã KM',
    dataIndex: 'stt',
  },
  {
    title: 'Ảnh',
    dataIndex: 'stt',
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
    title: 'Người hỏi',
    dataIndex: 'stt',
  },
  {
    title: 'Số tiền đã nạp',
    dataIndex: 'stt',
  },
  {
    title: 'Số câu hỏi hoàn thành/Đăng',
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
    title: 'Số tiền đã rút',
    dataIndex: 'stt',
  },
  {
    title: 'Số câu hỏi nhận/hoàn thành',
    dataIndex: 'stt',
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'stt',
  },
  {
    title: 'Hệ số chia thưởng',
    dataIndex: 'stt',
  },
  {
    title: 'Ảnh LG',
    dataIndex: 'stt',
  },
  {
    title: 'Mô tả LG',
    dataIndex: 'stt',
  },
  {
    title: 'Xem chi tiết',
    dataIndex: 'stt',
  },
  {
    title: 'Mức ưu đãi',
    dataIndex: 'stt',
  },
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class StatisticPromotionInput extends React.Component {

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
        <Card type="inner" title="Thống kê mã Khuyến mãi">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default StatisticPromotionInput;