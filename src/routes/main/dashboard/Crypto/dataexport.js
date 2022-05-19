import React, {Component} from "react";
import {Card, Table, Button, Select, Input,Radio, DatePicker,Divider} from "antd";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Option = Select.Option;
const RadioGroup = Radio.Group;
const columns = [
  {
    title: 'Collage Name',
    dataIndex: 'CollageName',
    key: 'CollageName',
    render: text => <span className="">{text}</span>,
  },
  {
    title: 'Admision Type',
    dataIndex: 'AdmisionType',
    key: 'AdmisionType',
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
  // {
  //   title: 'Action',
  //   key: 'Action',
  //   render: (text, record) => (
  //     <span>
     
  //     <span className="gx-link"><i className="icon icon-edit">Edit</i></span>
  //     <Divider type="vertical"/>
  //      <span className="gx-link"><i className="icon icon-trash">Delete</i></span>
  //      <Divider type="vertical"/>
  //    <span className="gx-link"></span>
  //   </span>
  //   ),
  // }
];

const data = [
  {
    key: '1',
    CollageName: 'SALITER',
    AdmisionType: 'DtoD',
    dni: '1234567890',
    host: 'tom',
    company: 'ASPL',
    type: 'VISITA-Reunion',
    date: '23/01/2020'
  },
  
  
];

class dataexport extends Component {
  state = {
    
    endValue: null,
    endOpen: false,
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
    const { endValue, endOpen} = this.state;
    // function handleChange(value) {
    //   console.log(`selected ${value}`);
    // }
    return (
      <Card title="export data">
           
        <Input className="inline-inputs" placeholder="Search..."/>
        <Select className="gx-mb-3 inline-inputs" defaultValue="SALITER">
        <Option value="SALITER">SALITER</Option>
        <Option value="SETI">SETTY</Option>
        <Option value="SCE">SCE</Option>
        <Option value="SIDS">SIDS</Option>
        <Option value="SSA">SSA</Option>
        <Option value="SID">SID</Option>
        <Option value="SIM">SIM</Option>
        <Option value="SSID">SSID</Option>
        </Select>
        <RadioGroup>
            <Radio value="Reguler">Reguler</Radio>
            <Radio value="DToD">DToD</Radio>
        </RadioGroup>
        <DatePicker className="inline-inputs"
          disabledDate={this.disabledEndDate}
          showTime
          format="DD-MM-YYYY"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
         {/* <Button className="inline-btn" type="primary"><i className="icon icon-search">  Search</i></Button> */}
        {/* <Button className="inline-btn" type="primary">Export Excel<i className="icon icon-map-directions"></i></Button> */}
        
        <Button type="primary" shape="circle" icon="download" size='large' />
        
          
                <div className="row mt-4">
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-primary mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="data"
                    buttonText="Download Excel Sheet"/>
                       
                   <table className="gx-table-responsive" id="table-to-xls" border="2px">
                    <thead className="thead-dark">
                    
                    <tr>
                    
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                   
                         {data.map((res)=>
                            <tr>
                            <td>{res.CollageName}</td>
                            <td>{res.AdmisionType}</td>
                            <td>{res.dni}</td>
                            <td>{res.host}</td>
                            </tr>
                          )}   
                       
                    </tbody>   
                </table>
                
             </div>
            

      </Card>
    );
  }
}

export default dataexport;
