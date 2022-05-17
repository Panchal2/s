import React, {Component} from "react";
import {Card,  Table, Button} from "antd";

import EmployeeCheck from "components/modal/EmployeeCheck";

class EmployeeWorkLog extends Component {

  // AddIdentity = (box) => {
  //   return <Button type="primary" onClick={this.onAddContact}>Add Identity</Button>
  // };

  onAddEmployee = () => {
    this.setState({addEmployeeState: true});
  };
  onEmployeeClose = () => {
    this.setState({addEmployeeState: false});
  };

  constructor() {
    super();
    this.state = {
      addEmployeeState: false,
    }
  }

  render() {
    const {addEmployeeState} = this.state;
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
        title: 'Check in',
        dataIndex: 'check_in',
        key: 'check_in',
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Check out',
        dataIndex: 'check_out',
        key: 'check_out',
        render: text => <span className="">{text}</span>,
      },
    ];

    const data = [
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      },
      {
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      },{
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      },{
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      },{
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      },{
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      },{
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      },{
        key: '1',
        name: 'Tom',
        surname: 'Shephard',
        email: 'tom@yopmail.com',
        dni: '1234567890',
        check_in: '01/22/2020 11:01:25 AM',
        check_out: '01/22/2020 12:01:25 AM',
      } 
    ];

    return (
      <Card title="Employee Work Log">
        <Button type="primary" onClick={this.onAddEmployee}>Employee Checkin / Checkout</Button>
        <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
        <EmployeeCheck open={addEmployeeState} contact={{
            'id': 1,
            'dni': '',
          }} onSaveEmployee={this.onSaveEmployee}
              onEmployeeClose={this.onEmployeeClose}/>
      </Card>
    );
  }
}
export default EmployeeWorkLog;
