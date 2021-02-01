import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "Lớp",
    dataIndex: "stt"
  },
  {
    title: "Môn",
    dataIndex: "stt"
  },
  {
    title: "Chương",
    dataIndex: "stt"
  },
  {
    title: "Tên bài",
    dataIndex: "stt"
  },
  {
    title: "Ngày đăng",
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
    title: "Xem file",
    dataIndex: "stt"
  },
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class LibraryOther extends React.Component {

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
        <Card type="inner" title="Thư viện Redmek">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default LibraryOther;