import React, { useState } from "react";

function Propability() {
  const [decimal, setDecimal] = useState();
  const [disabled, setDisabled] = useState(false);

  const getValue = (event) => {
    const sraka = event.target.value;
    return sraka;
  };

  const convertToDecimal = (event) => {
    const score = 1 / (getValue(event) / 100);
    console.log(`${score}`);
    return setDecimal(`${score}`);
  };

  // Prevent to add data into input field
  const preventInput = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="ui container">
      <div className="ui equal width grid">
        <div className="equal width row">
          <div className="column">
            <input
              type="number"
              placeholder="Propability in percentages %"
              step="1"
              className="fullwidth"
              onChange={convertToDecimal}
            />
          </div>
          <i className="exchange alternate icon" />
          <div className="column">
            <input
              type="text"
              placeholder="Decimal%"
              step="0.1"
              className="fullwidth"
              value={decimal}
              disabled={disabled}
              onClick={preventInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Propability;
