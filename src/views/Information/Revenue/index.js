import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "Số CH hoàn",
    dataIndex: "stt"
  },
  {
    title: "Số CH bị hủy kèo/B để Quá hạn",
    dataIndex: "stt"
  },
  {
    title: "Doanh thu",
    dataIndex: "stt"
  },
  {
    title: "Từ câu hỏi hoàn thành",
    dataIndex: "stt"
  },
  {
    title: "Phạt",
    dataIndex: "stt"
  },
  {
    title: "Thông lượng",
    dataIndex: "stt"
  },
  {
    title: "Giá TB câu hỏi",
    dataIndex: "stt"
  },
  {
    title: "Tổng số tiền SD Khuyến mãi",
    dataIndex: "stt"
  },
  {
    title: "Tổng Khả dụng A",
    dataIndex: "stt"
  },
  {
    title: "Tổng tạm giữ A",
    dataIndex: "stt"
  },
  {
    title: "Tổng khả dụng B",
    dataIndex: "stt"
  },
  {
    title: "Tổng tạm giữ B",
    dataIndex: "stt"
  },
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class RevenueInformation extends React.Component {

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
        <Card type="inner" title="Doanh thu">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default RevenueInformation;