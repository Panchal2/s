import React, {Component} from "react";
import {Card, Table, Button} from "antd";

import AddExpedient from "components/modal/AddExpedient";

class Expedient extends Component {

  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  setTotalSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'total',
      },
    });
  };

  onAddExpedient = () => {
    this.setState({addExpedientState: true});
  };
  onExpedientClose = () => {
    this.setState({addExpedientState: false});
  };

  constructor() {
    super();
    this.state = {
      addExpedientState: false,
    }
  }

  render() {
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const {addExpedientState} = this.state;
    const columns = [
      {
        title: 'Fullname',
        dataIndex: 'fullname',
        key: 'fullname',
        filters: [
          {text: 'Tom', value: 'Tom'},
          {text: 'Jerry', value: 'Jerry'},
          {text: 'Alex', value: 'Alex'},
        ],
        filteredValue: filteredInfo.fullname || null,
        onFilter: (value, record) => record.fullname.includes(value),
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
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: text => <span className="">{text}</span>,
        sorter: (a, b) => a.total - b.total,
        sortOrder: sortedInfo.columnKey === 'total' && sortedInfo.order,
      },
      {
        title: 'Complete',
        dataIndex: 'complete',
        key: 'complete',
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'CreateDate',
        dataIndex: 'createdate',
        key: 'createdate',
      },
      {
        title: 'LastDate',
        dataIndex: 'lastdate',
        key: 'lastdate',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        filters: [
          {text: 'Open', value: 'Open'},
          {text: 'Closed', value: 'Closed'},
          {text: 'Finished', value: 'Finished'},
        ],
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Document',
        key: 'document',
        render: (text, record) => (
          <span>
          <span className="gx-link">Detail</span>
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
        fullname: 'Tom Latham',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        total: '2',
        complete: '4',
        createdate: '20/01/2020',
        lastdate: '23/01/2020',
        status: 'Closed'
      },
      {
        key: '1',
        fullname: 'Jerry Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        total: '4',
        complete: '8',
        createdate: '20/01/2020',
        lastdate: '23/01/2020',
        status: 'Open'
      },
      {
        key: '1',
        fullname: 'Alex Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        total: '3',
        complete: '6',
        createdate: '20/01/2020',
        lastdate: '23/01/2020',
        status: 'Open'
      },
      {
        key: '1',
        fullname: 'Tom Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        total: '6',
        complete: '12',
        createdate: '20/01/2020',
        lastdate: '23/01/2020',
        status: 'Closed'
      },
      {
        key: '1',
        fullname: 'Tom Latham',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        total: '5',
        complete: '10',
        createdate: '20/01/2020',
        lastdate: '23/01/2020',
        status: 'Open'
      },
      {
        key: '1',
        fullname: 'Tom Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        total: '1',
        complete: '3',
        createdate: '20/01/2020',
        lastdate: '23/01/2020',
        status: 'Finished'
      }
    ];

    return (
      <Card title="Expedient List">
        <Button>OPEN</Button>
        <Button>MANUALLY-CLOSED</Button>
        <Button>FINISHED-OK</Button>
        <Button onClick={this.setTotalSort}>Sort Total</Button>
        <Button className="float-btn-right" type="primary">Close Selected Expedient </Button>
        <Button className="float-btn-right" type="primary" onClick={this.onAddExpedient}>New Expedient</Button>
        <Table className="gx-table-responsive" columns={columns} dataSource={data} onChange={this.handleChange}/>
        <AddExpedient open={addExpedientState} contact={{
            'id': 1,
            'name': '',
            'thumb': '',
            'email': '',
            'phone': '',
            'designation': '',
            'selected': false,
            'starred': false,
            'frequently': false,
          }} onSaveExpedient={this.onSaveExpedient}
              onExpedientClose={this.onExpedientClose}/>
      </Card>
    );
  }
}

export default Expedient;
