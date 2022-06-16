/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from "react";

function Tips(props) {
  // eslint-disable-next-line no-unused-vars
  const { response } = props;
  const { events } = response;

  console.log(events);

  return (
    <div className="ui container">
      {events.map((element) => {
        const { homeTeam, awayTeam, tournament } = element;
        const { name: homeTeamName } = homeTeam;
        const { name: awayTeamName } = awayTeam;
        const { category } = tournament;
        const { name: leagueName } = tournament;
        const { name: countryName } = category;

        return (
          <div className="ui eight column centered grid">
            <div className="ui column blue">{countryName}</div>
            <div className="ui column blue">{leagueName}</div>
            <div className="ui column yellow">{homeTeamName}</div>
            <div className="ui column green"> VS </div>
            <div className="ui column yellow">{awayTeamName}</div>
            <div className="ui column orange">Tip</div>
          </div>
        );
      })}
    </div>
  );
}

export default Tips;
