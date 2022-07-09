/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";

function SureBetCalc() {
  const [firstRay, setFirstRay] = useState(0); // home
  const [secondRay, setSecondRay] = useState(0); // away
  const [stake, setStake] = useState(0); // stake
  const [finalRay, setFinalRay] = useState(0); // rake
  // eslint-disable-next-line no-unused-vars

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
    const scoreAbs = Math.abs(score);
    setFinalRay(scoreAbs);
    console.log(finalRay);
    return scoreAbs;
  };

  // eslint-disable-next-line no-shadow
  const checkSureBetHome = () => {
    const firstCheck = 1 / (1 / firstRay + 1 / secondRay);
    const stakeForHome = (stake * firstCheck) / firstRay;
    console.log(`${stakeForHome} stake for Home`);

    return stakeForHome;
  };

  const checkSureBetAway = () => {
    const firstCheck = 1 / (1 / firstRay + 1 / secondRay);
    const stakeForAway = (stake * firstCheck) / secondRay;
    console.log(`${stakeForAway} stake for Away`);
    return stakeForAway;
  };

  const FinalHomeStake = () => {
    const lastHomeStake = (stake * checkSureBetHome()) / 100;
    console.log(`${lastHomeStake} is equal to`);
    return lastHomeStake;
  };

  const exam = () => {
    checkSureBetHome(finalRay);
    checkSureBetAway(finalRay);
    FinalHomeStake();
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
              onClick={() => {
                exam();
              }}
              className="ui fluid huge teal submit button"
            >
              Check
            </button>
          </div>
          <h3>{checkSureBetHome()}</h3>
          <h3>{checkSureBetAway()}</h3>
        </div>
      </div>
    </div>
  );
}

export default SureBetCalc;
