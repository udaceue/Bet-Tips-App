// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function DecimalOdds() {
  const [firstRay, setFirstRay] = useState(0);
  const [secondRay, setSecondRay] = useState(0);
  const [finalRay, setFinalRay] = useState(0);

  const handleHomeValue = (event) => {
    const home = event.target.value;
    const homeValue = parseInt(home, 10);
    setFirstRay(home);
    console.log(homeValue);
    return firstRay;
  };

  const handleAwayValue = (event) => {
    const away = event.target.value;
    const awayValue = parseInt(away, 10);
    setSecondRay(away);
    console.log(awayValue);
    return secondRay;
  };

  const finalRakeValue = () => {
    const score = (1 / firstRay) * 100 + (1 / secondRay) * 100 - 100;
    setFinalRay(score);
    console.log(finalRay);
    return score;
  };

  useEffect(() => {
    finalRakeValue();
  });

  return (
    <div className="ui container">
      <div className="ui equal width grid">
        <div className="column">
          <div className="ui huge header textCenter">Two way rake</div>
          <p className="textCenter">Type the odds on the teams</p>
        </div>
        <div className="equal width row">
          <div className="column">
            <input
              type="number"
              placeholder="Home Team"
              step="0.1"
              className="fullwidth"
              onChange={handleHomeValue}
            />
          </div>
          <i className="plus icon" />
          <div className="column">
            <input
              type="number"
              placeholder="Away Team"
              step="0.1"
              className="fullwidth"
              onChange={handleAwayValue}
            />
          </div>
        </div>
        <div className="column">
          <input
            type="number"
            placeholder="Rake of provider"
            step="0.1"
            className="fullwidth"
            value={finalRay}
          />
        </div>
      </div>
    </div>
  );
}

export default DecimalOdds;
