import React, { Component } from "react";
// import {Col, Row, Card, Table, Button} from "antd";
// import Auxiliary from "util/Auxiliary";
import { Link } from 'react-router-dom'
import {Button, Card, Col, Form, Input, Row, Select} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const {TextArea} = Input;



class Addprofiler extends Component {

  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }


  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    };
    const formItemLayout1 = {
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 24},
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{width: 70}}>
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    );


    return (
      <Card className="gx-card add_profile_cust" title="Create a Profiler"> 
      <Link to="/main/dashboard/profiler" className="add_profile_back">
          <Button type="ghost" icon="left" >
            <i className="icon icon-left"></i> Back
          </Button>
        </Link>
        <Form onSubmit={this.handleSubmit}>
            <FormItem
                {...formItemLayout}
                label="Company Name"
              >
                {getFieldDecorator('Cname', {
                  rules: [{
                    required: true, message: 'Please enter your Company Name!',
                  }],
                })(
                  <Input id="email1"/>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="E-mail"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The enter is not valid E-mail!',
                  }, {
                    required: true, message: 'Please enter your E-mail!',
                  }],
                })(
                  <Input id="email1"/>
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="POC Name"
                  
              >
                {getFieldDecorator('nickname', {
                  rules: [{required: true, message: 'Please enter your POC Name!', whitespace: true}],
                })(
                  <Input/>
                )}
              </FormItem>
              {/* <FormItem
                {...formItemLayout}
                label="Habitual Residence"
              >
                {getFieldDecorator('residence', {
                  initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                  rules: [{type: 'array', required: true, message: 'Please select your habitual residence!'}],
                })(
                  <Cascader options={residences}/>
                )}
              </FormItem> */}
              <FormItem
                {...formItemLayout}
                label="Phone Number"
              >
                {getFieldDecorator('phone', {
                  rules: [{required: true, message: 'Please enter your phone number!'}],
                })(
                  <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Address"
                  
              >
                {getFieldDecorator('address', {
                  rules: [{required: true, message: 'Please enter your Address!', whitespace: true}],
                })(
                  <TextArea rows={4}/>
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="Note"
                  
              >
                {getFieldDecorator('note', {
                  rules: [{required: true, message: 'Please enter your Note!', whitespace: true}],
                })(
                  <TextArea rows={4}/>
                )}
              </FormItem>
              
              {/* <FormItem
                {...formItemLayout}
                label="Website"
              >
                {getFieldDecorator('website', {
                  rules: [{required: true, message: 'Please enter website!'}],
                })(
                  <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    placeholder="website"
                  >
                    <Input/>
                  </AutoComplete>
                )}
              </FormItem> */}
              {/* <FormItem
                {...formItemLayout}
                label="Captcha"
                extra="We must make sure that your are a human."
              >
                <Row>
                  <Col span={24} sm={12}>
                    {getFieldDecorator('captcha', {
                      rules: [{required: true, message: 'Please enter the captcha you got!'}],
                    })(
                      <Input/>
                    )}
                  </Col>
                  <Col span={24} sm={12}>
                    <Button>Get captcha</Button>
                  </Col>
                </Row>
              </FormItem> */}
              {/* <FormItem {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>I have read the <span className="gx-link">agreement</span></Checkbox>
                )}
              </FormItem> */}
              
              <FormItem  {...formItemLayout1}>
                <Row>
                    <Col span={24} sm={8}>
                      
                    </Col>
                    <Col span={24} sm={12}>
                      <Button type="primary" htmlType="submit">Register</Button>
                    </Col>
                  </Row>
              </FormItem>
        </Form>
      </Card>
    );
  }

}

const RegistrationForm = Form.create()(Addprofiler);
export default RegistrationForm;
