import React from "react";
import {Avatar, Input, Modal, Row, Col, Select, Radio} from "antd";

import IntlMessages from "util/IntlMessages";

class AddIdentity extends React.Component {
  constructor(props) {
    super(props);

    const {id, dni, company_name, name, identifier, surname, landline, second_surname, card_number, email, mobile, type} = props.contact;
    this.state = {
      id,
      dni,
      company_name,
      name,
      identifier,
      surname,
      landline,
      second_surname,
      card_number,
      email,
      mobile,
      type
    }
  }

  render() {
    const Option = Select.Option;
    const RadioGroup = Radio.Group;
    const plainOptions = ['Adharcard', 'Pancard','marksheet','PhotoID'];
    const adOptions = ['Reguler', 'D2D'];
    const {onSaveIdentity, onIdentityClose, open, contact} = this.props;
    const {id, collage_name,Branch,admissionType,name,mo1,mo2,fmo1,fmo2,schoolName,category,formFee,Agent,documentList,cmo1} = this.state;
    return (
      <Modal title="Add Identity"
        toggle={onIdentityClose} visible={open}
        closable={false}
        onOk={() => {
          if (name === '')
            return;
          onIdentityClose();
          onSaveIdentity(
            {
              'id': id,
              'collage_name': collage_name,
              'Branch': Branch,
              'admissionType': admissionType,
              'name': name,
              'mo1': mo1,
              'mo2': mo2,
              'fmo1': fmo1,
              'fmo2': fmo2,
              'cmo1': cmo1,
              'schoolName': schoolName,
              'category': category,
              'formFee': formFee,
              'Agent': Agent,
              'documentList': documentList
            });
          this.setState({
            'id': id + 1,
            'collage_name': '',
            'Branch': '',
            'admissionType': '',
            'name': '',
            'mo1': '',
            'mo2': '',
            'fmo1': '',
            'fmo2': '',
            'cmo1': '',
            'schoolName': '',
            'mobile': '',
            'formFee': '',
            'Agent': '',
            'documentList': '',
          })

        }}
        onCancel={onIdentityClose}>

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Row>
                <Col lg={24}>
                  Collage Name
                  <Select className="ant-input"
                      onChange={(event) => this.setState({collage_name: event.target.value})}
                      defaultValue="SALITER"
                      margin="none">
                    <Option value="SALITER">SALITER</Option>
                    <Option value="SCE">SCE</Option>
                    <Option value="SIT">SIT</Option>
                  </Select>
                </Col>
                
                <Row>
                <Col lg={24}>Admision Type </Col>
                <Col lg={24}>
              <RadioGroup options={adOptions}/></Col>
              </Row>
                
                <Col lg={12}>
                  <Select className="ant-input"
                        onChange={(event) => this.setState({Branch: event.target.value})}
                        defaultValue="Type (Optional)"
                        margin="none">
                      <Option value="NONE">NONE</Option>
                      <Option value="Mech">Mech</Option>
                      <Option value="AUTO">AUTO</Option>
                      <Option value="CIVIL">CIVIL</Option>
                      <Option value="IT">IT</Option>
                      <Option value="SICHEMT">CHEM</Option>
                      <Option value="MECHA">MECHA</Option>
                      <Option value="EE">EE</Option>
                      <Option value="EC">EC</Option>
                      <Option value="IC">IC</Option>
                      <Option value="CL">CL</Option>
                    </Select>
                  </Col>
              </Row>
            </div>
             <div className="gx-form-group">
               <Row>
               <Col lg={24}>Name </Col>
             <Col lg={8}>
             
             <Input
                    required
                    placeholder="Firstname "
                    onChange={(event) => this.setState({name: event.target.value})}
                    defaultValue={name}
                    margin="none"/>
             </Col>
             <Col lg={8}>
             <Input
                    required
                    placeholder="middlename "
                    onChange={(event) => this.setState({name: event.target.value})}
                    defaultValue={name}
                    margin="none"/>
             </Col>
             <Col lg={8}>
               <Input
                    required
                    placeholder="Lastname "
                    onChange={(event) => this.setState({name: event.target.value})}
                    defaultValue={name}
                    margin="none"/>
             </Col>
             </Row>
             </div>
            <div className="gx-form-group">
              <Row>
                <Col lg={12}>
                <Select className="ant-input"
                      onChange={(event) => this.setState({type: event.target.value})}
                      defaultValue="SALITER"
                      margin="none">
                    <Option value="SALITER">SALITER</Option>
                    <Option value="SCE">SCE</Option>
                    <Option value="SIT">SIT</Option>
                  </Select>
                </Col>
                <Col lg={12}>
                  <Input
                    required
                    placeholder="name "
                    onChange={(event) => this.setState({name: event.target.value})}
                    defaultValue={name}
                    margin="none"/>
                </Col>
              </Row>
            </div>
            <div className="gx-form-group">
              <Row>
                <Col lg={12}>
                  <Input
                    placeholder="mo1"
                    onChange={(event) => this.setState({mo1: event.target.value})}
                    value={mo1}
                    margin="normal"/>
                </Col>
                <Col lg={12}>
                  <Input
                    required
                    placeholder="mo2 (Optional)"
                    onChange={(event) => this.setState({mo2: event.target.value})}
                    defaultValue={mo2}
                    margin="none"/>
                </Col>
              </Row>
            </div>
            <div className="gx-form-group">
              <Row>
                <Col lg={12}>
                  <Input
                    placeholder="fmo1*"
                    onChange={(event) => this.setState({fmo1: event.target.value})}
                    value={fmo1}
                    margin="normal"/>
                </Col>
                <Col lg={12}>
                  <Input
                    required
                    placeholder="fmo2 (Optional)"
                    onChange={(event) => this.setState({fmo2: event.target.value})}
                    defaultValue={fmo2}
                    margin="none"/>
                </Col>
              </Row>
            </div>
            <div className="gx-form-group">
              Form Fee
              <Select className="ant-input"
                      onChange={(event) => this.setState({formFee: event.target.value})}
                      defaultValue="Type (Optional)"
                      margin="none">
                    <Option value="Pending">Pending</Option>
                    <Option value="500">500</Option>
                    <Option value="100">100</Option>
                  </Select>
            </div>
            <div className="gx-form-group">
              <Row>
                <Col lg={24}> 
                Check Mo.
                  <Input
                    placeholder="check Mobile Ex. +34912345678*"
                    onChange={(event) => this.setState({cmo1: event.target.value})}
                    value={cmo1}
                    autosize={{minRows: 2, maxRows: 6}}
                    margin="normal"/>
                </Col>
                <Col lg={24}>
                  Agent
                  <Select className="ant-input"
                      onChange={(event) => this.setState({Agent: event.target.value})}
                      defaultValue="Type (Optional)"
                      margin="none">
                    <Option value="jack">Jack</Option>
                    <Option value="Visit Report">Visit Report</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <div className="gx-form-group">
              Document list
              <RadioGroup options={plainOptions}/>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddIdentity;
