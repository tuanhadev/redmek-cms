import React from "react";
import { Table, Card, Row, Col, Input, Select, Button } from 'antd';

import config from "../../../config";

const { Option } = Select;
const { Search } = Input;

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
    title: "Thời gian tạo Kết quả Chơi",
    dataIndex: "stt"
  },
  {
    title: "Thao tác",
    dataIndex: "stt1"
  }
];

const data = [
  {
    key: 1,
    stt: 1,
    stt1: <Button danger type="text"> Xóa </Button>
  }
];

class LogDetailGame extends React.Component {

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
        <Card type="inner" className="mb-5" title="Danh sách Game đã chơi" >
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

export default LogDetailGame;