import React from "react";
import { Form, Input, Button, Row, Col, Card, Layout, notification } from 'antd';
import { Redirect } from "react-router-dom";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
//toast
import managerService from "../../../services/managerService";
import config from "../../../config";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  onFinish = async (values) => {
    try {
      this.setState({
        loading: true
      })
      const response = await managerService.login(values);
      localStorage.setItem("access_token", response.token);
      localStorage.setItem("name", response.admin.name);
      window.location.reload();
    } catch (error) {
      this.setState({
        loading: false
      }, () => {
        notification['error']({
          message: 'Cảnh báo',
          description: error.response.data.message,
          placement: 'bottomRight',
          duration: config.duration
        });
      })
    }
  };

  render() {
    const { loading } = this.state;
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      return <Redirect to="/ti-le" />
    }
    return (
      <Layout id="login" className="layout container" style={{ justifyContent: "center" }}>
        <div style={{ width: "100%" }} className="site-card-wrapper">
          <Row justify="center" align="middle">
            <Col span={20}>
              <div className="card-group">
                <Card className="card-1" style={{ flex: 1 }} title="ĐĂNG NHẬP" hoverable>
                  <Form
                    name="basic"
                    onFinish={(values) => this.onFinish(values)}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: '* Vui lòng điền vào trường này!',
                        },
                      ]}
                    >
                      <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: '* Vui lòng điền vào trường này!',
                        },
                      ]}
                    >
                      <Input.Password prefix={<KeyOutlined />} placeholder="Mật khẩu" />
                    </Form.Item>

                    <Form.Item {...this.tailLayout}>
                      <Button block key="submit" loading={loading} type="primary" htmlType="submit">Đăng nhập</Button>
                    </Form.Item>
                  </Form>
                </Card>
                <Card className="card-2" style={{ flex: 1, background: "#20a8d8", width: "100%" }}>
                  <img style={{ maxWidth: "50%" }} alt="logo" src={require("../../../assets/img/logoapp.svg")} />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Layout >
    );
  }
}

export default Login;
