import React, {Component} from "react";
import {Card, Table, Button} from "antd";

import AddProcess from "components/modal/AddProcess";

class Procedure extends Component {

  onAddProcess = () => {
    this.setState({addProcessState: true});
  };
  onProcessClose = () => {
    this.setState({addProcessState: false});
  };

  constructor() {
    super();
    this.state = {
      addProcessState: false,
    }
  }

  render() {
    const {addProcessState} = this.state;
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
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: 'Documentos',
        dataIndex: 'documentos',
        key: 'documentos',
      },
    ];

    const data = [
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        company: 'ASPL',
        date: '20/01/2020',
        time: '14:31:56',
        documentos: 'wow324.pdf'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        company: 'ASPL',
        date: '20/01/2020',
        time: '14:31:56',
        documentos: 'wow324.pdf'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        company: 'ASPL',
        date: '20/01/2020',
        time: '14:31:56',
        documentos: 'wow324.pdf'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        company: 'ASPL',
        date: '20/01/2020',
        time: '14:31:56',
        documentos: 'wow324.pdf'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        company: 'ASPL',
        date: '20/01/2020',
        time: '14:31:56',
        documentos: 'wow324.pdf'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        company: 'ASPL',
        date: '20/01/2020',
        time: '14:31:56',
        documentos: 'wow324.pdf'
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        company: 'ASPL',
        date: '20/01/2020',
        time: '14:31:56',
        documentos: 'wow324.pdf'
      } 
    ];

    return (
      <Card title="Procedure List">
        <Button type="primary" onClick={this.onAddProcess}>New Procedure</Button>
        <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
          <AddProcess open={addProcessState} contact={{
            'id': 1,
            'dni': '',
            'company_name': '',
            'host_name': '',
            'procedure': '',
          }} onSaveProcess={this.onSaveProcess}
              onProcessClose={this.onProcessClose}/>
      </Card>
    );
  }
}

export default Procedure;
