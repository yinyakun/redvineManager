import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Button  } from 'antd';
import Message from "../leavemassage/message.js";
import Product from "../product/product.js";

import './home.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false,
    selectKey:'1'
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  clickMenuItem = (item,key,keyPath, domEvent) => {
    this.setState({selectKey:item.key});
  };

  renderContents(item){
    if (item === '1') {
      return (
        <div style={{ padding: 24, background: '#12f2311',fontSize:'0.5rem' }}>
          <Message content={item}></Message>
        </div>
      )
    }else if(item === '2'){
      return ( <div style={{ padding: 24, background: '#12f2311',fontSize:'0.5rem' }}>
          <Product content={item}></Product>
        </div>
      )
    }else{
      return (
        <div style={{ padding: 24, background: '#12f2311',fontSize:'0.5rem' }}>
          <Message content={item}></Message>
        </div>
      )
    }
     
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' ,fontSize:'0.15rem', width:'100%'}}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.clickMenuItem}>
          <SubMenu
              key="product"
              title={
                <span>
                  <Icon type="user" />
                  <span>产品管理</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <span>产品发布</span>
              </Menu.Item>
              <Menu.Item key="2">
              <span >产品展示</span>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="leave-message"
              title={
                <span>
                  <Icon type="user" />
                  <span>留言管理</span>
                </span>
              }
            >
              <Menu.Item key="3"><span>留言信息</span></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>资讯管理</span>
                </span>
              }
            >
              <Menu.Item key="4">资讯</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
        <Header style={{ background: 'darkgrey', padding: 0 }} >
          <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{marginLeft:'20px'}}
            />
        </Header>
          <Content style={{ margin: '0 16px' }} className='content' ref='connn'>
            {
              this.renderContents(this.state.selectKey)
            }
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;