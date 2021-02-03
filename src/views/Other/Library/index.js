import React from "react";
import { Table, Card, Form, Upload, Button, Input, Typography, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import config from "../../../config";
const { Text } = Typography;
const { Option } = Select;

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
    dataIndex: "stt2"
  },
  {
    title: "Xem file",
    dataIndex: "stt1"
  },
];

const data = [
  {
    key: 1,
    stt: 1,
    stt2: <Button type="primary">OK</Button>,
    stt1: <Link to={`/thu-vien/chi-tiet`}>Xem chi tiết</Link>,
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
        <Card type="inner" className="mb-5" title="Tạo tài liệu mới" actions={[
          <Button type="primary" htmlType="submit">
            Tạo mới
          </Button>
        ]}>
          <Form {...layout} name="nest-messages">
            <Form.Item
              name="upload"
              label="Chọn file"
            >
              <Upload >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label={<span>Lớp (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span>Môn (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span>Chương (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span>Tên chương (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
          </Form>
        </Card>
        <Card type="inner" title="Thư viện Redmek">
          <Card className="mb-3" type="inner" title="Bộ lọc" actions={[
            <Button type="primary" htmlType="submit">
              Tìm kiếm
          </Button>
          ]}>
            <Form {...layout} name="nest-messages">
              <Form.Item
                label={<span>Lớp (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  onChange={this.onChangeSelect}
                  placeholder="Chọn Lớp"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">Lớp1 –5</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<span> Môn (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  onChange={this.onChangeSelect}
                  placeholder="Chọn Môn"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">Toán</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<span>Search (<Text type="danger">*</Text>)</span>}
              >
                <Input />
              </Form.Item>
            </Form>
          </Card>
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default LibraryOther;