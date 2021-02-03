import React from "react";
import { Table, Card, Form, Button, Input, Typography, Select } from 'antd';
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
    title: "ID",
    dataIndex: "stt1"
  },
  {
    title: "Tên",
    dataIndex: "stt"
  },
  {
    title: "A/B",
    dataIndex: "stt"
  },
  {
    title: "Định danh",
    dataIndex: "stt"
  },
  {
    title: "Email",
    dataIndex: "stt"
  },
  {
    title: "Điện thoại",
    dataIndex: "stt"
  },
  {
    title: "Facebook",
    dataIndex: "stt"
  },
  {
    title: "TK Google",
    dataIndex: "stt"
  },
  {
    title: "Tỉnh",
    dataIndex: "stt"
  },
  {
    title: "Ngày đăng ký",
    dataIndex: "stt"
  },
  {
    title: "Số ngày đăng ký",
    dataIndex: "stt"
  },
  {
    title: "Kích hoạt",
    dataIndex: "stt"
  },
  {
    title: "Hạng",
    dataIndex: "stt"
  },
  {
    title: "Số CH đăng / nhận",
    dataIndex: "stt"
  },
  {
    title: "Số Câu hỏi Hoàn thành",
    dataIndex: "stt"
  },
  {
    title: "Số lần bị nhắc nhở",
    dataIndex: "stt"
  },
  {
    title: "Danh sách câu hỏi",
    dataIndex: "stt"
  },
  {
    title: "Rate",
    dataIndex: "stt"
  },
  {
    title: "Thiết bị",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đã nạp",
    dataIndex: "stt"
  },
  {
    title: "Số tiền đã rút",
    dataIndex: "stt"
  },
  {
    title: "Tài khoản có liên quan",
    dataIndex: "stt2"
  },
  {
    title: "Thông báo từ Redmek",
    dataIndex: "stt"
  },
  {
    title: "Nạp tiền",
    dataIndex: "stt3"
  },
  {
    title: "Tình trạng",
    dataIndex: "stt4"
  },
  {
    title: "Khóa TK/ Mở khóa",
    dataIndex: "stt5"
  },
  {
    title: "Xóa TK",
    dataIndex: "stt6"
  },
];

const data = [
  {
    key: 1,
    stt: 1,
    stt2: <Link to={`/tai-khoan/tai-khoan-lien-quan`}>Xem danh sách</Link>,
    stt1: <Link to={`/tai-khoan/danh-sach-cau-hoi`}>Xem danh sách</Link>,
    stt3: <Button type="primary">Gửi</Button>,
    stt4: <Button type="primary">Active</Button>,
    stt5: <Button danger type="text">Khóa</Button>,
    stt6: <Button danger type="text">Xóa</Button>
  }
];

class AccountMajor extends React.Component {

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
        <Card type="inner" title=" Danh sách Tài khoản">
          <Card className="mb-3" type="inner" title="Bộ lọc" actions={[
            <Button type="primary" htmlType="submit">
              Tìm kiếm
          </Button>
          ]}>
            <Form {...layout} name="nest-messages">
              <Form.Item
                label={<span>Thiết bị (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  placeholder="Chọn Thiết bị"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">Android</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<span> A/B (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  placeholder="Chọn A/B"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">A</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<span> Loại định danh (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  placeholder="Loại định danh"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">Email ĐKý</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<span> Hạng (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  onChange={this.onChangeSelect}
                  placeholder="Chọn Hạng"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">Vàng</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<span> Tổng nạp (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  onChange={this.onChangeSelect}
                  placeholder="Chọn Tổng nạp"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">Tổng nạp</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={<span> Số dư (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  onChange={this.onChangeSelect}
                  placeholder="Chọn Số dư"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ minWidth: 200 }}
                >
                  <Option key={"SEDAN"} value="SEDAN">Số dư</Option>
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

export default AccountMajor;