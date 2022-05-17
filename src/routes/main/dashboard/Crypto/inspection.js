import React from "react";
import {Card, Table} from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'DNI',
    dataIndex: 'dni',
    key: 'dni',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Visit Time',
    dataIndex: 'visit_time',
    key: 'visit_time',
  },
  {
    title: 'Details',
    key: 'details',
    render: (text, record) => (
      <span>
      <span className="gx-link">Ver</span>
      {/*<span className="gx-link">Action 一 {record.name}</span>
      <Divider type="vertical"/>
      <span className="gx-link">Delete</span>
      <Divider type="vertical"/>
      <span className="gx-link ant-dropdown-link">
        More actions <Icon type="down"/>
      </span>*/}
    </span>
    ),
  }
];

const data = [
  {
    key: '1',
    name: 'Tom',
    surname: 'Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    date: '20/01/2020',
    visit_time: '11:01:25 AM'
  },
  {
    key: '1',
    name: 'Tom',
    surname: 'Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    date: '20/01/2020',
    visit_time: '11:01:25 AM'
  },{
    key: '1',
    name: 'Tom',
    surname: 'Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    date: '20/01/2020',
    visit_time: '11:01:25 AM'
  },{
    key: '1',
    name: 'Tom',
    surname: 'Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    date: '20/01/2020',
    visit_time: '11:01:25 AM'
  },{
    key: '1',
    name: 'Tom',
    surname: 'Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    date: '20/01/2020',
    visit_time: '11:01:25 AM'
  },{
    key: '1',
    name: 'Tom',
    surname: 'Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    date: '20/01/2020',
    visit_time: '11:01:25 AM'
  },{
    key: '1',
    name: 'Tom',
    surname: 'Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    date: '20/01/2020',
    visit_time: '11:01:25 AM'
  },
  
];

const Simple = () => {
  return (
    <Card title="Inspection">
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default Simple;
