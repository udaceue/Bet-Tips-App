import React, { useState } from "react";

function DecimalOdds() {
  const [propability, setPropability] = useState();
  const [disabled, setDisabled] = useState(false);

  const getValue = (event) => {
    const sraka = event.target.value;
    return sraka;
  };

  const convertToPropability = (event) => {
    const score = (1 / getValue(event)) * 100;
    console.log(`${score}%`);
    return setPropability(`${score}%`);
  };

  // Prevent to add data into input field
  const preventInput = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="ui container">
      <div className="ui equal width grid">
        <div className="column">
          <div className="ui huge header textCenter">Odds Converter</div>
        </div>
        <div className="equal width row">
          <div className="column">
            <input
              type="number"
              placeholder="Decimal Odds"
              step="0.1"
              className="fullwidth"
              onChange={convertToPropability}
            />
          </div>
          <i className="exchange alternate icon" />
          <div className="column">
            <input
              type="text"
              placeholder="Probability%"
              step="1"
              className="fullwidth"
              value={propability}
              disabled={disabled}
              onClick={preventInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecimalOdds;
