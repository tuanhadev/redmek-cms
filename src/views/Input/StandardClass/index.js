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
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0) {
        obj.props.rowSpan = 3;
      }
      if (index === 1) {
        obj.props.rowSpan = 0;
      }
      if (index === 2) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  },
  {
    title: 'Tiêu chí',
    dataIndex: 'criteria',
  },
  {
    title: 'Giá trị',
    dataIndex: 'value',
  },
  {
    title: 'Thứ tự phân loại',
    dataIndex: 'order',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0) {
        obj.props.rowSpan = 3;
      }
      if (index === 1) {
        obj.props.rowSpan = 0;
      }
      if (index === 2) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
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
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0) {
        obj.props.rowSpan = 3;
      }
      if (index === 1) {
        obj.props.rowSpan = 0;
      }
      if (index === 2) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  },
  {
    title: 'Tiêu chí',
    dataIndex: 'criteria',
  },
  {
    title: 'Giá trị',
    dataIndex: 'value',
  },
  {
    title: 'Thứ tự phân loại',
    dataIndex: 'order',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0) {
        obj.props.rowSpan = 3;
      }
      if (index === 1) {
        obj.props.rowSpan = 0;
      }
      if (index === 2) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  }
];

const data = [
  {
    stt: 1,
    name: "Chì",
    criteria: "Số bài hoàn thành ít nhất",
    value: "",
    order: "Chỉ cần dính 1 trong 2 tiêu chí"
  },
  {
    stt: 2,
    name: "",
    criteria: "Nhắc nhở (YC gửi lại)/Hoàn thành",
    value: "5-100%",
    order: ""
  },
  {
    stt: 3,
    name: "",
    criteria: "Quá hạn+Hủy kèo/Hoàn thành",
    value: "15-100%",
    order: ""
  }
]

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
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsA} dataSource={data} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
            <TabPane tab="Phân loại B" key="2">
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsB} dataSource={data} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
          </Tabs>

        </Card>
      </div>
    );
  }
}

export default StandardClassInput;