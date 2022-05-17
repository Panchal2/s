import React, {Component} from "react";
import {Card, Divider, Icon, Table, Button, Col, Row, Select, Input, DatePicker, Tabs} from "antd";
import { FaDownload } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {baseURL} from './../../../../util/config';
import DateWithoutTimeHelper from "./../../../helper/DateWithoutTimeHelper";
import TimeWithoutDateHelper from "./../../../helper/TimeWithoutDateHelper";
import DateForGetReport from "./../../../helper/DateForGetReport";

import {get_documents,hideMessage,setstatustoinitial,showDocumentsLoader,get_reportdocument} from "./../../../../appRedux/actions/DocumentsActions";
import CircularProgress from "./../../../../components/CircularProgress/index";

var filterBy = '';
// let userdata = localStorage.getItem('user_id');
// let userData = JSON.parse(userdata);
// let userId = userData['id'];
let userId = '';
// console.log('USerB =>', userId);

const { TabPane } = Tabs;

class Globalsearch extends Component {
  get_documentsById(pageNumber = '', sortBy = '', filterBy = '', perPage = '10'){
    if(this.props.status == 'Initial' || (pageNumber == '' && sortBy == '' && filterBy != '' && perPage != '')){
      this.props.get_documents({'pageNumber': 1, sortBy : '+DocumentID', 'filterBy': filterBy, 'perPage' : perPage});
      } else {
        if (pageNumber == '') {
          pageNumber = 1;
        }
        this.props.get_documents({'pageNumber': pageNumber, 'sortBy': sortBy, 'filterBy': filterBy, 'perPage' : perPage});
      }
  }

  componentDidMount(){
      this.props.setstatustoinitial();
      this.get_documentsById()
  }
  componentDidUpdate(){
    console.log('Globaldata =>', this.props.globaldata);
  }

  handleReporttypeChange = (e) => {
    var dniNumber = this.state.dni;
    var currentReport = this.state.reportType;
    var startingDate = DateForGetReport(this.state.startValue);
    var endingDate = DateForGetReport(this.state.endValue);
    var condition = {
      dniNumber : dniNumber,
      currentReport : currentReport,
      startingDate : startingDate,
      endingDate : endingDate
    }
    this.props.get_reportdocument(condition);
  };

  handleFilterChange = (e) => {
    // var currentDocument = this.state.documentType;
    var pagesize = this.state.pagination.pageSize;
    this.get_documentsById('', '', filterBy, pagesize);
  };

  handleDocumentChange = (value) => {
    var selected_value = `${value}`;
    filterBy = selected_value;
    this.setState({documentType: selected_value});
    console.log(selected_value);
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    pager.pageSize = pagination.pageSize;
    this.setState({
      pagination: pager,
    });

    var sortBy = '';
    var currentDocument = this.state.documentType;
    if(sorter.order == 'ascend') {
      sortBy = '+'+sorter.field;
    } else if(sorter.order == 'descend') {
      sortBy = '-'+sorter.field;
    }
    this.get_documentsById(pagination.current, sortBy, currentDocument, pagination.pageSize);
  };

  onDNIChange = (value) => {
    this.setState({dni: value});
  }

