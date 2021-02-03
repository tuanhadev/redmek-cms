import React from "react";
import { Table, Card, Form, Upload, Button, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import config from "../../../config";

const { Text } = Typography;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

const columns = [
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
  },
  {
    title: "Thống kê",
    dataIndex: "stt1"
  },
];

const data = [
  {
    key: 1,
    stt: 1,
    stt1: <Link to={`/game/chi-tiet-game`}>Xem chi tiết</Link>,
    stt2: <Button danger type="text"> Xóa </Button>
  }
];

class GameOther extends React.Component {

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
        <Card type="inner" className="mb-5" title="Upload Game mới" actions={[
          <Button type="primary" htmlType="submit">
            Tạo mới
          </Button>
        ]}>
          <Form {...layout} name="nest-messages">
            <Form.Item
              name="upload"
              label="Chọn ảnh"
            >
              <Upload >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label={<span>Ký hiệu (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span>Tên Game (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span>Số câu hỏi (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
          </Form>
        </Card>
        <Card type="inner" title="Danh sách Game">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default GameOther;