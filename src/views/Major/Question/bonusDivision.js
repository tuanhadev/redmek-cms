import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "HệsốA",
    dataIndex: "stt"
  },
  {
    title: 'HệsốB',
    dataIndex: 'stt',
  },
  {
    title: 'HệsốLớp',
    dataIndex: 'stt',
  },
  {
    title: 'HệsốMôn',
    dataIndex: 'stt',
  },
  {
    title: 'HệsốThờigianđăng',
    dataIndex: 'stt',
  },
  {
    title: 'HệsốThờihạn',
    dataIndex: 'stt',
  },
  {
    title: "HệsốDịchvụ",
    dataIndex: "stt"
  },
  {
    title: 'HệsốTỔNGHỢP',
    dataIndex: 'stt',
  }
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class BonusDivisionQuestion extends React.Component {

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
        <Card type="inner" title="Hệ số chia thưởng chi tiết">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} dataSource={data} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default BonusDivisionQuestion;