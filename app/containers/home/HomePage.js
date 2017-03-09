// @flow
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Tabs, Icon } from 'antd';
const {TabPane} = Tabs
const { Header, Content, Footer } = Layout;

export default class TabNavigationPage extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="h1">
        <TabPane tab={<span><Icon type="home"/></span>}  key="h1">
          Items
        </TabPane>
        <TabPane tab="Experimental" key="h2">Content of Tab Pane 2</TabPane>
      </Tabs>
    );
  }
}
