import React, { Component } from "react";
// import {Col, Row, Card, Table, Button} from "antd";
import {Row, Card, Table, Button, message, Popconfirm, Badge} from "antd";
import { Link } from 'react-router-dom'
import Auxiliary from "util/Auxiliary";

const Dtext = 'Are you sure delete this task?';
const hurl = "#";

class Staff extends Component {
    constructor(props) {
      super(props);
      this.state = {
        advalue : 'Active',
        status_color : '#52c41a',
        data : [],
        // columns : []
      };
      this.confirm=this.confirm.bind(this);
    }

   confirm() {
      message.info('Click on Yes.');
      this.setState({advalue: 'Deactive',status_color:'#ff4d4f'});
      
    }
  render(){

    for (let i = 0; i < 100; i++) {
      this.state.data.push({
        key: i,
        fname: `John`,
        lname: 'week',
        email : 'profile@kms.com',
      });
    }

   const columns = [{
      title: 'First Name',
      dataIndex: 'fname',
      // width: 100,
    },{
      title: 'Last Name',
      dataIndex: 'lname',
    },{
      title: 'Email',
      dataIndex: 'email',
    }, {
      title: 'Manage',
      key: 'action',
      render: (text, record) => (
        
        <span>

      <Popconfirm placement="top" title={Dtext} onConfirm={this.confirm} okText="Yes" cancelText="No"><a href={hurl}><i class="icon icon-edit"></i></a></Popconfirm> | <Popconfirm placement="top" title={Dtext} onConfirm={this.confirm} okText="Yes" cancelText="No"><a href={hurl} ><i class="icon icon-trash" style={{color:"red"}} ></i></a></Popconfirm> | <Popconfirm placement="top" title={Dtext} onConfirm={this.confirm} okText="Yes" cancelText="No"><a href={hurl} >    <Badge className="site-badge-count-109" count={this.state.advalue} style={{backgroundColor : this.state.status_color}} /></a></Popconfirm>
          
        </span>
      )
    }];
    return (
      <Auxiliary>
        <Row>
          <Card title="Staff Managment">
          <Link to="/main/dashboard/addstaff">
            <Button type="primary" icon="add" >
              <i className="icon icon-add"></i> ADD
            </Button>
          </Link>
            
            <Table className="gx-table-responsive" columns={columns} dataSource={this.state.data} pagination={{pageSize: 50}}
                scroll={{y: 240}}/>
          </Card>
        </Row>
      </Auxiliary>
    );
  }
};

export default Staff;
