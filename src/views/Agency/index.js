import React from "react";
import { Link } from "react-router-dom";
import { Table, Card, Button, message, Popconfirm, Input, Row, Col, Select } from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons';
import moment from 'moment-timezone';
import AgencyService from "../../services/agencyService";
import config from "../../config"

const { Search } = Input;
const { Option } = Select;


const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    width: 60
  },
  {
    title: 'Tên đại lý',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
  },
  {
    title: 'Thành phố',
    dataIndex: 'city',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'created_at',
  },
  {
    title: '',
    dataIndex: 'update',
    width: 60,
    fixed: 'right'
  },
  {
    title: '',
    dataIndex: 'delete',
    width: 60,
    fixed: 'right'
  },
];

class Agency extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      agencys: [],
      typeSearch: "name",
      loading: false,
    }
  }

  componentDidMount = async () => {
    this.getListAgency();
  }

  onChangeSelect = (value) => {
    this.setState({
      typeSearch: value
    })
  }

  getListAgency = async (typeSearch, data) => {
    this.setState({ loading: true });
    try {
      const response = await AgencyService.getListAgency(typeSearch, data);
      const agencys = response.data.map((agency, index) => ({
        key: agency._id, stt: (index + 1), name: agency.name, email: agency.email, phone: agency.phone, address: agency.address, city: agency.city, created_at: moment(agency.created_at).local().format('DD/MM/YYYY'), update: <Link to={`/agency/update/${agency._id}`}><Button title="Chỉnh sửa" type="link"><EditOutlined style={{ fontSize: '23px' }} /></Button></Link>
        , delete: <Popconfirm
          title="Xóa đại lý này khỏi danh sách?"
          onConfirm={() => this.deleteTeacher(agency._id)}
          okText="Xác nhận"
          cancelText="Cancel"
        ><Button title="Xoá" type="link"><DeleteOutlined style={{ fontSize: '23px' }} /></Button></Popconfirm>
      }))
      this.setState({
        agencys,
        loading: false
      })
    } catch (error) {
      console.log(error);
    }
  }

  deleteTeacher = async (id) => {
    try {
      await AgencyService.deleteAgency(id);
      message.success("Thành công");
      this.getListAgency();
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  render() {
    const { agencys, loading } = this.state;
    return (
      <div>
        <Card type="inner" title="Danh sách đại lý" extra={<Link to="/agency/add"><Button className="d-flex align-items-center" type="primary"><PlusOutlined /><span>Thêm đại lý</span></Button></Link>}>
          <Row className="my-3 search">
            <Col lg={10} md={12} sm={24}>
              <Input.Group compact>
                <Select onChange={this.onChangeSelect} style={{ width: '25%' }} defaultValue="name">
                  <Option value="name">Tên</Option>
                  <Option value="email">Email</Option>
                  <Option value="city">Thành phố</Option>
                  <Option value="phone">Điện thoại</Option>
                  <Option value="address">Địa chỉ</Option>
                </Select>
                <Search
                  style={{ width: '75%' }}
                  placeholder="Nhập từ khoá"
                  enterButton="Tìm kiếm"
                  onSearch={value => this.getListAgency(this.state.typeSearch, value)}
                  loading={loading}
                />
              </Input.Group>
            </Col>
          </Row>
          <Table pagination={{ defaultPageSize: config.limit, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }} columns={columns} dataSource={agencys} scroll={{ x: 900 }} loading={loading} />
        </Card>
      </div>
    );
  }
}

export default Agency;