import React from "react";
import {Card,  Table, Button,Select} from "antd";

const Option = Select.Option;
const columns = [
  {
    title: 'Document Name',
    dataIndex: 'document_name',
    key: 'document_name',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Owner Name',
    dataIndex: 'owner_name',
    key: 'owner_name',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Owner NIF',
    dataIndex: 'owner_nif',
    key: 'owner_nif',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Owner Email',
    dataIndex: 'owner_email',
    key: 'owner_email',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Creation Date',
    dataIndex: 'creation_date',
    key: 'creation_date',
  },
  {
    title: 'Document Type',
    dataIndex: 'document_type',
    key: 'document_type',
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
    document_name: '324_signed.pdf',
    owner_name: 'Shephard',
    owner_nif: '12345678D',
    owner_email: 'tom@yopmail.com',
    creation_date: '20/01/2020',
    document_type: 'Visita-Reunion'
  },
  {
    key: '1',
    document_name: '324_signed.pdf',
    owner_name: 'Shephard',
    owner_nif: '12345678D',
    owner_email: 'tom@yopmail.com',
    creation_date: '20/01/2020',
    document_type: 'Visita-Reunion'
  },
  {
    key: '1',
    document_name: '324_signed.pdf',
    owner_name: 'Shephard',
    owner_nif: '12345678D',
    owner_email: 'tom@yopmail.com',
    creation_date: '20/01/2020',
    document_type: 'Visita-Reunion'
  },
  {
    key: '1',
    document_name: '324_signed.pdf',
    owner_name: 'Shephard',
    owner_nif: '12345678D',
    owner_email: 'tom@yopmail.com',
    creation_date: '20/01/2020',
    document_type: 'Visita-Reunion'
  },
  {
    key: '1',
    document_name: '324_signed.pdf',
    owner_name: 'Shephard',
    owner_nif: '12345678D',
    owner_email: 'tom@yopmail.com',
    creation_date: '20/01/2020',
    document_type: 'Visita-Reunion'
  },
  {
    key: '1',
    document_name: '324_signed.pdf',
    owner_name: 'Shephard',
    owner_nif: '12345678D',
    owner_email: 'tom@yopmail.com',
    creation_date: '20/01/2020',
    document_type: 'Visita-Reunion'
  },
  {
    key: '1',
    document_name: '324_signed.pdf',
    owner_name: 'Shephard',
    owner_nif: '12345678D',
    owner_email: 'tom@yopmail.com',
    creation_date: '20/01/2020',
    document_type: 'Visita-Reunion'
  }
  
];

const Simple = () => {
  return (
    <Card title="Document List">
      <Select className="gx-mr-3 gx-mb-3 inline-inputs" defaultValue="None">
        <Option value="None">None</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Button className="inline-btn" type="primary">Filter</Button>
      <Button className="inline-btn" type="primary">Print</Button>
      <Button className="inline-btn" type="primary">Mail</Button>
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default Simple;
