/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <div className="ui attached stackable menu">
        <div className="ui fluid container">
          <a className="item">
            <i className="home icon" />
            <Link to="/">Home</Link>
          </a>
          <a className="item">
            <i className="gamepad icon" />
            <Link to="/BetTips">BetTips</Link>
          </a>
          <a className="item">
            <i className="wrench icon" />
            <Link to="/Tools">Tools</Link>
          </a>

          {/* VIP SECTION MENU */}
          <div className="ui simple dropdown item">
            <i className="star icon" />
            Vip
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item">
                <i className="info circle icon" /> About Vip
              </a>
              <a className="item">
                <i className="plus square icon" /> Become a vip
              </a>
              <a className="item">
                <i className="gamepad icon" /> Vip Tips
              </a>
            </div>
          </div>

          {/* DROPDOWN MORE MENU */}
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

          {/* {RIGHT ITEM/SEARCH BAR} */}
          <div className="right item">
            <div className="ui input">
              <input type="text" placeholder="Search..." />
              <a className="item">
                <i className="sign in alternate icon" /> Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
