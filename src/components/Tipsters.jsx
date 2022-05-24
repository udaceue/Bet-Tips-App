/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import elyse from "../photos/elyse.png";
import matthew from "../photos/matthew.png";
import molly from "../photos/molly.png";

function Tipsters() {
  return (
    <div className="ui fluid container">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={matthew} alt="tipster" />
          </div>
          <div className="content">
            <div className="header">Matt Giampietro</div>
            <div className="meta">
              <a>Friends</a>
            </div>
            <div className="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2013</span>
            <span>
              <i className="user icon" />
              75 Friends
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={molly} alt="tipster" />
          </div>
          <div className="content">
            <div className="header">Molly</div>
            <div className="meta">
              <span className="date">Coworker</span>
            </div>
            <div className="description">
              Molly is a personal assistant living in Paris.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2011</span>
            <span>
              <i className="user icon" />
              35 Friends
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={elyse} alt="tipster" />
          </div>
          <div className="content">
            <div className="header">Elyse</div>
            <div className="meta">
              <a>Coworker</a>
            </div>
            <div className="description">
              Elyse is a copywriter working in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2014</span>
            <span>
              <i className="user icon" />
              151 Friends
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tipsters;
