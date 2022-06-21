/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import DecimalOdds from "./oddsConverter/DecimalOdds";
import Propability from "./oddsConverter/Propability";

function OddsConverter() {
  const [button, setButton] = useState("true");

  const showComponent = () => {
    setButton(!button);
  };

  return (
    <>
      <div className="ui container">
        <div className="ui equal width grid">
          <div className="column">
            {button && (
              <div className="ui huge header textCenter">Odds Converter</div>
            )}
          </div>
          <div className="equal width row">
            <div className="column">
              <div className="ui placeholder segment">
                {button ? (
                  <>
                    <div className="ui icon header">
                      <i className="pdf file outline icon" />
                      Convert odds from one format to another and also to their
                      implied propability
                    </div>
                    <button
                      className="ui primary button"
                      onClick={showComponent}
                    >
                      Show Tool
                    </button>
                  </>
                ) : (
                  <>
                    <DecimalOdds />
                    <Propability />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <DecimalOdds />
      <Propability /> */}
    </>
  );
}

export default OddsConverter;
