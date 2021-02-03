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
    title: 'ID báo cáo',
    dataIndex: 'stt',
  },
  {
    title: 'Tên câu hỏi',
    dataIndex: 'stt',
  },
  {
    title: 'Lớp',
    dataIndex: 'stt',
  },
  {
    title: 'Môn',
    dataIndex: 'stt',
  },
  {
    title: "Giá chốt",
    dataIndex: "stt"
  },
  {
    title: 'Thời gian đăng',
    dataIndex: 'stt',
  },
  {
    title: 'Thời hạn',
    dataIndex: 'stt',
  },
  {
    title: 'Người hỏi',
    dataIndex: 'stt',
  },
  {
    title: 'Số tiền đã nạp',
    dataIndex: 'stt',
  },
  {
    title: "Số câu hỏi",
    dataIndex: "stt"
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'stt',
  },
  {
    title: 'Người trả lời',
    dataIndex: 'stt',
  },
  {
    title: 'Số tiền đã rút',
    dataIndex: 'stt',
  },
  {
    title: 'Số câu hỏi nhận',
    dataIndex: 'stt',
  },
  {
    title: "Số ngày đăng kí",
    dataIndex: "stt"
  },
  {
    title: 'Người báo cáo',
    dataIndex: 'stt',
  },
  {
    title: 'Thời gian',
    dataIndex: 'stt',
  },
  {
    title: 'Nội dung',
    dataIndex: 'stt',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'stt',
  },
  {
    title: 'Người xử lý',
    dataIndex: 'stt',
  },
  {
    title: 'Xem chi tiết',
    dataIndex: 'stt22',
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt22: <Link to={`/bao-cao/chi-tiet-bao-cao`}>Xem chi tiết</Link>,
  }
];

class ReportMajor extends React.Component {

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
        <Card className="mb-5" type="inner" title="Bộ lọc" actions={[
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
              label={<span> Loại câu hỏi (<Text type="danger">*</Text>)</span>}
            >
              <Select
                showSearch
                onChange={this.onChangeSelect}
                placeholder="Chọn Loại câu hỏi"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ minWidth: 200 }}
              >
                <Option key={"SEDAN"} value="SEDAN">RM</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<span> Thời gian đăng (<Text type="danger">*</Text>)</span>}
            >
              <Select
                showSearch
                onChange={this.onChangeSelect}
                placeholder="Chọn Thời gian đăng"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ minWidth: 200 }}
              >
                <Option key={"SEDAN"} value="SEDAN">Sớm nhất</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<span> Thời hạn (<Text type="danger">*</Text>)</span>}
            >
              <Select
                showSearch
                onChange={this.onChangeSelect}
                placeholder="Chọn Thời hạn"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ minWidth: 200 }}
              >
                <Option key={"SEDAN"} value="SEDAN">Sớm nhất</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<span>Search (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
          </Form>
        </Card>
        <Card type="inner" className="mb-5" title="Danh sách Báo cáo Chờ xử lý">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
        <Card type="inner" title="Danh sách Báo cáo Đã xử lý">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default ReportMajor;