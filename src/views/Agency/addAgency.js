import React from "react";
import { Form, Input, Button, Card, Typography, message, Select } from 'antd';
import { inject, observer } from 'mobx-react';
import Map from "../Map";
import AgencyService from "../../services/agencyService";
import constantVariable from "../../constant";

const { Text } = Typography;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

@inject('mapStore')
@observer
class AddAgency extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingAddAgency: false
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  onChangeSelect = (type, value) => {
    this.setState({
      [type]: value.value
    })
  }

  onFinish = async () => {
    const { name, email, password, address, phone, city } = this.state;
    const { geo_lat, geo_lng } = this.props.mapStore;
    if (!name || !email || !password || !address || !city || !phone || !geo_lat || !geo_lng) {
      message.warning('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if (!name.trim() || !email.trim() || !password.trim() || !address.trim() || !city.trim() || !phone.trim()) {
      message.warning('Vui lòng điền đầy đủ thông tin');
      return;
    }
    this.setState({ loadingAddAgency: true });
    try {
      const data = { name, email, password, address, city, phone, geo_lat, geo_lng };
      await AgencyService.addAgency(data);
      this.setState({ loadingAddAgency: false, modalAdd: false }, () => {
        message.success('Thành công');
        this.props.history.push("/agency");
      });
    } catch (error) {
      this.setState({ loadingAddAgency: false });
      message.error(error.response.data.message);
    }
  };

  render() {
    const { loadingAddAgency } = this.state;
    const { geo_lat, geo_lng } = this.props.mapStore;
    return (
      <div className="add_agency">
        <Card type="inner" title="Thêm đại lý" actions={[
          <Button type="primary" htmlType="submit" onClick={this.onFinish} loading={loadingAddAgency}>
            Thêm đại lý
          </Button>
        ]}>
          <Form {...layout} name="nest-messages">
            <Form.Item
              label={<span>Tên đại lý (<Text type="danger">*</Text>)</span>}
            >
              <Input onChange={this.handleChange("name")} />
            </Form.Item>
            <Form.Item
              label={<span>Email (<Text type="danger">*</Text>)</span>}
            >
              <Input type="email" onChange={this.handleChange("email")} />
            </Form.Item>
            <Form.Item
              label={<span>Mật khẩu (<Text type="danger">*</Text>)</span>}
            >
              <Input.Password onChange={this.handleChange("password")} />
            </Form.Item>
            <Form.Item
              label={<span>Địa chỉ (<Text type="danger">*</Text>)</span>}
            >
              <Input onChange={this.handleChange("address")} />
            </Form.Item>
            <Form.Item
              label={<span>Thành phố (<Text type="danger">*</Text>)</span>}
            >
              <Select
                showSearch
                onChange={(type, value) => this.onChangeSelect("city", value)}
                placeholder="Chọn thành phố"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  constantVariable.listProvince.map((item, idx) => (<Option key={idx} value={item}>{item}</Option>))
                }
              </Select>
            </Form.Item>
            <Form.Item
              label={<span>Số điện thoại (<Text type="danger">*</Text>)</span>}
            >
              <Input type="text" onChange={this.handleChange("phone")} />
            </Form.Item>
            <Form.Item
              label={<span>Longitude (<Text type="danger">*</Text>)</span>}
            >
              <Input type="number" disabled={true} value={geo_lng ? geo_lng : ""} />
            </Form.Item>
            <Form.Item
              label={<span>Latitude (<Text type="danger">*</Text>)</span>}
            >
              <Input type="number" disabled={true} value={geo_lat ? geo_lat : ""} />
            </Form.Item>
            <Map
              markerPosition={null}
              isMarkerShown={false}
            />
          </Form>
        </Card>
      </div>
    );
  }
}

export default AddAgency;