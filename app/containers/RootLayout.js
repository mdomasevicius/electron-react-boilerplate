// @flow
import { browserHistory } from 'react-router';
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;

export default class RootLayout extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item, key, keyPath) {
    browserHistory.push('/experimental');
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">Home</Menu.Item>
            <Menu.Item key="/experimental">Experimental</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0' }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}
