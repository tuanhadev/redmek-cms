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
    title: 'Tiêu chí',
    dataIndex: 'email',
  },
  {
    title: 'Giá trị',
    dataIndex: 'phone',
  },
  {
    title: 'Thứ tự phân loại',
    dataIndex: 'address',
  }
];

class StandardClassInput extends React.Component {

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
        <Card type="inner" title="Tiêu chuẩn hạng">
          <Table pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default StandardClassInput;