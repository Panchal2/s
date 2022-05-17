import React, { Component } from "react";
// import {Col, Row, Card, Table, Button} from "antd";
import {Row, Card, Table, Button} from "antd";

// import {Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";
// import {increamentData, lineData} from "../../Metrics/data";
// import ChartCard from "components/dashboard/Crypto/ChartCard";
import Auxiliary from "util/Auxiliary";
// import Portfolio from "components/dashboard/Crypto/Portfolio";
// import BalanceHistory from "components/dashboard/Crypto/BalanceHistory";
// import SendMoney from "components/dashboard/Crypto/SendMoney";
// import RewardCard from "components/dashboard/Crypto/RewardCard";
// import CurrencyCalculator from "components/dashboard/Crypto/CurrencyCalculator";
// import CryptoNews from "components/dashboard/Crypto/CryptoNews";
// import DownloadMobileApps from "components/dashboard/Crypto/DownloadMobileApps";
// import OrderHistory from "components/dashboard/Crypto/OrderHistory";
// import IconWithTextCard from "components/Metrics/IconWithTextCard";
// import BuildingCard from "components/Widgets/BuildingCard";
// import TinyBarChart from "../../../extensions/charts/recharts/bar/Components/TinyBarChart";
// import PieChartWithBrokenDownSlices from "../../../extensions/charts/amchart/pie/Components/PieChartWithBrokenDownSlices";

const columns = [{
  title: 'Company Name',
  dataIndex: 'cname',
  // width: 100,
}, {
  title: 'POC Name',
  dataIndex: 'pocname',
  // width: 100,
}, {
  title: 'Title',
  dataIndex: 'title',
}, {
  title: 'Address',
  dataIndex: 'address',
}, {
  title: 'Phone Number',
  dataIndex: 'phone',
}, {
  title: 'Email',
  dataIndex: 'email',
}, {
  title: 'Manage',
  key: 'action',
  render: (text, record) => (
    <span>
      {/* <a style={{ marginRight: 16 }}>Delete {record.name}</a> */}
      <a>EDIT</a>
    </span>
  ),
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    cname: `ASPL ${i}`,
    pocname: 'Project1',
    title : 'Incharge',
    address: `London, Park Lane no. ${i}`,
    phone : 9876543210,
    email : 'profile@kms.com'
  });
}

class Addprofiler extends Component {

render(){
  
  return (
    <Auxiliary>
      <Row>
        <Card title="Profile Managment">
          <Button type="primary" icon="add" >
            <i className="icon icon-add"></i>
          </Button>
          <Table className="gx-table-responsive" columns={columns} dataSource={data} pagination={{pageSize: 50}}
              scroll={{y: 240}}/>
        </Card>
      </Row>
    </Auxiliary>
  );
}
  

}
export default Addprofiler;
