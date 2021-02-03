import React from "react";
import { Table, Card, Button } from 'antd';
import { Link } from "react-router-dom";

import config from "../../../config";

const columns1 = [
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
    dataIndex: "stt2"
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
  }
];

const columns2 = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: "Tên người",
    dataIndex: "stt"
  },
  {
    title: "Định danh",
    dataIndex: "stt"
  },
  {
    title: "Kết quả",
    dataIndex: "stt"
  },
  {
    title: "Thời gian chơi (s)",
    dataIndex: "stt"
  },
  {
    title: "Thứ hạng",
    dataIndex: "stt"
  },
  {
    title: "Thời gian tạo",
    dataIndex: "stt"
  },
  {
    title: "Thao tác",
    dataIndex: "stt2"
  },
  {
    title: "Lịch sử Game",
    dataIndex: "stt1"
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt1: <Link to={`/game/chi-tiet-game/lich-su-game`}>Xem </Link>,
    stt2: <Button danger type="text"> Xóa </Button>
  }
];

class DetailGame extends React.Component {

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
        <Card type="inner" className="mb-5" title="Xem chi tiết Game" >
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns1} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
        <Card type="inner" title="Danh sách Người chơi">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns2} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default DetailGame;