import React from "react";
import { Table, Card } from 'antd';

import config from "../../../config";

const columns = [
  {
    title: "Thông tin",
    dataIndex: "stt"
  },
  {
    title: "Thông số",
    dataIndex: "stt"
  },
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class DetailLibraryOther extends React.Component {

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
        <Card type="inner" className="mb-5" title="Thông tin chi tiết">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
        <Card type="inner" title="Nội dung tài liệu">

        </Card>
      </div>
    );
  }
}

export default DetailLibraryOther;