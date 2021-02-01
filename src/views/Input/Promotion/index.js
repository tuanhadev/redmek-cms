import React from "react";
import { Table, Card } from 'antd';
import { Link } from "react-router-dom";
import config from "../../../config";

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
        <Card type="inner" title="Danh sách khuyến mãi">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default PromotionInput;