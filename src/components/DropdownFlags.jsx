/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function DropdownFlags(props) {
  const { response } = props;
  const { events } = response;

  console.log(events);

  const { leagues, setLeagues } = useState;
  // eslint-disable-next-line no-unused-vars

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

  const getOptions = () => {
    const countries = events.map(
      ({
        tournament: {
          category: { name: countryName },
        },
      }) => countryName
    );
    return [...new Set(countries)];
  };

  return (
    <div>
      <select>
        {getOptions().map((country) => (
          <option value={country}>{country}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownFlags;
