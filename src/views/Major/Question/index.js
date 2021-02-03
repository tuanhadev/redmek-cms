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
    title: 'Lớp',
    dataIndex: 'stt',
  },
  {
    title: 'Môn',
    dataIndex: 'stt',
  },
  {
    title: 'Giá gợi ý',
    dataIndex: 'stt',
  },
  {
    title: 'Giá chốt',
    dataIndex: 'stt',
  },
  {
    title: 'Mã khuyến mãi',
    dataIndex: 'stt',
  },
  {
    title: "Ảnh",
    dataIndex: "stt"
  },
  {
    title: 'Mô tả',
    dataIndex: 'stt',
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
    title: 'Trạng thái',
    dataIndex: 'stt',
  },
  {
    title: "Người hỏi",
    dataIndex: "stt"
  },
  {
    title: 'Số tiền đã nạp',
    dataIndex: 'stt',
  },
  {
    title: 'Số câu hỏi hoàn thành',
    dataIndex: 'stt',
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
    title: "Số tiền đã rút",
    dataIndex: "stt"
  },
  {
    title: 'Số câu hỏi nhận',
    dataIndex: 'stt',
  },
  {
    title: 'Số ngày đăng kí',
    dataIndex: 'stt',
  },
  {
    title: 'Hệ số chia thưởng',
    dataIndex: 'stt20',
  },
  {
    title: 'Mô tả',
    dataIndex: 'stt',
  },
  {
    title: 'Xem chi tiết',
    dataIndex: 'stt22',
  },
  {
    title: "Duyệt",
    dataIndex: "stt1"
  },
  {
    title: 'Nhắc nhở A',
    dataIndex: 'stt2',
  },
  {
    title: 'Nhắc nhở B',
    dataIndex: 'stt3',
  },
  {
    title: 'Xoá câu hỏi',
    dataIndex: 'stt4',
  },
  {
    title: 'A/B gian lận',
    dataIndex: 'stt5',
  },
  {
    title: 'Ẩn/hiện',
    dataIndex: 'stt6',
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt1: <Button type="primary">Duyệt</Button>,
    stt2: <Button type="primary">Send</Button>,
    stt3: <Button type="primary">Send</Button>,
    stt4: <Button danger type="text">Xóa</Button>,
    stt5: <Button danger type="text">Xử lý</Button>,
    stt6: <Button danger type="text">Hiện</Button>,
    stt22: <Link to={`/cau-hoi/chi-tiet-cau-hoi`}>Xem chi tiết</Link>,
    stt20: <Link to={`/cau-hoi/he-so-chia-thuong`}>75,6%</Link>,
  }
];

class QuestionMajor extends React.Component {

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
        <Card type="inner" title="Danh sách câu hỏi">
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
                label={<span> Trạng thái (<Text type="danger">*</Text>)</span>}
              >
                <Select
                  showSearch
                  onChange={this.onChangeSelect}
                  placeholder="Chọn Trạng thái"
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
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} dataSource={data} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default QuestionMajor;