  constructor() {
    super();
    this.state = {
      pagination: {
        pageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '30', '40'],
      },
      loading: false,
      documentType: '',
      dni: '',
      startValue: '',
      endValue: '',
      endOpen: false,
    }
  }

  //Downloading Document in pdf file format
  downloadDocumentData = (e) => {

    let userdata = localStorage.getItem('user_id');
    if (userdata != '' && userdata != null)
    {
        let userData = JSON.parse(userdata);
        if((userData != '' && userData!= null) && userData['id'] != undefined)
        {
            userId = userData['id'];
        }    
    }

    var documentData = this.props.getDocumentsData.DocumentList.find((singleDocument) => {
      return singleDocument.DocumentID == e.target.value;
    })

    var filename = documentData.DocumentName;
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(documentData)
      };
      /*const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
      const data = await response.json();*/
    fetch(baseURL + 'DownloadDocument?licenceId='+userId, requestOptions)
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = filename;
          a.click();
        });
        // window.location.href = response.url;
    });
  }

  //Export Excel in csv file format
  handleExportExcel = (e) => {

    var dniNumber = this.state.dni;
    var startingDate = DateForGetReport(this.state.startValue);
    var endingDate = DateForGetReport(this.state.endValue);

    fetch(baseURL + 'ExportDocumentExcel?licenseId='+userId+'&Startdate='+startingDate+'&Enddate='+endingDate+'&DNI='+dniNumber)
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = dniNumber+'_'+startingDate+'_'+endingDate + '.csv';
          a.click();
        });
        // window.location.href = response.url;
    });
  }


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
    var documentsData = this.props.getDocumentsData;
    var documentData = '';

    if(!documentsData)
    {
        // Object is empty (Would return true in this example)
    }
    else
    {
        documentData = documentsData.DocumentList;
        // console.log('documentData => ', documentData)

        const pagination = { ...this.state.pagination };
        var old_pagination_total = pagination.total;
        
        pagination.total = documentsData.TotalCount;
        pagination.current = this.state.pagination.current ? this.state.pagination.current : 1;

        var start_record = '';
        var end_record = '';
        if(pagination.current == 1) {
          start_record = 1;
          end_record = pagination.pageSize;
        } else {
          start_record = ((pagination.current -1) * pagination.pageSize) + 1;
          end_record = pagination.current * pagination.pageSize;
          if(end_record > pagination.total) {
            end_record = pagination.total;
          }
        }
        
        if(pagination.current != '' && this.state.pagination.current == undefined)
        {
          this.setState({
            pagination,
          });
        }
        else if(filterBy != '') {
          if(pagination.total != '' && pagination.total != old_pagination_total) {
            this.setState({
              pagination
            });
          }
        }
    }
    
    const Option = Select.Option;
    
    const columns1 = [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Surname',
        dataIndex: 'FatherSurname',
        key: 'FatherSurname',
        sorter: true,
        render: (text, record) => <span className="">{record.FatherSurname+' '+record.MotherSurname}</span>,
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'DNI',
        dataIndex: 'DNI',
        key: 'DNI',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Identifier',
        dataIndex: 'Identifier',
        key: 'Identifier',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Date',
        dataIndex: 'RegisterDate',
        key: 'RegisterDate',
        sorter: true,
        render: text => DateWithoutTimeHelper(text),
      },
      {
        title: 'Details',
        key: 'details',
        fixed: 'right',
        render: (text, record) => (
          <span>
          {/* <span className="gx-link"><Button onClick={this.handleEditIdentity} value={record.id} className="arrow-btn gx-link">Edit</Button></span> */}
          <span className="gx-link"><Button onClick={this.handleEditIdentity} value={record.id} className="arrow-btn gx-link">Ver</Button></span>

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

    const columns2 = [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Surname',
        dataIndex: 'FullSurName',
        key: 'FullSurName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'DNI',
        dataIndex: 'DNI',
        key: 'DNI',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Host',
        dataIndex: 'HostName',
        key: 'HostName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Company',
        dataIndex: 'CompanyName',
        key: 'CompanyName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
        sorter: true,
        render: text => DateWithoutTimeHelper(text),
      },
      {
        title: 'Visit Time',
        dataIndex: 'Date',
        key: 'Date',
        sorter: true,
        render: text => TimeWithoutDateHelper(text),
      },
      {
        title: 'Departure Time',
        dataIndex: 'DepartureTime',
        key: 'DepartureTime',
        sorter: true,
        render: text => TimeWithoutDateHelper(text),
      },
      {
        title: 'Document',
        key: 'document',
        fixed: 'right',
        render: (text, record) => (
          <span>
          <span className="gx-link"><Button onClick={this.onAddDocuments} value={record.VisitId} className="arrow-btn gx-link">Detail</Button></span>
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

    const columns3 = [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Surname',
        dataIndex: 'FullSurName',
        key: 'FullSurName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'DNI',
        dataIndex: 'DNI',
        key: 'DNI',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Company',
        dataIndex: 'CompanyName',
        key: 'CompanyName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Date',
        dataIndex: 'procedureDate',
        key: 'procedureDate',
        sorter: true,
        render: text => DateWithoutTimeHelper(text),
      },
      {
        title: 'Time',
        dataIndex: 'procedureDate',
        key: 'procedureDate',
        sorter: true,
        render: text => TimeWithoutDateHelper(text),
      },
      {
        title: 'Document',
        key: 'document',
        render: (text, record) => (
          <span>
          <span className="gx-link"><Button onClick={this.onAddDocuments} value={record.VisitId} className="arrow-btn gx-link">Detail</Button></span>
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

    const columns4 = [
      {
        title: 'Fullname',
        dataIndex: 'FullName',
        key: 'FullName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'DNI',
        dataIndex: 'DNI',
        key: 'DNI',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Total',
        dataIndex: 'TotalExpident',
        key: 'TotalExpident',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Complete',
        dataIndex: 'CompletedExpident',
        key: 'CompletedExpident',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'CreateDate',
        dataIndex: 'Date',
        key: 'Date',
        sorter: true,
        render: text => DateWithoutTimeHelper(text),
      },
      {
        title: 'LastDate',
        dataIndex: 'closeDate',
        key: 'closeDate',
        sorter: true,
        render: text => DateWithoutTimeHelper(text),
      },
      {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Document',
        key: 'document',
        fixed: 'right',
        render: (text, record) => (
          <span>
          <span className="gx-link"><Button onClick={this.onAddDocuments} value={record.VisitId} className="arrow-btn gx-link">Detail</Button></span>
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

    const columns5 = [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Surname',
        dataIndex: 'FullSurName',
        key: 'FullSurName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'DNI',
        dataIndex: 'DNI',
        key: 'DNI',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Date',
        dataIndex: 'procedureDate',
        key: 'procedureDate',
        sorter: true,
        render: text => DateWithoutTimeHelper(text),
      },
      {
        title: 'Visit Time',
        dataIndex: 'procedureDate',
        key: 'procedureDate',
        sorter: true,
        render: text => TimeWithoutDateHelper(text),
      },
      {
        title: 'Document',
        key: 'document',
        render: (text, record) => (
          <span>
          <span className="gx-link"><Button onClick={this.onAddDocuments} value={record.VisitId} className="arrow-btn gx-link">Detail</Button></span>
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

    const columns6 = [
      {
        title: 'Name',
        dataIndex: 'FullName',
        key: 'FullName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'DNI',
        dataIndex: 'DNI',
        key: 'DNI',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Check in',
        dataIndex: 'checkInTime',
        key: 'checkInTime',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Check out',
        dataIndex: 'checkoutTime',
        key: 'checkoutTime',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
    ];

    const columns7 = [
      {
        title: 'Document Name',
        dataIndex: 'DocumentName',
        key: 'DocumentName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Owner Name',
        dataIndex: 'OwnerName',
        key: 'OwnerName',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Owner NIF',
        dataIndex: 'OwnerNIF',
        key: 'OwnerNIF',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Owner Email',
        dataIndex: 'OwnerEmail',
        key: 'OwnerEmail',
        sorter: true,
        render: text => <span className="">{text}</span>,
      },
      {
        title: 'Creation Date',
        dataIndex: 'CreationDate',
        key: 'CreationDate',
        sorter: true,
        render: text => DateWithoutTimeHelper(text),
      },
      {
        title: 'Document Type',
        dataIndex: 'DocumentType',
        key: 'DocumentType',
        sorter: true,
      },
      {
        title: 'Download',
        key: 'download',
        fixed: 'right',
        render: (text, record) => (
          <span>
          <span className="gx-link"><Button className="arrow-btn gx-link" onClick={this.downloadDocumentData} value={record.DocumentID} >Download</Button></span>
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

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        DocumentName: record.DocumentName,
      }),
    };

    const { size } = this.state;

    return (
      <Card title="Search" extra={<div className="card-extra-form"><Input className="inline-inputs" value={this.state.dni} onChange={e => this.onDNIChange(e.target.value)} placeholder="Enter DNI Number"/>
        <DatePicker className="inline-inputs"
          disabledDate={this.disabledStartDate}
          showTime
          format="DD/MM/YYYY"
          value={startValue}
          placeholder="Start Date"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker className="inline-inputs"
          disabledDate={this.disabledEndDate}
          showTime
          format="DD/MM/YYYY"
          value={endValue}
          placeholder="End Date"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
        <Button className="inline-btn" type="primary" onClick={this.handleReporttypeChange}>Get Report</Button>
        <Button className="inline-btn" type="primary" onClick={this.handleExportExcel}>Export Excel</Button></div>}>
        <Tabs defaultActiveKey="1" type="card" size={size}>
          <TabPane tab="Identities list" key="1">
            <Table className="gx-table-responsive custom-identity-table" columns={columns1} dataSource={this.props.globaldata.Identites} loading={this.state.loading}/>
          </TabPane>
          <TabPane tab="Visit list" key="2">
            <Table className="gx-table-responsive custom-identity-table" columns={columns2} dataSource={this.props.globaldata.Visits} loading={this.state.loading} scroll={{ x: 1300 }}/>
          </TabPane>
          <TabPane tab="Procedure" key="3">
            <Table className="gx-table-responsive custom-identity-table" columns={columns3} dataSource={this.props.globaldata.Procedures} loading={this.state.loading}/>
          </TabPane>
          <TabPane tab="Expedient" key="4">
            <Table className="gx-table-responsive custom-identity-table" columns={columns4} dataSource={this.props.globaldata.Expedients} loading={this.state.loading} scroll={{ x: 1300 }}/>
          </TabPane>
          <TabPane tab="Inspection" key="5">
            <Table className="gx-table-responsive custom-identity-table" columns={columns5} dataSource={''} loading={this.state.loading}/>
          </TabPane>
          <TabPane tab="Employee work log" key="6">
            <Table className="gx-table-responsive custom-identity-table" columns={columns6} dataSource={this.props.globaldata.EmployeeLog} loading={this.state.loading}/>
          </TabPane>
          <TabPane tab="Document" key="7">
            <Table className="gx-table-responsive custom-identity-table" columns={columns7} dataSource={''} loading={this.state.loading} scroll={{ x: 1300 }}/>
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

// Object of action creators
const mapDispatchToProps = {
  get_documents,
  hideMessage,
  setstatustoinitial,
  get_reportdocument
}

const mapStateToProps =  state => {
return { 
      getDocumentsData: state.documentsReducers.get_documents_res ,
      loader : state.documentsReducers.loader,
      showSuccessMessage : state.documentsReducers.showSuccessMessage,
      successMessage : state.documentsReducers.successMessage,
      //authUser : state.auth.authUser,
      showMessage : state.documentsReducers.showMessage,
      alertMessage : state.documentsReducers.alertMessage,
      status : state.documentsReducers.status,
      globaldata : state.visitsReducers.globaldata
  }; 
};

// export default Procedure;
export default connect(mapStateToProps,mapDispatchToProps)(Globalsearch);