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
class UpdateAgency extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadingUpdateAgency: false
    }
  }

  componentDidMount = async () => {
    this.getAgencyById();
  }

  getAgencyById = async () => {
    try {
      const { id } = this.props.match.params;
      const response = await AgencyService.getAgencyById(id);
      const { name, address, phone, city, geo_lat, geo_lng } = response;
      this.props.mapStore.setGeoLat(geo_lat);
      this.props.mapStore.setGeoLng(geo_lng);
      this.setState({ name, address, phone, city, loading: false });
    } catch (error) {
      console.log(error);
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
    const { name, address, phone, city } = this.state;
    const { geo_lat, geo_lng } = this.props.mapStore;
    if (!name || !address || !phone || !city) {
      message.warning('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if (!name.trim() || !address.trim() || !phone.trim() || !city.trim()) {
      message.warning('Vui lòng điền đầy đủ thông tin');
      return;
    }
    this.setState({ loadingUpdateAgency: true });
    try {
      const dataUpdate = { name, address, phone, city };
      const { id } = this.props.match.params;
      await AgencyService.editAgency(id, { ...dataUpdate, geo_lat, geo_lng });
      this.setState({ loadingUpdateAgency: false }, () => {
        message.success('Thành công');
        this.getAgencyById();
      });
    } catch (error) {
      this.setState({ loadingUpdateAgency: false });
      message.error(error.response.data.message);
    }
  };

  render() {
    const { loadingUpdateAgency, loading, name, address, phone, city } = this.state;
    const { geo_lat, geo_lng } = this.props.mapStore;
    return (
      <div>
        <Card type="inner" title="Chỉnh sửa đại lý" loading={loading} actions={[
          <Button type="primary" htmlType="submit" onClick={this.onFinish} loading={loadingUpdateAgency}>
            Chỉnh sửa đại lý
        </Button>
        ]}>
          <Form {...layout} name="nest-messages">
            <Form.Item
              label={<span>Tên đại lý (<Text type="danger">*</Text>)</span>}
            >
              <Input value={name ? name : ""} onChange={this.handleChange("name")} />
            </Form.Item>
            <Form.Item
              label={<span>Địa chỉ (<Text type="danger">*</Text>)</span>}
            >
              <Input value={address ? address : ""} onChange={this.handleChange("address")} />
            </Form.Item>
            <Form.Item
              label={<span>Thành phố (<Text type="danger">*</Text>)</span>}
            >
              <Select
                value={city ? city : ""}
                showSearch
                onChange={(type, value) => this.onChangeSelect("city", value)}
                placeholder="Chọn thành phố"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value={""}>Chọn thành phố</Option>
                {
                  constantVariable.listProvince.map((item, idx) => (<Option key={idx} value={item}>{item}</Option>))
                }
              </Select>
            </Form.Item>
            <Form.Item
              label={<span>Số điện thoại (<Text type="danger">*</Text>)</span>}
            >
              <Input type="text" value={phone ? phone : ""} onChange={this.handleChange("phone")} />
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
              isMarkerShown={true}
            />
          </Form>
        </Card>
      </div>
    );
  }
}

export default UpdateAgency;