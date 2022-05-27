/* eslint-disable react/self-closing-comp */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import HeaderUseage from "./HeaderUseage";

function BetTips() {
  const [htmlRes, setHtmlRes] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "scommetix-football-betting-tips-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "1d622f5bb6msh98bf258adebe3afp16f0dfjsn7177c145e419",
    },
  };

  fetch(
    "https://scommetix-football-betting-tips-v1.p.rapidapi.com/betting-tips",
    options
  )
    .then((response) => response.text())
    .then((response) => setHtmlRes(response));

  return (
    <div>
      <div className="ui fluid container">
        <HeaderUseage />
      </div>
      <div className="betTips">
        <div className="betTipsIframe"></div>
        <iframe
          id="embed"
          scrolling="no"
          srcDoc={htmlRes}
          title="free sportsBets"
        />
      </div>
    </div>
  );
}

export default BetTips;
