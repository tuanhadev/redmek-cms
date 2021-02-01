import React from "react";
import { Table, Card } from 'antd';
import config from "../../../config";

const columns = [
  {
    title: "Hệ số A",
    colSpan: 2,
    dataIndex: "coefficientAName"
  },
  {
    title: "Hệ số A",
    colSpan: 0,
    dataIndex: "coefficientAValue"
  },
  {
    title: 'Hệ số B',
    colSpan: 2,
    dataIndex: 'coefficientBName',
  },
  {
    title: 'Hệ số B',
    colSpan: 0,
    dataIndex: 'coefficientBValue',
  },
  {
    title: 'Hệ số lớp',
    colSpan: 2,
    dataIndex: 'coefficientClassName',
  },
  {
    title: 'Hệ số lớp',
    colSpan: 0,
    dataIndex: 'coefficientClassValue',
  },
  {
    title: 'Hệ số môn',
    colSpan: 2,
    dataIndex: 'coeffcientSubjectName',
  },
  {
    title: 'Hệ số môn',
    colSpan: 0,
    dataIndex: 'coeffcientSubjectValue',
  },
  {
    title: 'Hệ số thời gian đăng',
    colSpan: 2,
    dataIndex: 'cofficientTimeName',
  },
  {
    title: 'Hệ số thời gian đăng',
    colSpan: 0,
    dataIndex: 'cofficientTimeValue',
  },
  {
    title: 'Hệ số thời hạn',
    colSpan: 2,
    dataIndex: 'cofficientTermName',
  },
  {
    title: 'Hệ số thời hạn',
    colSpan: 0,
    dataIndex: 'cofficientTermValue',
  },
  {
    title: 'Hệ số dịch vụ',
    colSpan: 2,
    dataIndex: 'cofficientServiceName',
  },
  {
    title: 'Hệ số dịch vụ',
    colSpan: 0,
    dataIndex: 'cofficientServiceValue',
  }
];

const data = [
  {
    key: 1,
    coefficientAName: 'Vàng',
    coefficientAValue: 0.95,
    coefficientBName: "Vàng",
    coefficientBValue: 0.95,
    coefficientClassName: 'Lớp 1-5',
    coefficientClassValue: 0.95,
    coeffcientSubjectName: 'Toán',
    coeffcientSubjectValue: 0.95,
    cofficientTimeName: '23:00 – 7:00',
    cofficientTimeValue: 0.95,
    cofficientTermName: '2h',
    cofficientTermValue: 0.95,
    cofficientServiceName: 'Câu hỏi RM',
    cofficientServiceValue: 0.95,
  }
];
class RatioInput extends React.Component {

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
        <Card type="inner" title="Tỉ lệ chia thưởng">
          <Table bordered pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={data} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default RatioInput;