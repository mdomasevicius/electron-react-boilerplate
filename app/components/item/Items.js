// @flow
import React, {Component} from 'react';

import {
  Popconfirm,
  Popover,
  Icon,
  Input,
  Row,
  Col,
  Table,
  Button
} from 'antd';

import ItemCreateEditModal from './ItemCreateEditModal'

class Items extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editItem: {}
    };

    this.openCrateEditModal = this.openCrateEditModal.bind(this);
    this.closeCreateEditModal = this.closeCreateEditModal.bind(this);
    this.onItemSaveUpdate = this.onItemSaveUpdate.bind(this);
  }

  openCrateEditModal(e) {
    this.props.openCreateEditModal();
  }

  closeCreateEditModal(e) {
    console.log(this);
    this.props.closeCreateEditModal();
    this.props.loadItems();
    this.setState({editItem: {}});
  }

  onItemSaveUpdate(item) {
    this.setState({editItem: {}});
    this.props.saveItem(item);
    this.props.loadItems();
  }

  onItemEdit(item) {
    this.setState({editItem: item});
    this.props.openCreateEditModal();
    console.log(this);
  }

  onItemDelete(item) {
    this.props.deleteItem(item);
    this.props.loadItems();
  }

  componentDidMount() {
    console.log('mounted');
    this.props.loadItems();
  }

  render() {
    const {createEditModalVisible, items} = this.props;

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Factory Reference No',
      dataIndex: 'factoryReferenceNumber',
      key: 'factoryReferenceNumber',
    }, {
      title: 'Reference No',
      dataIndex: 'referenceNumber',
      key: 'referenceNumber',
    }, {
      title: 'Photo',
      dataIndex: 'imageUri',
      key: 'imageUri',
      render: (text, record) => {
        if (text) {
          return (
            <Popover content={
                <img
                  width="300px"
                  src={record.imageUri}/>
              }>
              <Button type="primary">{record.imageName}</Button>
            </Popover>
          )
        } else {
          return (<span></span>)
        }
      }
    }, {
      title: 'Actions',
      key: 'actions',
      render: (text, item) => (
        <span>
          <Button size="small" onClick={this.onItemEdit.bind(this, item)}>Edit</Button>
          <Popconfirm onConfirm={this.onItemDelete.bind(this, item)} title={'Delete ' + item.name}>
            <Button size="small" type="danger">Delete</Button>
          </Popconfirm>
        </span>
      )
    }];

    const config = {
      bordered: true,
      loading: false,
      pagination: true,
      size: 'default',
      rowSelection: {},
      scroll: undefined,
    };

    return (
      <div>
        <Row>
          <Col span={6}>
            <Button type="primary" size="large" onClick={this.openCrateEditModal}>
              Add Item
            </Button>
          </Col>
          <Col span={6}>
            <Input size="large" placeholder="Paieska"/>
          </Col>
          <Col span={6}>
            <Button size="large" onClick={this.props.loadItems}>+</Button>
          </Col>
        </Row>
        <Row>
          <Table
            {...config}
            dataSource={this.props.items}
            columns={columns}
          />
        </Row>
        <ItemCreateEditModal
          item={this.state.editItem}
          onOk={this.onItemSaveUpdate}
          close={this.closeCreateEditModal}
          visible={createEditModalVisible}/>
      </div>
    );
  }
}

export default Items;
