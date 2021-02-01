import React from "react";
import { Table, Card, Tabs } from 'antd';
import config from "../../../config";

const { TabPane } = Tabs;

const columnsA = [
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

const columnsB = [
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
          <Tabs defaultActiveKey="1">
            <TabPane tab="Phân loại A" key="1">
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsA} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
            <TabPane tab="Phân loại B" key="2">
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsB} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
          </Tabs>

        </Card>
      </div>
    );
  }
}

export default StandardClassInput;