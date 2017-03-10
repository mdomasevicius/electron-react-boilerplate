// @flow
import React, {Component} from "react";
import {Row, Col, Modal, Input, Button, Upload} from "antd";

const initialState = {
  item: {
    name: '',
    factoryReferenceNumber: '',
    referenceNumber: '',
    imageUri: '',
    fileName: '',
    selectedFiles: []
  }
};

class Items extends Component {

  constructor(props) {
    super(props);

    this.onOk = this.onOk.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onOk(e) {
    const item = this.state.item;

    if (this.state.selectedFiles && this.state.selectedFiles.length == 1) {
      item.imageUri = this.state.selectedFiles[0].originFileObj.path;
      item.imageName = this.state.selectedFiles[0].originFileObj.name;
    }

    this.props.onOk(item);
    this.props.close();
    this.setState({...initialState});
  }

  onCancel(e) {
    this.props.close();
    this.setState({...initialState});
  }

  handleInputChange(fieldName, event) {
    let item = this.state.item;

    /**
     * For ??reasons?? antd <InputNumber/> passes `event.target.value` directly instead of `event`
     */
    let value;
    if (typeof(event) === 'number') {
      value = event
    } else {
      value = event.target.value
    }

    item[fieldName] = value;
    this.setState({item: item})
  }

  handleOnFileChange(e) {
    let fileList = e.fileList;
    fileList = fileList.slice(-1);
    this.setState({selectedFiles: fileList});
  }

  componentWillMount() {
    this.state = {...initialState};
    const {item} = this.props;
    this.setState({item: item});
  }

  render() {
    const uploadProps = {
      multiple: false,
      onChange: this.handleOnFileChange.bind(this),
    };

    return (
      <Modal
        title={this.state.item._id ? 'Item Edit' : 'Item Create'}
        visible={this.props.visible}
        onOk={this.onOk}
        onCancel={this.onCancel}
      >
        <Row>
          <Col span={4}>Name</Col>
          <Col span={20}>
            <Input
              size="large"
              value={this.state.item.name}
              onChange={this.handleInputChange.bind(this, 'name')}/>
          </Col>
          <br/>
          <Col span={4}>Factory Ref No</Col>
          <Col span={20}>
            <Input
              size="large"
              value={this.state.item.factoryReferenceNumber}
              onChange={this.handleInputChange.bind(this, 'factoryReferenceNumber')}
            />
          </Col>
          <br/>
          <Col span={4}>Ref No</Col>
          <Col span={20}>
            <Input
              size="large"
              value={this.state.item.referenceNumber}
              onChange={this.handleInputChange.bind(this, 'referenceNumber')}
            />
          </Col>
          <br/>
          <Col span={24}>
            <Upload
              {...uploadProps}
              fileList={this.state.selectedFiles}
              listType="picture"
              onPreview={() => {}}
            >
              <Button size="large">Photo</Button>
            </Upload>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default Items;
