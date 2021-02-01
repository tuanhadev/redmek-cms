import React from "react";
import { Table, Card, Tabs } from 'antd';
import config from "../../../config";

const { TabPane } = Tabs;

const columnsSubject = [
  {
    title: "",
    dataIndex: "stt1"
  },
  {
    title: "Toán",
    dataIndex: "stt"
  },
  {
    title: "Vật lý",
    dataIndex: "stt"
  },
  {
    title: "Hóa học",
    dataIndex: "stt"
  },
  {
    title: "Sinh học",
    dataIndex: "stt"
  },
  {
    title: "Tiếng Anh",
    dataIndex: "stt"
  },
  {
    title: "KHXH",
    dataIndex: "stt"
  },
  {
    title: "Khác",
    dataIndex: "stt"
  },
  {
    title: "Tổngsố",
    dataIndex: "stt"
  },
  {
    title: "%",
    dataIndex: "stt"
  },
  {
    title: "Tổng từ 1-11-2020",
    dataIndex: "stt"
  },
  {
    title: "% từ 1-11",
    dataIndex: "stt"
  },
  {
    title: "Hôm nay",
    dataIndex: "stt"
  },
  {
    title: "% Hôm nay",
    dataIndex: "stt"
  }
];

const columnsTime = [
  {
    title: "Thời gian đăng",
    dataIndex: "stt1"
  },
  {
    title: "0:00 – 1:00",
    dataIndex: "stt"
  },
  {
    title: "1:00 – 2:00",
    dataIndex: "stt"
  },
  {
    title: "2:00 – 3:00",
    dataIndex: "stt"
  },
  {
    title: "3:00 – 4:00",
    dataIndex: "stt"
  },
  {
    title: "4:00 – 5:00",
    dataIndex: "stt"
  },
  {
    title: "5:00 – 6:00",
    dataIndex: "stt"
  },
  {
    title: "6:00 – 7:00",
    dataIndex: "stt"
  },
  {
    title: "7:00 – 8:00",
    dataIndex: "stt"
  },
  {
    title: "8:00 – 9:00",
    dataIndex: "stt"
  },
  {
    title: "9:00 – 10:00",
    dataIndex: "stt"
  },
  {
    title: "10:00 – 11:00",
    dataIndex: "stt"
  },
  {
    title: "11:00 – 12:00",
    dataIndex: "stt"
  },
  {
    title: "12:00 – 13:00",
    dataIndex: "stt"
  }
];

const data = [
  {
    key: 1,
    stt1: 1
  }
];

class MetricQuestionStatiscal extends React.Component {

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
        <Card type="inner" title="Số liệu câu hỏi">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Thông tin câu hỏi theo Môn-Lớp" key="1">
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsSubject} dataSource={data} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
            <TabPane tab="Thông tin câu hỏi theo Thời gian đăng- Thời hạn - Trạng thái" key="2">
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsTime} dataSource={data} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default MetricQuestionStatiscal;