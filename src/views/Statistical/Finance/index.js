import React from "react";
import { Table, Card, Tabs } from 'antd';
import config from "../../../config";

const { TabPane } = Tabs;

const columnsRechargeAndWithdraw = [
  {
    title: "",
    children: [
      {
        title: '',
        dataIndex: 'stt',
      },
      {
        title: 'Đăng ký',
        dataIndex: 'stt',
      },
      {
        title: 'Kích hoạt',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Tổng số",
    children: [
      {
        title: 'Tổng người nạp tiền',
        dataIndex: 'stt',
      },
      {
        title: 'Số lần nạp',
        dataIndex: 'stt',
      },
      {
        title: 'Số tiền nạp',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Thông tin Sử dụng",
    children: [
      {
        title: 'Tổng số câu hỏi',
        dataIndex: 'stt',
      },
      {
        title: 'Tổng số CH đã có B',
        dataIndex: 'stt',
      },
      {
        title: 'Tổng số tiền A trả cho CH',
        dataIndex: 'stt',
      },
      {
        title: 'Tổng số tiền khuyến mãi A đã dùng',
        dataIndex: 'stt',
      },
      {
        title: 'Tổng số tiền B nhận có hệ số',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Tổng số rút tiền",
    children: [
      {
        title: 'Tổng người rút tiền',
        dataIndex: 'stt',
      },
      {
        title: 'Số lần rút',
        dataIndex: 'stt',
      },
      {
        title: 'Số tiền rút',
        dataIndex: 'stt',
      }
    ]
  }
];

const columnsFinance = [
  {
    title: "A",
    children: [
      {
        title: 'Tổng số tiền QC (M)',
        dataIndex: 'stt1',
      }
    ]
  },
  {
    title: "B",
    children: [
      {
        title: 'Đăng ký',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "C",
    children: [
      {
        title: 'Kích hoạt',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "D",
    children: [
      {
        title: 'Tổng người nạp tiền',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "E",
    children: [
      {
        title: 'Số tiền nạp',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "F",
    children: [
      {
        title: 'Tổng số ngày tồn tại',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "G1",
    children: [
      {
        title: 'Số người nạp mới',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "G2",
    children: [
      {
        title: 'Hệ số N',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "H",
    children: [
      {
        title: '1 paid user nạp trong 2 ngày',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "I",
    children: [
      {
        title: 'Phần trăm rời bỏ (z)',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "J",
    children: [
      {
        title: 'Phần trăm cũ rời bỏ',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "K",
    children: [
      {
        title: 'Tỉ lệ tiền Redmak nhận',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "L",
    children: [
      {
        title: 'Tổng số tiền A trả',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "M",
    children: [
      {
        title: 'Hệ số e',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "N",
    children: [
      {
        title: 'Tổng số tiền khuyễn mãi A đã dùng',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "O",
    children: [
      {
        title: 'Hệ số K',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "P",
    children: [
      {
        title: 'Tổng số tiền B được cộng vào TK',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "Q",
    children: [
      {
        title: 'Hệ số R',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "R",
    children: [
      {
        title: 'Tổng số tiền B rút',
        dataIndex: 'stt',
      }
    ]
  },
  {
    title: "S",
    children: [
      {
        title: 'Hệ số F',
        dataIndex: 'stt',
      }
    ]
  },
];

const data = [
  {
    key: 1,
    stt: 1
  }
];

class FinanceStatiscal extends React.Component {

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
        <Card type="inner" title="Tài chính">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Số liệu Nạp-rút" key="1">
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsRechargeAndWithdraw} dataSource={data} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
            <TabPane tab="Số liệu Tài chính" key="2">
              <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columnsFinance} dataSource={data} scroll={{ x: 900 }} loading={loading} />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default FinanceStatiscal;