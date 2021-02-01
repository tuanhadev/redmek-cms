import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "Hệ số A",
    dataIndex: "stt"
  },
  {
    title: 'Hệ số B',
    dataIndex: 'name',
  },
  {
    title: 'Hệ số lớp',
    dataIndex: 'email',
  },
  {
    title: 'Hệ số môn',
    dataIndex: 'phone',
  },
  {
    title: 'Hệ số thời gian đăng',
    dataIndex: 'address',
  },
  {
    title: 'Hệ số thời hạn',
    dataIndex: 'city',
  },
  {
    title: 'Hệ số dịch vụ',
    dataIndex: 'created_at',
  }
];

class RatioInput extends React.Component {

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
        <Card type="inner" title="Tỉ lệ chia thưởng">
          <Table pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default RatioInput;