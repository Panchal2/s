import React from "react";
import {useDispatch} from "react-redux";
import { Popover} from "antd";
import {userSignOut} from "appRedux/actions/Auth";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userMenuOptions = ( 
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => dispatch(userSignOut())}>Logout
      </li>
    </ul>
  );

  return (

    <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <i className="icon icon-signin gx-ml-2"/>
        <span className="gx-avatar-name"> Sign Out</span>
      </Popover>
    </div>

  )
};

export default UserProfile;
