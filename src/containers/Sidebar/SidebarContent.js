import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
// import IntlMessages from "../../util/IntlMessages";
import {useSelector} from "react-redux";

// const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  // const getNavStyleSubMenuClass = (navStyle) => {
  //   if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
  //     return "gx-no-header-submenu-popup";
  //   }
  //   return "";
  // };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo/>
   
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <MenuItemGroup key="main" className="gx-menu-group">
 
              <Menu.Item key="main/dashboard/crypto">
                <Link to="/main/dashboard/crypto">
                  <i className="icon icon-dasbhoard"/>
                    <span>Home</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="main/dashboard/identities">
                <Link to="/main/dashboard/identities">
                  <i className="icon icon-contacts" />
                    <span>Admission</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="main/dashboard/search">
                <Link to="/main/dashboard/search">
                  <i className="icon icon-search" />
                    <span>Search</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="main/dashboard/dataexport">
              <Link to="/main/dashboard/dataexport">
                <i className="icon icon-transfer"/>
                  Export
              </Link>
              </Menu.Item>

              {/* <SubMenu key="process" className={getNavStyleSubMenuClass(navStyle)}
                       title={<span>
                        <i className="icon icon-home"/>
                        <span>Collage</span>
                      </span>}>
                <Menu.Item key="/main/dashboard/visit">
                  <Link to="/main/dashboard/visit">
                    <span>Reguler</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/main/dashboard/employee-work-log">
                  <Link to="/main/dashboard/employee-work-log">
                    <span>D2D</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/main/dashboard/procedure">
                  <Link to="/main/dashboard/procedure">
                    <span><IntlMessages id="Procedure"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/main/dashboard/expedient">
                  <Link to="/main/dashboard/expedient">
                    <span><IntlMessages id="Expedient"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/main/dashboard/inspection">
                  <Link to="/main/dashboard/inspection">
                    <span><IntlMessages id="Inspection"/></span>
                  </Link>
                </Menu.Item>
              </SubMenu> */}

            </MenuItemGroup>

          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

