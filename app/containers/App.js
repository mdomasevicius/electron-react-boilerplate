// @flow
import { hashHistory } from 'react-router';
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { Header, Content } = Layout;

export default class App extends Component {

  props: {
    children: HTMLElement
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item, key, keyPath) {
    hashHistory.push(item.key);
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
            <Menu.Item key="/"><Icon type="home"/></Menu.Item>
            <Menu.Item key="/experimental">Experimental</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0' }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}
