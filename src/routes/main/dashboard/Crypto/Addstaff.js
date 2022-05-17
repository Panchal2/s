import React, { Component } from "react";
// import {Col, Row, Card, Table, Button} from "antd";
// import Auxiliary from "util/Auxiliary";
import { Link } from 'react-router-dom'
import {Button, Card, Col, Form, Input, Row} from "antd";

const FormItem = Form.Item;

class Addstaff extends Component {

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




    return (
      <Card className="gx-card add_profile_cust" title="Create a Staff"> 
      <Link to="/main/dashboard/staff" className="add_profile_back">
          <Button type="ghost" icon="left" >
            <i className="icon icon-left"></i> Back
          </Button>
        </Link>
        <Form onSubmit={this.handleSubmit}>
            <FormItem
                {...formItemLayout}
                label="First Name"
              >
                {getFieldDecorator('fname', {
                  rules: [{
                    required: true, message: 'Please enter your First Name!',
                  }],
                })(
                  <Input id="fname"/>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Last Name"
              >
                {getFieldDecorator('lname', {
                  rules: [{
                    required: true, message: 'Please enter your Company Name!',
                  }],
                })(
                  <Input id="lname"/>
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

const RegistrationForm = Form.create()(Addstaff);
export default RegistrationForm;
