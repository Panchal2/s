import React, { Component } from "react";
// import {Col, Row, Card, Table, Button} from "antd";
// import Auxiliary from "util/Auxiliary";
import { Link } from 'react-router-dom'
import { Button, Card, Col, Form, Input, Row, Switch, Select} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;
const {TextArea} = Input;

const children = [];
for (let i = 1; i < 10; i++) {
  children.push(<Option key={'profile'+i}>{'profile'+i}</Option>);
}


function handleChange(value) {
  console.log(`selected ${value}`);
}

class Assessment extends Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }




 
  render() {
    const {getFieldDecorator} = this.props.form;
    // const {autoCompleteResult} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 10},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };
    // const tailFormItemLayout = {
    //   wrapperCol: {
    //     xs: {
    //       span: 24,
    //       offset: 0,
    //     },
    //     sm: {
    //       span: 16,
    //       offset: 8,
    //     },
    //   },
    // };


    return (
      <Card className="gx-card cust_asses" title="Create an Assessment"> 
        {/* <Link to="/main/dashboard/profiler">
            <Button type="ghost" icon="left" >
              <i className="icon icon-left"></i> Back
            </Button>
          </Link> */}
        <Form onSubmit={this.handleSubmit}>

            <div className="assesment_btns" >
              <Row >
                <Col span={12} sm={12}>
                  <Link to="/main/dashboard/profiler">
                    <Button type="ghost" >
                      Preview
                    </Button>
                  </Link>
                </Col>
                <Col span={12} sm={12}>
                  <FormItem  >
                    <Button type="primary" htmlType="submit">Publish</Button>
                  </FormItem>
                </Col>
              </Row>
              </div>
          
          
          <Row>
            <Col span={12} sm={12}>
              <FormItem
                    {...formItemLayout}
                    label="Title"
                  >
                    {getFieldDecorator('title', {
                      rules: [{
                        required: true, message: 'Please enter your title!',
                      }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                  <FormItem
                  {...formItemLayout}
                  label="Description"
                    
                >
                  {getFieldDecorator('description', {
                    rules: [{required: true, message: 'Please enter your Description!', whitespace: true}],
                  })(
                    <TextArea rows={4}/>
                  )}
                </FormItem>
            </Col>
            <Col span={12} sm={12} className="assess_right">
                  <FormItem
                    {...formItemLayout}
                    label="Active/Deactive"
                  >
                    {getFieldDecorator('switch', {valuePropName: 'checked'})(
                      <Switch/>
                    )}
                  </FormItem>

                  {/* <FormItem {...formItemLayout}> */}
                    <Select
                      mode="tags"
                      placeholder="Manager Profile"
                      style={{width: '70%'}}
                      onChange={handleChange}
                      tokenSeparators={[',']}
                    >
                      {children}
                    </Select>
                {/* </FormItem> */}
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }

}

const AssetRegistrationForm = Form.create()(Assessment);
export default AssetRegistrationForm;
