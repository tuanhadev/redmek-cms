import React from "react";
import { Table, Card, Row, Col, Select, Input, Button, Form, Typography } from 'antd';
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

const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: "STT",
    dataIndex: "stt"
  },
  {
    title: 'Tên mã',
    dataIndex: 'stt',
  },
  {
    title: 'Loại',
    dataIndex: 'stt',
  },
  {
    title: 'Tác dụng',
    dataIndex: 'stt',
  },
  {
    title: 'Giá trị',
    dataIndex: 'stt',
  },
  {
    title: 'Bắt đầu',
    dataIndex: 'stt',
  },
  {
    title: 'Kết thúc',
    dataIndex: 'stt',
  },
  {
    title: 'Số lần cho mỗi người',
    dataIndex: 'stt',
  },
  {
    title: 'Ảnh',
    dataIndex: 'stt',
  },
  {
    title: 'Dịch vụ',
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
    title: 'Đối tượng(Số tiền A đã nạp)',
    dataIndex: 'stt',
  },
  {
    title: 'Số câu hỏi đã hoàn thành',
    dataIndex: 'stt',
  },
  {
    title: 'Tạo mới',
    dataIndex: 'stt',
  },
  {
    title: 'Tình trạng',
    dataIndex: 'stt',
  },
  {
    title: 'Số A đủ DK dùng',
    dataIndex: 'stt',
  },
  {
    title: 'Số lượng mà các A có thể dùng',
    dataIndex: 'stt',
  },
  {
    title: 'Số lượt đã dùng',
    dataIndex: 'stt',
  },
  {
    title: 'Tổng ưu đãi đã dùng',
    dataIndex: 'stt',
  },
  {
    title: 'Danh sách câu hỏi',
    dataIndex: 'listQuestion',
  },
];

const data = [
  {
    key: 1,
    stt: 1,
    listQuestion: <Link to={`/khuyen-mai/danh-sach-cau-hoi`}>Xem danh sách</Link>,
  }
];

class PromotionInput extends React.Component {

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
              label={<span>Tên mã (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span>LOẠI (<Text type="danger">*</Text>)</span>}
            >
              <Select
                showSearch
                placeholder="Chọn LOẠI"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ minWidth: 200 }}
              >
                <Option key={"SEDAN"} value="SEDAN">Tự động</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<span>Tác dụng (<Text type="danger">*</Text>)</span>}
            >
              <Select
                showSearch
                placeholder="Chọn Tác dụng"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ minWidth: 200 }}
              >
                <Option key={"SEDAN"} value="SEDAN">Giảm %</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<span>Giá trị (<Text type="danger">*</Text>)</span>}
            >
              <Input />
            </Form.Item>
          </Form>
        </Card>
        <Card type="inner" title="Danh sách khuyến mãi">
          <Row className="my-3 search">
            <Col lg={10} md={12} sm={24}>
              <Input.Group compact>
                <Select style={{ width: '25%' }} defaultValue="name">
                  <Option value="name">Tên</Option>
                  <Option value="email">Ký hiệu</Option>
                </Select>
                <Search
                  style={{ width: '75%' }}
                  placeholder="Nhập từ khoá"
                  enterButton="Tìm kiếm"
                />
              </Input.Group>
            </Col>
          </Row>
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default PromotionInput;