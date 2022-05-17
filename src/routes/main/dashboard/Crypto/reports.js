import React, {Component} from "react";
import {Card, Divider, Icon, Table, Button, Col, Row, Select, Input, DatePicker} from "antd";

const Option = Select.Option;
const columns = [
  {
    title: 'Fullname',
    dataIndex: 'fullname',
    key: 'fullname',
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
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
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
    fullname: 'Tom Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    host: 'tom',
    company: 'ASPL',
    type: 'VISITA-Reunion',
    date: '23/01/2020'
  },
  {
    key: '1',
    fullname: 'Tom Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    host: 'tom',
    company: 'ASPL',
    type: 'VISITA-Reunion',
    date: '23/01/2020'
  },
  {
    key: '1',
    fullname: 'Tom Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    host: 'tom',
    company: 'ASPL',
    type: 'VISITA-Reunion',
    date: '23/01/2020'
  },
  {
    key: '1',
    fullname: 'Tom Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    host: 'tom',
    company: 'ASPL',
    type: 'VISITA-Reunion',
    date: '23/01/2020'
  },
  {
    key: '1',
    fullname: 'Tom Shephard',
    email: 'tom@yopmail.com',
    dni: '1234567890',
    host: 'tom',
    company: 'ASPL',
    type: 'VISITA-Reunion',
    date: '23/01/2020'
  }
  
];

class Reports extends Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = (value) => {
    this.onChange('startValue', value);
  };

  onEndChange = (value) => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({endOpen: true});
    }
  };

  handleEndOpenChange = (open) => {
    this.setState({endOpen: open});
  };

  render() {
    const {startValue, endValue, endOpen} = this.state;
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <Card title="Statistics">
        <Input className="inline-inputs"/>
        <Select className="gx-mb-3 inline-inputs" defaultValue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Visit Report</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <DatePicker className="gx-mb-3 inline-inputs"
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker className="inline-inputs"
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
        <Button className="inline-btn" type="primary">Get Report</Button>
        <Button className="inline-btn" type="primary">Export Excel</Button>
        <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
      </Card>
    );
  }
}

export default Reports;
