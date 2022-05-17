import React, { Component } from "react";
import {Row, Col, Card, Typography,Popover,Form, Input, Table, Button, message, Popconfirm, Tabs} from "antd";
// import { Link } from 'react-router-dom'
const Dtext = 'Are you sure delete this task?';
const hurl = "#";
const TabPane = Tabs.TabPane;
const { Title } = Typography;
const FormItem = Form.Item;


class Role_Permission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advalue : 'Active',
      status_color : '#52c41a',
      data : [],
      // columns : []
      popvisible: false,
    };
    this.confirm=this.confirm.bind(this);

  }

  callback = (key) => {
    console.log(key);
  };
  confirm() {
    message.info('Click on Yes.');
    this.setState({advalue: 'Deactive',status_color:'#ff4d4f'});
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target.role);
    
  }
  handleVisibleChange = (popvisible) => {
    this.setState({ popvisible: true });
  }
  hide = () => {
    this.setState({
      popvisible: false,
    });
  }

  render(){

    const text = <span>Add Role</span>;
    const layout = {
      labelCol: {
        span: 0,
      },
      wrapperCol: {
        span: 24,
      },
    };
    const tailLayout = {
      wrapperCol: {
        span: 24,
      },
    };
   
    const content = (

        <Form {...layout} onSubmit={this.handleSubmit} name="basic"
        initialValues={{
          remember: true,
        }}>
          <FormItem label="role"  name="role" rules={[{ required: true, message: 'Please Enter Role!' }]} >
            <Input placeholder="Please Enter Role"  id="role" />
          </FormItem>
          <FormItem {...tailLayout}>
            <Button type="primary" htmlType="submit">Save</Button>
            <Button type="primary" onClick={this.hide} >Canel</Button>
          </FormItem>
        </Form>
    );

    for (let i = 0; i < 10; i++) {
      this.state.data.push({
        key: i,
        role: `Profilre ${i}`,

      });
    }

    const columns = [{
      title: 'Role',
      dataIndex: 'role',
      // width: 100,
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Popconfirm placement="top" title={Dtext} visible={this.state.visible} onConfirm={this.confirm} okText="Yes" cancelText="No"><a href={hurl} ><i className="icon icon-trash" style={{color:"red"}} ></i></a></Popconfirm>
        </span>
      )
    }];
    return (
      
      <Card className="gx-card" title="Basic">
        
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Role" key="1">
            <Row>
            <Col span={16} ><Title level={4}>Role Managements</Title></Col>
            <Col span={8} ><Popover placement="left" title={text} visible={this.state.popvisible} content={content} trigger="click"  ><Button style={{float:"right"}} onClick={this.handleVisibleChange} >Add Role</Button ></Popover></Col>
            </Row>
            <Table className="gx-table-responsive" columns={columns} dataSource={this.state.data} pagination={{pageSize: 5}}
               />
          </TabPane>
          <TabPane tab="Permission" key="2">
            Permission Management
          </TabPane>
        </Tabs>
    </Card>
    );
  }
};

export default Role_Permission;
