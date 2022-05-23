/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Menu() {
  return (
    <div className="ui attached stackable menu">
      <div className="ui container">
        <a className="item">
          <i className="home icon" /> Home
        </a>
        <a className="item">
          <i className="grid layout icon" /> Browse
        </a>
        <a className="item">
          <i className="mail icon" /> Messages
        </a>
        <div className="ui simple dropdown item">
          More
          <i className="dropdown icon" />
          <div className="menu">
            <a className="item">
              <i className="edit icon" /> Edit Profile
            </a>
            <a className="item">
              <i className="globe icon" /> Choose Language
            </a>
            <a className="item">
              <i className="settings icon" /> Account Settings
            </a>
          </div>
        </div>
        <div className="right item">
          <div className="ui input">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
