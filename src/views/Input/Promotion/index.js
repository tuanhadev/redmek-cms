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
    dataIndex: 'name',
  },
  {
    title: 'Loại',
    dataIndex: 'type',
  },
  {
    title: 'Tác dụng',
    dataIndex: 'action',
  },
  {
    title: 'Giá trị',
    dataIndex: 'value',
  },
  {
    title: 'Bắt đầu',
    dataIndex: 'start_at',
  },
  {
    title: 'Kết thúc',
    dataIndex: 'end_at',
  },
  {
    title: 'Số lần cho mỗi người',
    dataIndex: 'numberOfTimes',
  },
  {
    title: 'Ảnh',
    dataIndex: 'image',
  },
  {
    title: 'Dịch vụ',
    dataIndex: 'service',
  },
  {
    title: 'Lớp',
    dataIndex: 'class',
  },
  {
    title: 'Môn',
    dataIndex: 'subject',
  },
  {
    title: 'Đối tượng(Số tiền A đã nạp)',
    dataIndex: 'amountADeposited',
  },
  {
    title: 'Số câu hỏi đã hoàn thành',
    dataIndex: 'numberQuestionComplete',
  },
  {
    title: 'Tạo mới',
    dataIndex: 'createNew',
  },
  {
    title: 'Tình trạng',
    dataIndex: 'createNew',
  },
  {
    title: 'Số A đủ DK dùng',
    dataIndex: 'createNew',
  },
  {
    title: 'Số lượng mà các A có thể dùng',
    dataIndex: 'createNew',
  },
  {
    title: 'Số lượt đã dùng',
    dataIndex: 'createNew',
  },
  {
    title: 'Tổng ưu đãi đã dùng',
    dataIndex: 'createNew',
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