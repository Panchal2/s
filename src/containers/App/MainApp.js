import React from "react";
import {Layout} from "antd";

import Sidebar from "../Sidebar/index";

import BelowHeader from "../Topbar/BelowHeader/index";

import {footerText} from "util/config";
import App from "routes/index";
// import Customizer from "containers/Customizer";
import {useSelector} from "react-redux";
import {
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,

  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE
} from "../../constants/ThemeSetting";

import {useRouteMatch} from "react-router-dom";

const {Content, Footer} = Layout;

const MainApp = () => {

  const {width, navStyle} = useSelector(({settings}) => settings);
  const match = useRouteMatch();

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
     
        
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
   
      default:
        return '"gx-container-wrap';
    }
  };
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      
      case NAV_STYLE_BELOW_HEADER :
        return <BelowHeader/>;
      default :
        return null;
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar/>;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED :
        return <Sidebar/>;
      case NAV_STYLE_DRAWER :
        return <Sidebar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar/>;
      default :
        return null;
    }
  };


  return (
    <Layout className="gx-app-layout">
      {getSidebar(navStyle, width)}
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)} `}>
          <App match={match}/>
          <Footer>
            <div className="gx-layout-footer-content">
              {footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
      {/* <Customizer/> */}
    </Layout>
  )
};
export default MainApp;

