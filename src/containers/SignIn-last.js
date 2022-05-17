import React, {useEffect} from "react";
import {Button, Form, Input, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

import {
  hideMessage,
  showAuthLoader,
  userSignIn,
} from "appRedux/actions/Auth";

// import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

const SignIn =(props)=> {

  const dispatch = useDispatch();
  const {loader, alertMessage, showMessage,authUser}= useSelector(({auth}) => auth);
  const history = useHistory();

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
       dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push('/');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(showAuthLoader());
        dispatch(userSignIn(values));
      }
    });
  };



    const {getFieldDecorator} = props.form;

    return (
      <div className="gx-app-login-wrap" >
        <div className="gx-app-login-container">
          <div className="gx-login-main-content" >
            <div className="gx-login-content">
            
              <div className="gx-login-header gx-text-center">
              <img alt="logo" style={{marginBottom:'10%'}} src={require("assets/images/logo.png")}></img>
              <h1 className="gx-login-title">Login</h1>
              <hr/>
              </div>
              <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
                  <FormItem>
                    {getFieldDecorator('email', {
                      initialValue: "demo@example.com",
                      rules: [{
                        required: true, type: 'email', message: 'The input is not valid E-mail!',
                      }],
                    })(
                      <Input placeholder="Email"/>
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      initialValue: "demo#123",
                      rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                      <Input type="password" placeholder="Password"/>
                    )}
                  </FormItem>
                  <FormItem>
                    <Link className="gx-login-form-forgot" to="forgot-password">Forgot password?</Link>
                  </FormItem>
                  <FormItem className="gx-text-center">
                    <Button type="primary" htmlType="submit">
                    Login
                    </Button>
                  </FormItem>
                </Form>
            </div>

            {loader ?
              <div className="gx-loader-view">
                <CircularProgress/>
              </div> : null}
            {showMessage ?
              message.error(alertMessage.toString()) : null}
          </div>
        </div>
      </div>
    );
  };

const WrappedNormalLoginForm = Form.create()(SignIn);

export default WrappedNormalLoginForm;
