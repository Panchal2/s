import React, {Component} from "react";
import {Col, Row} from "antd";

import LineIndicator from "components/dashboard/CRM/LineIndicator";
import Auxiliary from "util/Auxiliary";
import Widget from "components/Widget/index";
import AddVisit from "components/modal/AddVisit";
import {Link} from "react-router-dom";

class Dashboard extends Component {

  onAddVisit = () => {
    this.setState({addVisitState: true});
  };
  onVisitClose = () => {
    this.setState({addVisitState: false});
  };

  onAddIdentity = () => {
    this.setState({addIdentityState: true});
  };
  onIdentityClose = () => {
    this.setState({addIdentityState: false});
  };

  onAddEmployee = () => {
    this.setState({addEmployeeState: true});
  };
  onEmployeeClose = () => {
    this.setState({addEmployeeState: false});
  };

  onAddProcess = () => {
    this.setState({addProcessState: true});
  };
  onProcessClose = () => {
    this.setState({addProcessState: false});
  };

  constructor() {
    super();
    this.state = {
      addVisitState: false,
    }
  }

  render() {
    const {addVisitState} = this.state;

    return (
      <Auxiliary>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
          
              <Row>
               
                <Col lg={24} md={24} sm={24} xs={24}>
              
                <div className="gx-card-overview">
                    <div className="gx-overview-row">
                      <div className="gx-line-indicator-col">
                        <h2 className="h4 gx-card-title">Overview</h2>
                        <ul className="gx-line-indicator">
                          <li>
                            <LineIndicator width="25%" title="SALITER" color="purple" value="25%"/>
                          </li>
                          <li>
                            <LineIndicator width="40%" title="SETI" color="green" value="40%"/>
                          </li>
                          <li>
                            <LineIndicator width="28%" title="SCE" color="yellow" value="28%"/>
                          </li>
                          <li>
                            <LineIndicator width="18%" title="Others" color="grey" value="18%"/>
                          </li>
                        </ul>
                      </div>
                      <div className="gx-overview-description">
                        <div className="gx-revenu gx-revenu-total">
                          <h1>2,650</h1>
                          <span className="gx-fs-md">Total Admission</span>
                        </div>

                        <div className="gx-revenu">
                          <div className="gx-revenu-row">
                            <div className="gx-revenu-col">
                              <h3>23</h3>
                              <span className="gx-fs-sm">Reguler</span>
                            </div>

                            <div className="gx-revenu-col">
                              <h3>07</h3>
                              <span className="gx-fs-sm">D2D</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="gx-map-col">
                      
                       
                      </div>
                    </div>
                  </div>
                </Col>
               
              </Row>
           
          </Col>
        </Row>

        <Row>
          <Col xl={6} lg={12} md={12} sm={12} xs={24}>
            <Widget styleName="gx-blue-cyan-gradient gx-text-white gx-card-1367-p">
              <div className="gx-flex-row gx-justify-content-between gx-mb-2">
                <i className={`icon icon-contacts gx-fs-xxl gx-mr-2`} style={{fontSize: 40}}/>
               <Link to="/main/dashboard/identities">
                  <i className="icon icon-long-arrow-right gx-fs-xxl arrow"/>
                  </Link>
                <AddVisit open={addVisitState} contact={{
                    'id': 1,
                    'dni': '',
                    'company_name': '',
                    'host_name': '',
                    'procedure': '',
                  }} onSaveVisit={this.onSaveVisit}
                      onVisitClose={this.onVisitClose}/>
              </div>
              <h2 className="gx-mb-0 gx-text-white">New Admission</h2>
            </Widget>
          </Col>

          <Col xl={6} lg={12} md={12} sm={12} xs={24}>
            <Widget styleName="gx-blue-cyan-gradient gx-text-white gx-card-1367-p">
              <div className="gx-flex-row gx-justify-content-between gx-mb-2">
                <i className={`icon icon-search gx-fs-xxl gx-mr-2`} style={{fontSize: 40}}/>
                
                  <i className="icon icon-long-arrow gx-fs-xxl arrow"/>
               
              
              </div>
              <h2 className="gx-mb-0 gx-text-white">Search</h2>
            </Widget>
          </Col>

        </Row>
      </Auxiliary>
    );
  }
}

export default Dashboard;
