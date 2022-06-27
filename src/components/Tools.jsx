import React from "react";
import HeaderUseage from "./HeaderUseage";
import OddsConverter from "./OddsConverter";
import RakeCalculator from "./RakeCalculator";

function Tools() {
  return (
    <div className="ui fluid container">
      <div className="ui fluid container">
        <HeaderUseage />
      </div>
      <div className="ui fluid container toolsContent">
        <OddsConverter />
        <RakeCalculator />
      </div>
    </div>
  );
}

export default Tools;
