import React from "react";

import Widget from "components/Widget/index";
// import {connect} from "react-redux";
// import {THEME_TYPE_DARK} from "../../constants/ThemeSetting";

const UnreadMessagesCard = (props) => {
  const {icon, subTitle} = props;
  return (
    <Widget styleName="gx-blue-cyan-gradient gx-text-white gx-card-1367-p">
      <div className="gx-flex-row gx-justify-content-between gx-mb-2">
        <i className={`icon icon-${icon} gx-fs-xxl gx-mr-2`} style={{fontSize: 40}}/>
        <i className="icon icon-long-arrow-right gx-fs-xxl"/>
      </div>
      <h2 className="gx-mb-0 gx-text-white">{subTitle}</h2>
    </Widget>
  );
};

export default UnreadMessagesCard;
