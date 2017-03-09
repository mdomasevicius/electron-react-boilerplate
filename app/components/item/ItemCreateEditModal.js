// @flow
import React, {Component} from "react";
import {Row, Col, Modal, Input, Button, Upload} from "antd";

const initialState = {
  name: '',
  factoryReferenceNumber: '',
  referenceNumber: '',
  imageUri: '',
  fileName: '',
  selectedFile: null
};

class Items extends Component {

  constructor(props) {
    super(props);

    this.state = {...initialState};

    const {item} = props;
    this.state = {item: item};
    this.onOk = this.onOk.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onOk(e) {
    const item = {
      name: this.state.name,
      factoryReferenceNumber: this.state.factoryReferenceNumber,
      referenceNumber: this.state.referenceNumber,
      imageUri: '',
      imageName: ''
    };

    if (this.state.selectedFile) {
      item.imageUri = this.state.selectedFile[0].originFileObj.path;
      item.imageName = this.state.selectedFile[0].originFileObj.name;
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
    let partialState = {};

    /**
     * For ??reasons?? antd <InputNumber/> passes `event.target.value` directly instead of `event`
     */
    let value;
    if (typeof(event) === 'number') {
      value = event
    } else {
      value = event.target.value
    }
    partialState[fieldName] = value;
    this.setState(partialState)
  }

  handleOnFileChange(e) {
    let fileList = e.fileList;
    fileList = fileList.slice(-1);
    this.setState({selectedFile: fileList});
  }

  render() {

    const uploadProps = {
      multiple: false,
      onChange: this.handleOnFileChange.bind(this),
    };

    return (
      <Modal
        title="a"
        visible={this.props.visible}
        onOk={this.onOk}
        onCancel={this.onCancel}
      >
        <Row>
          <Col span={4}>Name</Col>
          <Col span={20}>
            <Input
              size="large"
              value={this.state.name}
              onChange={this.handleInputChange.bind(this, 'name')}/>
          </Col>
          <br/>
          <Col span={4}>Factory Ref No</Col>
          <Col span={20}>
            <Input
              size="large"
              value={this.state.factoryReferenceNumber}
              onChange={this.handleInputChange.bind(this, 'factoryReferenceNumber')}
            />
          </Col>
          <br/>
          <Col span={4}>Ref No</Col>
          <Col span={20}>
            <Input
              size="large"
              value={this.state.referenceNumber}
              onChange={this.handleInputChange.bind(this, 'referenceNumber')}
            />
          </Col>
          <br/>
          <Col span={24}>
            <Upload
              {...uploadProps}
              fileList={this.state.selectedFile}
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
