import React from "react";

import LineIndicator from "./LineIndicator";
// import BubbleMap from "./BubbleMap/index";

const Overview = () => {

  return (
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
         
          {/* <img src={require('assets/images/logo.png')} alt='logo.png'/> */}
        </div>
      </div>
    </div>

  );
};

export default Overview;
