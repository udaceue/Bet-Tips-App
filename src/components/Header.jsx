import React from "react";
import logo from "../photos/logo.png";

function Header() {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="ui three wide column logo">
          <img src={logo} alt="CompanyLogo" className="ui image small" />
        </div>

        <div className="ui ten wide column logo-text">
          <h1 className="ui header sasbetHeader">
            SASBET
            <h4 className="ui sub header">Typuj z nami!</h4>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
