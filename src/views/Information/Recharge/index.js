import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "",
    children: [
      {
        title: '',
        dataIndex: 'stt1',
      },
      {
        title: 'Đăng ký',
        dataIndex: 'stt',
      },
      {
        title: 'Kích hoạt',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Tổng số",
    children: [
      {
        title: 'Tổng người nạp tiền',
        dataIndex: 'stt',
      },
      {
        title: 'Số lần nạp',
        dataIndex: 'stt',
      },
      {
        title: 'Số tiền nạp',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Nạp qua TKNH + Ví + Khác",
    children: [
      {
        title: 'Tổng người nạp tiền',
        dataIndex: 'stt',
      },
      {
        title: 'Số lần nạp',
        dataIndex: 'stt',
      },
      {
        title: 'Số tiền nạp',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Nạp qua Thẻ cào",
    children: [
      {
        title: 'Tổng người nạp tiền',
        dataIndex: 'stt',
      },
      {
        title: 'Số lần nạp',
        dataIndex: 'stt',
      },
      {
        title: 'Số tiền nạp',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Nạp qua Google Play",
    children: [
      {
        title: 'Tổng người nạp tiền',
        dataIndex: 'stt',
      },
      {
        title: 'Số lần nạp',
        dataIndex: 'stt',
      },
      {
        title: 'Số tiền nạp',
        dataIndex: 'stt',
      }
    ]
  }
];

const data = [
  {
    key: 1,
    stt1: 1
  }
];

class RechargeInformation extends React.Component {

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
        <Card type="inner" title="Nạp tiền">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default RechargeInformation;