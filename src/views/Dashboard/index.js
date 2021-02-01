import React from "react";
import { Statistic, Card, Row, Col, Spin } from 'antd';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className="site-statistic-demo-card">
        <Spin spinning={this.state.loading}>
          <Row gutter={24} type="flex">
            <Col {...topColResponsiveProps}>
              <Card style={{ minHeight: 150 }}>
                <Statistic
                  title="Thống kê"
                  value={15}
                />
              </Card>
            </Col>
            <Col  {...topColResponsiveProps}>
              <Card style={{ minHeight: 150 }}>
                <Statistic
                  title="Thống kê"
                  value={16}
                />
              </Card>
            </Col>
            <Col  {...topColResponsiveProps}>
              <Card style={{ minHeight: 150 }}>
                <Statistic
                  title="Thống kê"
                  value={17}
                />
              </Card>
            </Col>
            <Col  {...topColResponsiveProps}>
              <Card style={{ minHeight: 150 }}>
                <Statistic
                  title="Thống kê"
                  value={18}
                />
              </Card>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}
