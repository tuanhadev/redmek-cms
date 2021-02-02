import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "Ngày",
    dataIndex: "stt"
  },
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "Tên",
    dataIndex: "stt"
  },
  {
    title: "Định danh",
    dataIndex: "stt"
  },
  {
    title: "Số tiền nạp",
    dataIndex: "stt"
  },
  {
    title: "Kênh nạp",
    dataIndex: "stt"
  },
  {
    title: "Thời gian",
    dataIndex: "stt"
  },
  {
    title: "Người thực hiện",
    dataIndex: "stt"
  },
  {
    title: "Trạng thái",
    dataIndex: "stt"
  },
  {
    title: "Lần nạp thứ",
    dataIndex: "stt"
  },
  {
    title: "Tổng tiền đã nạp",
    dataIndex: "stt"
  },
  {
    title: "Danh sách các lần nạp trước",
    dataIndex: "stt"
  }
];

const data = [
  {
    key: 1,
    stt: 1,
  }
];

class RechargeBefore extends React.Component {

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
        <Card type="inner" title="Danh sách Nạp tiền chi tiết">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default RechargeBefore;