import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "",
    dataIndex: "stt1"
  },
  {
    title: "Đăng ký",
    dataIndex: "stt"
  },
  {
    title: "Kích hoạt",
    dataIndex: "stt"
  },
  {
    title: "SốTKcósố CH = 0",
    dataIndex: "stt"
  },
  {
    title: "Số TK có số CH=1",
    dataIndex: "stt"
  },
  {
    title: "Số TK có số CH>=2",
    dataIndex: "stt"
  },
  {
    title: "Số TK có số CH hoàn thành = 1",
    dataIndex: "stt"
  },
  {
    title: "SốTKcóSố CH hoàn thành >= 2",
    dataIndex: "stt"
  },
  {
    title: "Số TK có số lần nạp = 0",
    dataIndex: "stt"
  },
  {
    title: "Số TK có số lần nạp = 1",
    dataIndex: "stt"
  },
  {
    title: "Số TK có số lần nạp >=2",
    dataIndex: "stt"
  }
];

const data = [
  {
    key: 1,
    stt1: 1
  }
];

class ComunityStatiscal extends React.Component {

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
        <Card type="inner" title="Cộng đồng">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default ComunityStatiscal;