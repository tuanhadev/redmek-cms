import React from "react";
import { Table, Card } from 'antd';
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
    dataIndex: 'email',
  },
  {
    title: 'Tác dụng',
    dataIndex: 'phone',
  },
  {
    title: 'Giá trị',
    dataIndex: 'address',
  },
  {
    title: 'Bắt đầu',
    dataIndex: 'city',
  },
  {
    title: 'Kết thúc',
    dataIndex: 'created_at',
  },
  {
    title: 'Số lần cho mỗi người',
    dataIndex: 'created_at',
  },
  {
    title: 'Ảnh',
    dataIndex: 'created_at',
  },
  {
    title: 'Dịch vụ',
    dataIndex: 'created_at',
  },
  {
    title: 'Lớp',
    dataIndex: 'created_at',
  },
  {
    title: 'Môn',
    dataIndex: 'created_at',
  },
  {
    title: 'Đối tượng(Số tiền A đã nạp)',
    dataIndex: 'created_at',
  },
  {
    title: 'Số câu hỏi đã hoàn thành',
    dataIndex: 'created_at',
  },
  {
    title: 'Tạo mới',
    dataIndex: 'created_at',
  },
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
          <Table pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default PromotionInput;