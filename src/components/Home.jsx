import React from "react";
import winnings from "../photos/winnings.png";

function Home() {
  return (
    <div className="ui fluid container">
      <section>
        {/* Who we are section */}
        <div className="ui four column centered grid">
          <div className="column">
            <h2 className="ui icon header">
              <i className="question circle outline icon" />
              <div className="content">
                Who we are?
                <div className="sub header">
                  We are a group of professional bookmakers.We all have over 60%
                  win ratio and high yield. We want to share our knowledge with
                  others people to outplay the bookmaker.That is why we develop
                  and provide you tools and types that will help you in this
                </div>
              </div>
            </h2>
          </div>
        </div>
      </section>
      {/* IMAGE SECTION */}

      <div className="ui two column centered grid">
        <div className="column">
          <figure>
            <img className="winnings" src={winnings} alt="winnings" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Home;
