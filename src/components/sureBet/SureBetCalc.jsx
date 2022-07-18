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
    const scoreAbs = score;
    setFinalRay(scoreAbs);
    console.log(finalRay);
    return scoreAbs;
  };

  // eslint-disable-next-line no-shadow
  const checkSureBetHome = () => {
    const firstCheck = 1 / (1 / firstRay + 1 / secondRay);
    const stakeForHome = (stake * firstCheck) / firstRay;
    const fixedStakeForHome = stakeForHome.toFixed(2);
    console.log(`${fixedStakeForHome} stake for Home`);

    return fixedStakeForHome;
  };

  const checkSureBetAway = () => {
    const firstCheck = 1 / (1 / firstRay + 1 / secondRay);
    const stakeForAway = (stake * firstCheck) / secondRay;
    const fixedStakeForAway = stakeForAway.toFixed(2);
    console.log(`${fixedStakeForAway} stake for Away`);
    return fixedStakeForAway;
  };

  const FinalHomeStake = () => {
    const lastHomeStake = (stake * checkSureBetHome()) / 100;
    console.log(`${lastHomeStake} is equal to`);
    return lastHomeStake;
  };

  const GuarantedWin = () => {
    const win = FinalHomeStake() * firstRay;
    const fixedWin = win.toFixed(2);
    return fixedWin;
  };

  const exam = () => {
    checkSureBetHome();
    checkSureBetAway();
    FinalHomeStake();
  };

  useEffect(() => {
    finalRakeValue();
  }, [firstRay, secondRay]);

  return (
    <div className="ui container">
      <div className="ui equal width color grid">
        <div className="column">
          <div className="ui huge header textCenter">Sure Bet</div>
          <p className="textCenter">Check if sure bet is possible</p>
        </div>
        <div className="equal width row">
          <div className="column">
            <label htmlFor="HomeTeamSure">
              <h4>Home Team Odds</h4>
              <input
                id="HomeTeamSure"
                type="number"
                placeholder="Home Team"
                step="0.1"
                className="fullwidth"
                onChange={handleHomeValue}
              />
            </label>
          </div>
          <div className="column">
            <label htmlFor="AwayTeamSure">
              <h4>Away Team Odds</h4>
              <input
                id="AwayTeamSure"
                type="number"
                placeholder="Away Team"
                step="0.1"
                className="fullwidth"
                onChange={handleAwayValue}
              />
            </label>
          </div>
          <div className="column">
            <label htmlFor="SureStake">
              <h4>Your Stake</h4>
              <input
                id="SureStake"
                type="number"
                placeholder="Stake for bets"
                step="0.1"
                className="fullwidth"
                onChange={handleStake}
                value={stake}
              />
            </label>
          </div>
        </div>
        <div className="column">
          <label htmlFor="FinalRake">
            <p>Profit in percentages</p>
            <input
              id="FinalRake"
              type="text"
              placeholder="Rake of provider"
              step="0.1"
              className="fullwidth"
              value={
                finalRay < 0 ? Math.abs(finalRay) : "SureBet doesn't exists"
              }
            />
          </label>

          <div className="column fullwidth">
            <button
              onClick={() => {
                exam();
              }}
              className="ui fluid huge teal submit button"
            >
              Check
            </button>
          </div>

          <div className="ui two column grid">
            <div className="left floated column textCenter">
              <h3>You need to bet</h3>
              <input
                type="number"
                placeholder="Stake For Home"
                step="0.1"
                className="fullwidth textCenter"
                value={checkSureBetHome()}
              />
              <h4>On Home</h4>
            </div>

            <div className="right floated column textCenter segmentSpace">
              <h3>You need to bet</h3>
              <input
                type="number"
                placeholder="Stake for Away"
                step="0.1"
                className="fullwidth textCenter"
                value={checkSureBetAway()}
              />
              <h4>On Away</h4>
            </div>
          </div>

          <div className="column">
            <label htmlFor="SureProfit">
              <h2 className="greenText textCenter">
                You will win in both cases
              </h2>
              <input
                id="SureProfit"
                type="number"
                placeholder="Guaranted win  "
                step="0.1"
                className="fullwidth textCenter"
                value={GuarantedWin()}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SureBetCalc;
