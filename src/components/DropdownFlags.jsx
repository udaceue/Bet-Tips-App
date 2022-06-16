/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function DropdownFlags(props) {
  const { response } = props;
  const { events } = response;

  const { leagues, setLeagues } = useState;

  function requestLeagues() {
    fetch(leagues, {}).then((responsik) => {
      responsik.json().then((data) => {
        console.log(data);
        setLeagues(data);
      });
    });
  }

  useEffect(() => {
    requestLeagues();
  }, []);

  return (
    <div>
      <select>
        {events.map((element) => {
          const { tournament } = element;
          const { category } = tournament;
          const { name: countryName } = category;

          return <option value={countryName}>{countryName}</option>;
        })}
      </select>
    </div>
  );
}

export default DropdownFlags;
