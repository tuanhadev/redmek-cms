import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "Ký hiệu",
    dataIndex: "stt"
  },
  {
    title: "Tên",
    dataIndex: "stt"
  },
  {
    title: "Số câu hỏi",
    dataIndex: "stt"
  },
  {
    title: "Thời gian tạo",
    dataIndex: "stt"
  },
  {
    title: "Số ngày",
    dataIndex: "stt"
  },
  {
    title: "Trạng thái",
    dataIndex: "stt"
  },
  {
    title: "Thao tác",
    dataIndex: "stt"
  },
  {
    title: "Số người chơi",
    dataIndex: "stt"
  },
  {
    title: "Tổng mã KM đã tặng",
    dataIndex: "stt"
  },
  {
    title: "Trung bình",
    dataIndex: "stt"
  },
  {
    title: "Thống kê",
    dataIndex: "stt"
  },
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class GameOther extends React.Component {

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
        <Card type="inner" title="Danh sách Game">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default GameOther;