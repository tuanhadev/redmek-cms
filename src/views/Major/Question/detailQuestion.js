import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "Thông tin",
    dataIndex: "stt"
  },
  {
    title: 'Câu hỏi',
    dataIndex: 'stt',
  },
  {
    title: 'Trả lời',
    dataIndex: 'stt',
  }
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class DetailQuestion extends React.Component {

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
        <Card type="inner" title="Xem chi tiết Câu hỏi">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} dataSource={data} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default DetailQuestion;