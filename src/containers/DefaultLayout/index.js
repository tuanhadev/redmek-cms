import React, { Suspense } from "react";
import { Layout, Menu, Breadcrumb, Modal, Button, Dropdown, Avatar, Drawer } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import routes from "../../routes";
import navigation from "../../_nav";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Page404 from "../../views/Pages/Page404";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      visible: false,
      visibleDrawer: false,
      loading: false,
      collapsedWidth: 80,
      defaultSelectedKeys: '1',
      defaultOpenKeys: ''
    }
  }

  componentWillMount = () => {
    let { defaultOpenKeys } = this.state
    navigation.items.forEach((nav, idx) => {
      if (nav.children) {
        nav.children.forEach((item, idx) => {
          if (this.props.location.pathname.includes(item.url)) {
            defaultOpenKeys = nav.key;
          }
        })
      }
    });
    this.setState({ defaultOpenKeys });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  showModalLogout = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancelLogout = () => {
    this.setState({
      visible: false,
    });
  };

  handleOkeLogout = () => {
    this.setState({ loading: true });
    localStorage.clear();
    setTimeout(() => {
      this.setState({ loading: false, visible: false }, () => {
        this.props.history.replace("/login");
      });
    }, 1000);
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      visibleDrawer: this.state.collapsedWidth ? this.state.visibleDrawer : !this.state.visibleDrawer
    });
  };

  componentDidUpdate = () => {
    let { defaultSelectedKeys } = this.state
    navigation.items.forEach((nav, idx) => {
      if (nav.children) {
        nav.children.forEach((item, idx) => {
          if (this.props.location.pathname.includes(item.url)) {
            defaultSelectedKeys = item.key;
          }
        })
      } else {
        if (this.props.location.pathname.includes(nav.url)) {
          defaultSelectedKeys = nav.key;
        }
      }
    });
    if (defaultSelectedKeys !== this.state.defaultSelectedKeys) {
      this.setState({ defaultSelectedKeys });
    }
    // End defaultSelectedKeys
  }

  render() {
    const { location } = this.props;
    const { visible, loading, defaultSelectedKeys, defaultOpenKeys } = this.state;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const route = routes.find(item => {
        const routeSegments = item.path.split('/');
        const urlSegments = url.split('/');
        if (routeSegments.length !== urlSegments.length) {
          return false;
        }
        routeSegments.forEach((seg, index) => {
          if (seg.startsWith(':')) {
            urlSegments[index] = seg;
          }
        });
        return urlSegments.join('/') === item.path;
      });
      const name = route ? route.name : '';
      if (name) {
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{name}</Link>
          </Breadcrumb.Item>
        );
      } else {
        return null;
      }
    }) || [];
    const breadcrumbItems = extraBreadcrumbItems;
    // [
    //   <Breadcrumb.Item key="home">
    //     <Link to="/">Trang chủ</Link>
    //   </Breadcrumb.Item>,
    // ].concat(extraBreadcrumbItems);
    // End breadcrumbItems
    return (
      <Layout id="dashboard" style={{ minHeight: '100vh' }}>
        <Sider width={256}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth={this.state.collapsedWidth}
          breakpoint="sm"
          onBreakpoint={broken => {
            if (broken) {
              this.setState({ collapsed: broken, collapsedWidth: 0 })
            } else {
              this.setState({ collapsed: broken, collapsedWidth: 80 })
            }
          }}
        >
          <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKeys]} selectedKeys={[defaultSelectedKeys]} defaultOpenKeys={[defaultOpenKeys]} mode="inline">
            <div id="logo" style={{ height: 64, padding: "0 24px", margin: 0 }} className="d-flex align-items-center" key="logo"><Link to={"/ti-le"}><img style={{ height: 32 }} src={require('../../assets/img/logoapp.svg')} alt="logo-redmek" /><span>Redmek</span></Link></div>
            {
              navigation.items.map((nav, idx) => {
                return nav.children ? (
                  <SubMenu
                    key={nav.key}
                    title={
                      <span>
                        {nav.icon}
                        <span>{nav.name}</span>
                      </span>
                    }
                  >
                    {nav.children.map((item, idx) => {

                      return (<Menu.Item key={item.key}><Link to={item.url}>{item.name}</Link></Menu.Item>)
                    })}
                  </SubMenu>
                ) : (<Menu.Item key={nav.key}><Link to={nav.url}>{nav.icon}<span>{nav.name}</span></Link></Menu.Item>)
              })
            }
          </Menu>
        </Sider>
        <Drawer
          id="menu-sm-screen"
          placement="left"
          closable={false}
          onClose={() => this.setState({ visibleDrawer: false, collapsed: false })}
          visible={this.state.visibleDrawer}
        >
          <Menu style={{ height: "100%" }} theme="dark" defaultSelectedKeys={[defaultSelectedKeys]} selectedKeys={[defaultSelectedKeys]} defaultOpenKeys={[defaultOpenKeys]} mode="inline">
            <div id="logo" style={{ height: 64, padding: "0 24px", margin: 0 }} className="d-flex align-items-center" key="logo"><Link to={"/ti-le"}><span>Redmek CMS</span></Link></div>
            {
              navigation.items.map((nav, idx) => {
                return nav.children ? (
                  <SubMenu
                    key={nav.key}
                    title={
                      <span>
                        {nav.icon}
                        <span>{nav.name}</span>
                      </span>
                    }
                  >
                    {nav.children.map((item, idx) => {

                      return (<Menu.Item key={item.key}><Link to={item.url}>{item.name}</Link></Menu.Item>)
                    })}
                  </SubMenu>
                ) : (<Menu.Item key={nav.key}><Link to={nav.url}>{nav.icon}<span>{nav.name}</span></Link></Menu.Item>)
              })
            }
          </Menu>
        </Drawer>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {
              this.state.collapsed ? <MenuUnfoldOutlined style={{ fontSize: 20, padding: "0 24px" }} className="trigger" onClick={this.toggle} /> : <MenuFoldOutlined style={{ fontSize: 20, padding: "0 24px" }} className="trigger" onClick={this.toggle} />
            }
            <div style={{ position: "relative" }}>
              <Dropdown key="more" overlay={
                <Menu style={{ maxWidth: 200 }}>
                  <Menu.Item className="d-flex align-items-center" onClick={this.showModalLogout}>
                    <LogoutOutlined /><span>Đăng xuất</span>
                  </Menu.Item>
                </Menu>
              }>
                <Button
                  style={{
                    border: 'none',
                    height: 64,
                    position: "relative"
                  }}
                  className="mx-3 d-flex align-items-center"
                >
                  <Avatar src={localStorage.getItem("avatar") || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
                  <span className="ml-1 text-uppercase">{localStorage.getItem("name")}</span>
                </Button>
              </Dropdown>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumbItems}
            </Breadcrumb>
            <div className="site-layout-background">
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/ti-le" />
                  <Route name="404" render={() => <Page404 />} />
                </Switch>
              </Suspense>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by tuanhadev</Footer>
        </Layout>
        <Modal
          title="Đăng xuất"
          visible={visible}
          onOk={this.handleOkeLogout}
          onCancel={this.handleCancelLogout}
          footer={[
            <Button key="back" onClick={this.handleCancelLogout}>
              Hủy
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOkeLogout}>
              Xác nhận
            </Button>,
          ]}
        >
          <p>Bạn chắc chắn muốn đăng xuất ?</p>
        </Modal>
      </Layout>
    );
  }
}

export default DefaultLayout;