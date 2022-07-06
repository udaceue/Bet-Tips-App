/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";

function SureBetCalc() {
  const [firstRay, setFirstRay] = useState(0);
  const [secondRay, setSecondRay] = useState(0);
  const [stake, setStake] = useState(0);
  const [finalRay, setFinalRay] = useState(0);

  const handleHomeValue = (event) => {
    const home = event.target.value;
    if (home) {
      const homeValue = parseFloat(home, 10);
      setFirstRay(homeValue);
      console.log(homeValue);
    }
    return firstRay;
  };

  const handleAwayValue = (event) => {
    const away = event.target.value;
    if (away) {
      const awayValue = parseFloat(away, 10);
      setSecondRay(awayValue);
      console.log(awayValue);
    }
    return secondRay;
  };

  const handleStake = (event) => {
    const stakeValue = event.target.value;
    const finalStakeValue = parseInt(stakeValue, 10);
    setStake(finalStakeValue);
    console.log(finalStakeValue);
    return firstRay;
  };

  const finalRakeValue = () => {
    const score = (1 / firstRay) * 100 + (1 / secondRay) * 100 - 100;
    setFinalRay(score);
    console.log(finalRay);
    return score;
  };

  // eslint-disable-next-line no-shadow
  const checkSureBet = (xerr) => {
    if (xerr >= 0) {
      console.log("doesnt exists");
    } else {
      console.log("go for it");
    }
  };

  useEffect(() => {
    finalRakeValue();
  }, [firstRay, secondRay]);

  return (
    <div className="ui container">
      <div className="ui equal width grid">
        <div className="column">
          <div className="ui huge header textCenter">Sure Bet</div>
          <p className="textCenter">Check if sure bet is possible</p>
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
          <div className="column">
            <input
              type="number"
              placeholder="Stake for bets"
              step="0.1"
              className="fullwidth"
              onChange={handleStake}
              value={stake}
            />
          </div>
        </div>
        <div className="column">
          <label htmlFor="FinalRake">
            Rake in percentages%
            <input
              id="FinalRake"
              type="number"
              placeholder="Rake of provider"
              step="0.1"
              className="fullwidth"
              value={finalRay}
            />
          </label>
          <div className="column">
            <button
              onClick={() => checkSureBet(finalRay)}
              className="ui fluid huge teal submit button"
            >
              Check
            </button>
          </div>
          <h3>XD</h3>
        </div>
      </div>
    </div>
  );
}

export default SureBetCalc;
