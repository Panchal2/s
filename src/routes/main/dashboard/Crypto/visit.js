import React, {Component} from "react";
import {Card, Icon, Table, Button, Col, Row} from "antd";

import AddVisit from "components/modal/AddVisit";

class Visit extends Component {

  onAddVisit = () => {
    this.setState({addVisitState: true});
  };
  onVisitClose = () => {
    this.setState({addVisitState: false});
  };

  constructor() {
    super();
    this.state = {
      addVisitState: false,
    }
  }

  render() {
    const {addVisitState} = this.state;
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
        title: 'Host',
        dataIndex: 'host',
        key: 'host',
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
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
        title: 'Departure Time',
        dataIndex: 'departure_time',
        key: 'departure_time',
      },
      {
        title: 'Document',
        key: 'document',
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
        host: 'Tom',
        company: 'ASPL',
        date: '20/01/2020',
        visit_time: '14:31:56',
        departure_time: '16:34:22'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        host: 'Tom',
        company: 'ASPL',
        date: '20/01/2020',
        visit_time: '14:31:56',
        departure_time: '16:34:22'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        host: 'Tom',
        company: 'ASPL',
        date: '20/01/2020',
        visit_time: '14:31:56',
        departure_time: '16:34:22'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        host: 'Tom',
        company: 'ASPL',
        date: '20/01/2020',
        visit_time: '14:31:56',
        departure_time: '16:34:22'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        host: 'Tom',
        company: 'ASPL',
        date: '20/01/2020',
        visit_time: '14:31:56',
        departure_time: '16:34:22'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        host: 'Tom',
        company: 'ASPL',
        date: '20/01/2020',
        visit_time: '14:31:56',
        departure_time: '16:34:22'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        host: 'Tom',
        company: 'ASPL',
        date: '20/01/2020',
        visit_time: '14:31:56',
        departure_time: '16:34:22'
      } 
    ];

    return (
      <Card title="Visit List">
        <Button type="primary">Close Selected Visit</Button>
        <Button type="primary" onClick={this.onAddVisit}>New Visit</Button>
        <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
          <AddVisit open={addVisitState} contact={{
            'id': 1,
            'dni': '',
            'company_name': '',
            'host_name': '',
            'procedure': '',
          }} onSaveVisit={this.onSaveVisit}
              onVisitClose={this.onVisitClose}/>
      </Card>
    );
  }
}

export default Visit;
