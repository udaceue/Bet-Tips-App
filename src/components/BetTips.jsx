/* eslint-disable react/self-closing-comp */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import HeaderUseage from "./HeaderUseage";
// eslint-disable-next-line no-unused-vars
import res from "./response.json";
import Tips from "./Tips";
import DropdownFlags from "./DropdownFlags";

function BetTips() {
  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState(res);
  return (
    <div className="ui fluid container">
      <div>
        <div className="ui fluid container">
          <HeaderUseage />
        </div>
      </div>

      <div className="ui fluid container">
        <h2 className="ui center aligned icon header">
          <i className="futbol icon"></i>
          <div className="content">
            Our Tips
            <div className="sub header">
              We suggest you to analize it by yourself
            </div>
          </div>
        </h2>
      </div>
      <div className="ui container">
        <DropdownFlags response={response} />
        <div className="ui eight column centered grid">
          <div className="ui column blue">County</div>
          <div className="ui column blue">League</div>
          <div className="ui column yellow">HomeTeam</div>
          <div className="ui column green"> Against </div>
          <div className="ui column yellow">AwayTeam</div>
          <div className="ui column orange">Tip</div>
        </div>
      </div>
      <Tips response={response} />
    </div>
  );
}

export default BetTips;
