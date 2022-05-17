import React, {useEffect} from "react";
import {Button,Row,Form,Select,Input,message,Checkbox,Radio,Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
  hideMessage,
 
  Get_admission,
} from "appRedux/actions/admissionAction";

import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

const Option =Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const Identity =(props) => {

    const dispatch = useDispatch();
    const {loader, alertMessage, showMessage}= useSelector(({auth}) => auth);
    const {getFieldDecorator} = props.form;

    useEffect(() => {
      if (showMessage) {
        setTimeout(() => {
         dispatch(hideMessage());
        }, 100);
      }
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.form.validateFields((err, values) => {
        dispatch(Get_admission(values));
        console.log(values);
        if (!err) {
          // dispatch(showAuthLoader());
         
        }
        else
        {
          alert("enter data"); 
        }
        //  props.form.resetFields();
      });
    };

    return (
      <Row>
            {/* <Card title="Admission form"> */}
            <div className="gx-app-login-main-content" style={{width:"auto"}}>
            <div className="gx-app-login-content"style={{width:"100%"}}> 
            <Form onSubmit={handleSubmit} className="gx-signin-form gx-form-row0">

             <Row>
               <Col lg={12}>
                  <FormItem label="Collage">
                      {getFieldDecorator('collageName', {
                      rules: [
                          {required: false, message: 'Please select your Collage!'},
                      ],
                      })(
                      <Select placeholder="SALITER">
                          <Option value="SALITER">SALITER</Option>
                          <Option value="SCE">SCE</Option>
                          <Option value="SETTY">SETTY</Option>
                      </Select>
                      )}
                  </FormItem>
                </Col>
                <Col lg={12}>
                  <FormItem label="Branch">
                      {getFieldDecorator('branch', {
                      rules: [
                          {required: false, message: 'Please select your Branch!'},
                      ],
                      })(
                      <Select placeholder="CL">
                          <Option value="CL">CL</Option>
                          <Option value="AUTO">AUTO</Option>
                          <Option value="IC">IC</Option>
                          <Option value="EC">EC</Option>
                          <Option value="EE">EE</Option>
                          <Option value="CSE">CSE</Option>
                          <Option value="MECHA">MECHA</Option>
                          <Option value="CHEM">CHEM</Option>
                          <Option value="MECH">MECH</Option>
                          <Option value="IT">IT</Option>
                          <Option value="ICT">ICT</Option>
                      </Select>
                      )}
                  </FormItem>
                </Col>
              </Row>
                <Col lg={24}>
                  
                  <FormItem label="Admission Type" >
                    {getFieldDecorator('AdmisionType', {
                    rules: [
                        {required: true, message: 'Please select Admission Type!'},
                    ],
                    })(
                            <RadioGroup>
                              <Radio value="Reguler">Reguler</Radio>
                              <Radio value="D2D">D2D</Radio>
                            </RadioGroup>
                    )}
                  </FormItem>
                  
                </Col>
<hr/>
<Col><h3>Detail</h3></Col>
                <Row>
                  <Col lg={24}>
                  <FormItem label="Name">
                    {getFieldDecorator('fname', {
                      initialValue: "",
                      rules: [{
                        required: true, message: 'Enter Name',
                      }],
                    })(
                      <Input placeholder="Name"/>
                    )}
                  </FormItem></Col>
                 
              </Row>

              <Row>
                  <Col lg={8}>
                  <FormItem label="Mobile number">
                    {getFieldDecorator('Mo1', {
                      initialValue: "",
                      rules: [{
                        required: false, message: 'student Number ',
                      }],
                    })(
                      <Input placeholder="Student number"/>
                    )}
                  </FormItem></Col>
                  <Col lg={8}>
                  <FormItem label="Parents Mobile number1">
                    {getFieldDecorator('FMo1', {
                      initialValue: "",
                      rules: [{
                        required: false, message: 'Enter Parent Number ',
                      }],
                    })(
                      <Input placeholder="Parent number"/>
                    )}
                  </FormItem>
                  </Col>
            
    
                  <Col lg={8}>
                  <FormItem label="extra number">
                    {getFieldDecorator('EM0', {
                      initialValue: "",
                      rules: [{
                        required:true, message: 'Enter extra  Mo.Number2',
                      }],
                    })(
                      <Input placeholder="Extra MobileNumber"/>
                    )}
                  </FormItem>
                  </Col>
              </Row>
              <Row>
              <Col lg={12}>
                  <FormItem label="School Name">
                    {getFieldDecorator('Schoolname', {
                      initialValue: "",
                      rules: [{
                        required: true, message: 'Enter school Name',
                      }],
                    })(
                      <Input placeholder="schoolName"/>
                    )}
                  </FormItem></Col>

                  <Col lg={12}><FormItem label="District">
                      {getFieldDecorator('District', {
                      rules: [
                          {required: false, message: 'Please select your District!'},
                      ],
                      })(
                      <Select placeholder="District">
                          <Option value="CL">CL</Option>
                          <Option value="AUTO">AUTO</Option>
                          <Option value="IC">IC</Option>
                          <Option value="EC">EC</Option>
                          <Option value="EE">EE</Option>
                          <Option value="CSE">CSE</Option>
                          <Option value="MECHA">MECHA</Option>
                          <Option value="CHEM">CHEM</Option>
                          <Option value="MECH">MECH</Option>
                          <Option value="IT">IT</Option>
                          <Option value="ICT">ICT</Option>
                      </Select>
                      )}
                  </FormItem></Col>
                  </Row>
                  <Col lg={24}>
                  <FormItem label="Category">
                    {getFieldDecorator('CastCategory', {
                    rules: [
                        {required: true, message: 'Please select Category!'},
                    ],
                    })(
                            <RadioGroup>
                              <Radio value="General/Open">General/Open</Radio>
                              <Radio value="EWS">EWS</Radio>
                              <Radio value="SEBC">SEBC</Radio>
                              <Radio value="SC">SC</Radio>
                              <Radio value="ST">ST</Radio>
                            </RadioGroup>
                    )}
                  </FormItem>
                </Col>
                      <hr/>
                  <Row>
                    <Col lg={24}>Cheque Detail
                    <br/> cheque1</Col>
                    <Col lg={8}>
                      <FormItem >
                      {getFieldDecorator('Chk1', {
                        initialValue: "",
                        rules: [{
                          required: false, message: 'Enter Check.Number1',
                        }],
                      })(
                        <Input placeholder="CheckNumber1 "/>
                      )}
                      </FormItem>
                    </Col>
                    <Col lg={8}>
                    <FormItem >
                      {getFieldDecorator('Bank1', {
                        initialValue: "",
                        rules: [{
                          required: false, message: 'Enter Bank Name',
                        }],
                      })(
                        <Input placeholder="Bank Name "/>
                      )}
                      </FormItem>
                    </Col>
                    <Col lg={8}>
                    <FormItem >
                      {getFieldDecorator('Amount1', {
                        initialValue: "",
                        rules: [{
                          required: false, message: 'Enter Amount',
                        }],
                      })(
                        <Input placeholder="Amount "/>
                      )}
                      </FormItem>
                    </Col>
                    
                    <Col lg={24}>cheque2<br/></Col>
                    <Col lg={8}>
                      <FormItem >
                      {getFieldDecorator('Chk2', {
                        initialValue: "",
                        rules: [{
                          required: false, message: 'Enter Check.Number2',
                        }],
                      })(
                        <Input placeholder="CheckNumber2 "/>
                      )}
                      </FormItem>
                    </Col>
                    <Col lg={8}>
                    <FormItem >
                      {getFieldDecorator('Bank2', {
                        initialValue: "",
                        rules: [{
                          required: false, message: 'Enter Bank Name2',
                        }],
                      })(
                        <Input placeholder="Bank NAme 2"/>
                      )}
                      </FormItem>
                    </Col>
                    <Col lg={8}>
                    <FormItem >
                      {getFieldDecorator('Amount2', {
                        initialValue: "",
                        rules: [{
                          required: false, message: 'Enter Amount2',
                        }],
                      })(
                        <Input placeholder="Amount2 "/>
                      )}
                      </FormItem>
                    </Col>

                    
                    <Col lg={24}>
                    <FormItem label="Check Mobile number">
                      {getFieldDecorator('ChkMo', {
                        initialValue: "",
                        rules: [{
                          required: false, message: 'Enter checqe Mo.number',
                        }],
                      })(
                        <Input placeholder="Chque mo.number"/>
                      )}
                      </FormItem>
                    </Col>
                  </Row>
                  <hr/>
              <FormItem label="Document">
                  {getFieldDecorator('Document',{
                  rules: [
                      {required: true, message: 'Please select your Document!'},
                  ],
                  })(
                  <CheckboxGroup>
                    <Row>
                    <Col lg={12}>
                      <Checkbox value="Photo">Photo</Checkbox><br/>
                      <Checkbox value="Aadharcard">Aadharcard</Checkbox><br/>
                      <Checkbox value="SSC Marksheet">SSC Marksheet</Checkbox><br/>
                      <Checkbox value="HSC Marksheet">HSC Marksheet</Checkbox><br/>
                      <Checkbox value="School LC">School LC</Checkbox><br/>
                      <Checkbox value="Transfer certificate/Migration Certificate">Transfer certificate/Migration Certificate</Checkbox>
                      </Col>
                      <Col lg={12}>
                      <Checkbox value="MArksheet JEE/GUJCAT">MArksheet JEE/GUJCAT</Checkbox><br/>
                      <Checkbox value="Marksheet NATA ">Marksheet NATA</Checkbox><br/>
                      <Checkbox value="ACPC Registartion Copy">ACPC Registartion Copy</Checkbox><br/>
                      <Checkbox value="Diploma All Marksheet "> Diploma All Marksheet</Checkbox><br/>
                      <Checkbox value="Provisional Certificate">Provisional Certificate</Checkbox></Col></Row>
                  </CheckboxGroup>
                  )}
              </FormItem>
             <Row>
             <hr/>
             <Col lg={8}>
                    <FormItem label="Form fee">
                      {getFieldDecorator('Formfee', {
                        initialValue: "",
                        rules: [{
                          required: false, message:'Enter amount',
                        }],
                      })(
                        <Input  type="number" placeholder="Form Fee"/>
                      )}
                      </FormItem>
                    </Col>
                     <Col lg={7}>
                    <FormItem label="Remark">
                      {getFieldDecorator('Remark', {
                        initialValue: "",
                        rules: [{
                          required: false, message:'Enter Remark',
                        }],
                      })(
                        <Input  type="Text" placeholder="Remark"/>
                      )}
                      </FormItem>
                    </Col>
                    <Col lg={8}>
                    <FormItem label="Agent">
                    {getFieldDecorator('Agent', {
                    rules: [
                        {required: true, message: 'Please selectAgent!'},
                    ],
                    })(
                            <RadioGroup>
                              <Radio value="SAL">SAL</Radio>
                              <Radio value="Viral">Viral</Radio>
                              <Radio value="Vikram">Vikram</Radio>
                              <Radio value="Brijesh Seth">Brijesh Seth</Radio>
                              <Radio value="Ag1">Ag1</Radio>
                              <Radio value="Ag2">Ag2</Radio>
                            </RadioGroup>
                    )}
                  </FormItem>
                    </Col>
                    </Row>
              <center>
              <FormItem >
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                 submit
                </Button>
              
              </FormItem>
              
              </center>
             
            
            </Form>
          </div>

          {loader ?
            <div className="gx-loader-view">
              <CircularProgress/>
            </div> : null}
          {showMessage ?
            message.error(alertMessage.toString()) : null}
      </div>
    {/* </Card> */}
    
    </Row>
    );
  };


const WrappedNormalLoginForm = Form.create()(Identity);

export default WrappedNormalLoginForm;
