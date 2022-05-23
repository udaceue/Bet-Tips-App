import React from "react";
import logo from "../photos/logo.png";

function Header() {
  return (
    <div className="ui grid">
      <div className="row">
        <h1 className="ui header">
          <img className="ui image logo" src={logo} alt="logo" />
          <div className="content">
            SASBET
            <h4 className="ui sub header">Typuj z nami!</h4>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Header;
