import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns1 = [
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

const columns2 = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: 'Tên người',
    dataIndex: 'stt',
  },
  {
    title: 'Thời gian đặt',
    dataIndex: 'stt',
  },
  {
    title: "Giá đặt",
    dataIndex: "stt"
  },
  {
    title: 'Duy trì trước hạn',
    dataIndex: 'stt',
  },
  {
    title: 'Rate',
    dataIndex: 'stt',
  },
  {
    title: 'Hạng',
    dataIndex: 'stt',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'stt',
  },
];

const columns3 = [
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
        <Card type="inner" className="mb-5" title="Xem chi tiết Câu hỏi">
          <Table className="mb-5" bordered pagination={false} dataSource={data} columns={columns1} scroll={{ x: 900 }} loading={loading} />
          <Card type="inner" className="mb-5" title="Nội dung câu hỏi">
          </Card>
          <Card type="inner" className="mb-5" title="Nội dung Lời giải">
          </Card>
        </Card>
        <Card type="inner" className="mb-5" title="Danh sách đề xuất">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} dataSource={data} columns={columns2} scroll={{ x: 900 }} loading={loading} />
        </Card>
        <Card type="inner" title="Nội dung Tin nhắn">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} dataSource={data} columns={columns3} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default DetailQuestion;