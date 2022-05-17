import React from "react";
// import {Badge} from "antd";

import Widget from "components/Widget/index";

const BuildingCard =({icon, title, number})=> {

  return (
    <Widget styleName="gx-card-full gx-dot-arrow-hover">
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-px-3 gx-build-box-lay" style={{fontSize: "48px"}}>
          {/* <img alt="..." src={require('assets/images/widget/building.png')} className=""/> */}
          <i className={icon}></i>
        </div>
        <div className="gx-media-body gx-py-3 gx-pr-4 gx-build-box-lay-content">
 
          {/* <Badge className="gx-badge-radius-sm gx-mb-2" count="34 New" style={{backgroundColor: '#52c41a'}}/> */}
        <h2 className="h4 gx-text-truncate gx-mb-1">{number}</h2>

          <p className="gx-mb-0 gx-text-grey gx-fs-sm">{title}</p>
          {/* <div className="gx-dot-arrow">
            <div className="gx-bg-primary gx-hover-arrow">
              <i className="icon icon-long-arrow-right gx-text-white"/>
            </div>
            <div className="gx-dot">
              <i className="icon icon-ellipse-v gx-text-primary"/>
            </div>
          </div> */}
        </div>
      </div>
    </Widget>
  );
}

export default BuildingCard;
