import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";

// import {

//   NAV_STYLE_BELOW_HEADER,
// } from "../../constants/ThemeSetting";




const HorizontalNav = () => {


  const pathname = useSelector(({settings}) => settings.pathname);

  // const getNavStyleSubMenuClass = (navStyle) => {
  //   switch () {
    
  //     case NAV_STYLE_BELOW_HEADER:
  //       return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      
  //     default:
  //       return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";

  //   }
  // };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (

    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal">
        <Menu.Item key="main/dashboard/crypto">
              <Link to="/main/dashboard/crypto">
                <i className="icon icon-dasbhoard"/>
                Home
              </Link>
          </Menu.Item>

          <Menu.Item key="main/dashboard/search data">
              <Link to="">
                <i className="icon icon-contacts"/>
                  Admission
              </Link>
          </Menu.Item>

          <Menu.Item key="main/dashboard/search data">
              <Link to="">
                <i className="icon icon-home"/>
                  Collage
              </Link>
          </Menu.Item>
      {/* <SubMenu className={getNavStyleSubMenuClass(navStyle)} key="main"
               title={<IntlMessages id="sidebar.main"/>}>
            
        <SubMenu className="gx-menu-horizontal" key="dashboard"
                 title={<span> <i className="icon icon-dasbhoard"/>
                         <IntlMessages id="sidebar.dashboard"/></span>}>
          <Menu.Item key="main/dashboard/crypto">
            <Link to="/main/dashboard/crypto">
              <i className="icon icon-crypto"/>
              <IntlMessages id="sidebar.dashboard.crypto"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="main/dashboard/crm">
            <Link to="/main/dashboard/crm">
              <i className="icon icon-crm"/>
              <IntlMessages id="sidebar.dashboard.crm"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="main/dashboard/listing">
            <Link to="/main/dashboard/listing">
              <i className="icon icon-listing-dbrd"/>
              <IntlMessages id="sidebar.dashboard.listing"/>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="main/widgets">
          <Link to="/main/widgets"><i className="icon icon-widgets"/>
            <IntlMessages id="sidebar.widgets"/></Link>
        </Menu.Item>

        <Menu.Item key="main/metrics">
          <Link to="/main/metrics"><i className="icon icon-apps"/>
            <IntlMessages id="sidebar.metrics"/></Link>
        </Menu.Item>

        

      </SubMenu> */}

      

      {/* <SubMenu className={getNavStyleSubMenuClass(navStyle)} key="components"
               title={<IntlMessages id="sidebar.components"/>}>

        <SubMenu className="gx-menu-horizontal" key="general" title={
          <span>
                  <i className="icon icon-all-contacts"/>
                   <IntlMessages id="sidebar.components.general"/>
              </span>}>
          <Menu.Item key="components/general/button">
            <Link to="/components/general/button">
              <IntlMessages id="sidebar.general.button"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="components/general/icon">
            <Link to="/components/general/icon">
              <IntlMessages id="sidebar.general.icon"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="navigation" title={
          <span>
                  <i className="icon icon-navigation"/>
                  <IntlMessages id="sidebar.components.navigation"/>
              </span>}>
          <Menu.Item key="components/navigation/affix">
            <Link to="/components/navigation/affix">
              <IntlMessages
                id="sidebar.navigation.affix"/></Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/breadcrumb">
            <Link to="/components/navigation/breadcrumb">
              <IntlMessages
                id="sidebar.navigation.breadcrumb"/></Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/dropdown">
            <Link to="/components/navigation/dropdown">
              <IntlMessages
                id="sidebar.navigation.dropdown"/></Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/menu">
            <Link to="/components/navigation/menu">
              <IntlMessages
                id="sidebar.navigation.menu"/></Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/pagination">
            <Link to="/components/navigation/pagination">
              <IntlMessages
                id="sidebar.navigation.pagination"/></Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/steps">
            <Link to="/components/navigation/steps">
              <IntlMessages
                id="sidebar.navigation.steps"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="dataEntry" title={
          <span>
                  <i className="icon icon-data-entry"/>
                  <IntlMessages id="sidebar.components.dataEntry"/>
              </span>}>
          <Menu.Item key="components/dataEntry/autoComplete">
            <Link to="/components/dataEntry/autoComplete">
              <IntlMessages
                id="sidebar.dataEntry.autoComplete"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/checkbox">
            <Link to="/components/dataEntry/checkbox">
              <IntlMessages
                id="sidebar.dataEntry.checkbox"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/cascader">
            <Link to="/components/dataEntry/cascader">
              <IntlMessages
                id="sidebar.dataEntry.cascader"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/datePicker">
            <Link to="/components/dataEntry/datePicker">
              <IntlMessages
                id="sidebar.dataEntry.datePicker"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/form">
            <Link to="/components/dataEntry/form">
              <IntlMessages
                id="sidebar.dataEntry.form"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/inputNumber">
            <Link to="/components/dataEntry/inputNumber">
              <IntlMessages
                id="sidebar.dataEntry.inputNumber"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/input">
            <Link to="/components/dataEntry/input">
              <IntlMessages
                id="sidebar.dataEntry.input"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/mention">
            <Link to="/components/dataEntry/mention">
              <IntlMessages
                id="sidebar.dataEntry.mention"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/rate">
            <Link to="/components/dataEntry/rate">
              <IntlMessages
                id="sidebar.dataEntry.rate"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/radio">
            <Link to="/components/dataEntry/radio">
              <IntlMessages
                id="sidebar.dataEntry.radio"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/switch">
            <Link to="/components/dataEntry/switch">
              <IntlMessages
                id="sidebar.dataEntry.switch"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/slider">
            <Link to="/components/dataEntry/slider">
              <IntlMessages
                id="sidebar.dataEntry.slider"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/select">
            <Link to="/components/dataEntry/select">
              <IntlMessages
                id="sidebar.dataEntry.select"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/treeSelect">
            <Link to="/components/dataEntry/treeSelect">
              <IntlMessages
                id="sidebar.dataEntry.treeSelect"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/transfer">
            <Link to="/components/dataEntry/transfer">
              <IntlMessages
                id="sidebar.dataEntry.transfer"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/timePicker">
            <Link to="/components/dataEntry/timePicker">
              <IntlMessages
                id="sidebar.dataEntry.timePicker"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataEntry/upload">
            <Link to="/components/dataEntry/upload">
              <IntlMessages
                id="sidebar.dataEntry.upload"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="dataDisplay" title={
          <span>
                  <i className="icon icon-data-display"/>

                    <IntlMessages id="sidebar.components.dataDisplay"/>

              </span>}>
          <Menu.Item key="components/dataDisplay/avatar">
            <Link to="/components/dataDisplay/avatar">
              <IntlMessages
                id="sidebar.dataDisplay.avatar"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/badge">
            <Link to="/components/dataDisplay/badge">
              <IntlMessages
                id="sidebar.dataDisplay.badge"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/collapse">
            <Link to="/components/dataDisplay/collapse">
              <IntlMessages
                id="sidebar.dataDisplay.collapse"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/carousel">
            <Link to="/components/dataDisplay/carousel">
              <IntlMessages
                id="sidebar.dataDisplay.carousel"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/card">
            <Link to="/components/dataDisplay/card">
              <IntlMessages
                id="sidebar.dataDisplay.card"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/calendar">
            <Link to="/components/dataDisplay/calendar">
              <IntlMessages
                id="sidebar.dataDisplay.calender"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/list">
            <Link to="/components/dataDisplay/list">
              <IntlMessages
                id="sidebar.dataDisplay.list"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/popover">
            <Link to="/components/dataDisplay/popover">
              <IntlMessages
                id="sidebar.dataDisplay.popover"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tree">
            <Link to="/components/dataDisplay/tree">
              <IntlMessages
                id="sidebar.dataDisplay.tree"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tooltip">
            <Link to="/components/dataDisplay/tooltip">
              <IntlMessages
                id="sidebar.dataDisplay.toolTips"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/timeline">
            <Link to="/components/dataDisplay/timeline">
              <IntlMessages
                id="sidebar.dataDisplay.timeLine"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tag">
            <Link to="/components/dataDisplay/tag">
              <IntlMessages
                id="sidebar.dataDisplay.tag"/></Link>
          </Menu.Item>
          <Menu.Item key="components/dataDisplay/tabs">
            <Link to="/components/dataDisplay/tabs">
              <IntlMessages
                id="sidebar.dataDisplay.tabs"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="feedBack" title={
          <span>
                  <i className="icon icon-feedback"/>
                    <IntlMessages id="sidebar.components.feedBack"/>

              </span>}>
          <Menu.Item key="components/feedBack/alert">
            <Link to="/components/feedBack/alert">
              <IntlMessages
                id="sidebar.feedBack.alert"/></Link>
          </Menu.Item>
          <Menu.Item key="components/feedBack/modal">
            <Link to="/components/feedBack/modal">
              <IntlMessages
                id="sidebar.feedBack.modal"/></Link>
          </Menu.Item>
          <Menu.Item key="components/feedBack/message">
            <Link to="/components/feedBack/message">
              <IntlMessages
                id="sidebar.feedBack.message"/></Link>
          </Menu.Item>
          <Menu.Item key="components/feedBack/notification">
            <Link to="/components/feedBack/notification">
              <IntlMessages
                id="sidebar.feedBack.notification"/></Link>
          </Menu.Item>
          <Menu.Item key="components/feedBack/progress">
            <Link to="/components/feedBack/progress">
              <IntlMessages
                id="sidebar.feedBack.progress"/></Link>
          </Menu.Item>
          <Menu.Item key="components/feedBack/popconfirm">
            <Link to="/components/feedBack/popconfirm">
              <IntlMessages id="sidebar.feedBack.popConfirm"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="components/feedBack/spin">
            <Link to="/components/feedBack/spin">
              <IntlMessages
                id="sidebar.feedBack.spin"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="others" title={
          <span>
                  <i className="icon icon-inbox"/>
                    <IntlMessages id="sidebar.components.other"/>

              </span>}>
          <Menu.Item key="components/others/anchor">
            <Link to="/components/others/anchor">
              <IntlMessages
                id="sidebar.other.anchor"/></Link>
          </Menu.Item>
          <Menu.Item key="components/others/backtop">
            <Link to="/components/others/backtop">
              <IntlMessages
                id="sidebar.other.backTop"/></Link>
          </Menu.Item>
          <Menu.Item key="components/others/divider">
            <Link to="/components/others/divider">
              <IntlMessages
                id="sidebar.other.divider"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="table"
                 title={
                   <span>
                           <i className="icon icon-table"/>

                             <IntlMessages id="sidebar.dataDisplay.table"/>

                         </span>}>
          <Menu.Item key="components/table/basic">
            <Link to="/components/table/basic">
              <IntlMessages
                id="sidebar.view.basicTable"/></Link>
          </Menu.Item>
          <Menu.Item key="components/table/data">
            <Link to="/components/table/data">
              <IntlMessages
                id="sidebar.view.dataTable"/></Link>
          </Menu.Item>
        </SubMenu>

      </SubMenu> */}

      {/* <SubMenu className={getNavStyleSubMenuClass(navStyle)} key="extraComponents"
               title={<IntlMessages id="sidebar.extraComponents"/>}>

        <SubMenu className="gx-menu-horizontal" key="editor"
                 title={<span>
                         <i className="icon icon-editor"/>
                        <IntlMessages id="sidebar.editors"/>
                       </span>}>
          <Menu.Item key="extra-components/editor/ck">
            <Link to="/extra-components/editor/ck">
              <IntlMessages
                id="sidebar.editors.CKEditor"/></Link>
          </Menu.Item>
          <Menu.Item key="extra-components/editor/wysiswyg">
            <Link to="/extra-components/editor/wysiswyg">
              <IntlMessages
                id="sidebar.editors.WYSISWYGEditor"/></Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="extra-components/color-picker">
          <Link to="/extra-components/color-picker">
            <i className="icon icon-picker"/>

            <IntlMessages id="sidebar.pickers.colorPickers"/>

          </Link>
        </Menu.Item>

        <Menu.Item key="extra-components/dnd">
          <Link to="/extra-components/dnd">
            <i className="icon icon-drag-and-drop"/>

            <IntlMessages id="sidebar.extensions.dragNDrop"/>

          </Link>
        </Menu.Item>

        <Menu.Item key="extra-components/sweet-alert">
          <Link to="/extra-components/sweet-alert">
            <i className="icon icon-sweet-alert"/>
            <IntlMessages id="sidebar.extensions.sweetAlert"/>
          </Link>
        </Menu.Item>

        <Menu.Item key="extra-components/notification">
          <Link to="/extra-components/notification"><i className="icon icon-notification"/>
            <IntlMessages
              id="sidebar.extensions.notification"/></Link>
        </Menu.Item>

        <SubMenu className="gx-menu-horizontal" key="time-line"
                 title={<span><i className="icon icon-timeline"/><IntlMessages
                   id="sidebar.timeLine"/></span>}>
          <Menu.Item key="extra-components/time-line/default">
            <Link to="/extra-components/time-line/default">
              <IntlMessages
                id="sidebar.timeLine.default"/></Link>
          </Menu.Item>
          <Menu.Item key="extra-components/time-line/default-with-icon">
            <Link to="/extra-components/time-line/default-with-icon">
              <IntlMessages
                id="sidebar.timeLine.defaultwithIcons"/></Link>
          </Menu.Item>
          <Menu.Item key="extra-components/time-line/left-align">
            <Link to="/extra-components/time-line/left-align">
              <IntlMessages
                id="sidebar.timeLine.leftAligned"/></Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="extra-components/shuffle">
          <Link to="/extra-components/shuffle"><i className="icon icon-shuffle"/>
            <IntlMessages
              id="sidebar.extensions.shuffle"/></Link>
        </Menu.Item>

      </SubMenu> */}


      {/* <SubMenu className={getNavStyleSubMenuClass(navStyle)} key="custom-views"
               title={<IntlMessages id="sidebar.customViews"/>}>

        <SubMenu className="gx-menu-horizontal" key="user-auth"
                 title={<span><i className="icon icon-auth-screen"/><IntlMessages
                   id="app.userAuth"/></span>}>
          <Menu.Item key="custom-views/user-auth/sign-in">
            <Link to="/custom-views/user-auth/sign-in">
              <IntlMessages
                id="app.userAuth.signIn"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/forgot-password">
            <Link to="/custom-views/user-auth/forgot-password">
              <IntlMessages
                id="app.userAuth.forgotPassword"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/sign-up">
            <Link to="/custom-views/user-auth/sign-up">
              <IntlMessages
                id="app.userAuth.signUp"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/lock-screen">
            <Link to="/custom-views/user-auth/lock-screen">
              <IntlMessages
                id="app.userAuth.lockScreen"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/user-auth/reset-password">
            <Link to="/custom-views/user-auth/reset-password">
              <IntlMessages
                id="app.userAuth.resetPassword"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="list-type"
                 title={<span><i className="icon icon-all-contacts"/><IntlMessages
                   id="sidebar.listType"/></span>}>
          <Menu.Item key="custom-views/list-type/simple-list">
            <Link to="/custom-views/list-type/simple-list">
              <IntlMessages
                id="sidebar.listType.plainListView"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/list-type/strip-list">
            <Link to="/custom-views/list-type/strip-list">
              <IntlMessages
                id="sidebar.listType.withDivider"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/list-type/card-list">
            <Link to="/custom-views/list-type/card-list">
              <IntlMessages
                id="sidebar.listType.cardListView"/></Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu className="gx-menu-horizontal" key="eCommerce"
                 title={<span><i className="icon icon-shopping-cart"/><IntlMessages
                   id="sidebar.eCommerce"/></span>}>
          <Menu.Item key="custom-views/eCommerce/product-grid">
            <Link to="/custom-views/eCommerce/product-grid">
              <IntlMessages
                id="sidebar.eCommerce.productGrid"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/eCommerce/product-list">
            <Link to="/custom-views/eCommerce/product-list">
              <IntlMessages
                id="sidebar.eCommerce.productList"/></Link>
          </Menu.Item>
        </SubMenu>
{/* 
        <SubMenu className="gx-menu-horizontal" key="errorPages"
                 title={<span><i className="icon icon-error"/><IntlMessages
                   id="sidebar.extraPages"/></span>}>

          <Menu.Item key="custom-views/error-pages/error-404">
            <Link to="/custom-views/error-pages/error-404">
              <IntlMessages
                id="sidebar.extraPages.404"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/error-pages/error-500">
            <Link to="/custom-views/error-pages/error-500">
              <IntlMessages
                id="sidebar.extraPages.500"/></Link>
          </Menu.Item>
        </SubMenu> */}

        {/* <SubMenu className="gx-menu-horizontal" key="extra-elements"
                 title={<span><i className="icon icon-ellipse-h"/><IntlMessages
                   id="sidebar.listType.extras"/></span>}>
          <Menu.Item key="custom-views/extras/pricing-table">
            <Link to="/custom-views/extras/pricing-table">
              <IntlMessages
                id="sidebar.extraElements.pricingTable"/></Link>
          </Menu.Item>

          <Menu.Item key="custom-views/extras/callouts">
            <Link to="/custom-views/extras/callouts">
              <IntlMessages
                id="sidebar.extraElements.callouts"/></Link>
          </Menu.Item>
          <Menu.Item key="custom-views/extras/testimonials">
            <Link to="/custom-views/extras/testimonials">
              <IntlMessages
                id="sidebar.extraElements.testimonials"/></Link>
          </Menu.Item>
        </SubMenu>

      </SubMenu>  */}

    </Menu>

  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;

