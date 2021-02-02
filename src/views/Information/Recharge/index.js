import React from "react";
import { Table, Card } from 'antd';
import { Link } from "react-router-dom";
import config from "../../../config";

const columns1 = [
  {
    title: "",
    children: [
      {
        title: '',
        dataIndex: 'stt',
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

const columns2 = [
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
    dataIndex: "stt1"
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt1: <Link to={`/nap-tien/cac-lan-nap-truoc`}>Danh sách</Link>
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
        <Card type="inner" title="Nạp tiền" className="mb-5">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns1} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
        <Card type="inner" title="Nạp tiền chi tiết">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns2} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default RechargeInformation;