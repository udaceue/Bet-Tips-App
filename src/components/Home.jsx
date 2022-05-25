import React from "react";
import winnings from "../photos/winnings.png";

function Home() {
  return (
    <div className="ui fluid container">
      <div>
        <section>
          {/* Who we are section */}
          <div className="ui four column centered grid who">
            <div className="column">
              <h2 className="ui icon header">
                <i className="question circle outline icon" />
                <div className="content">
                  Who we are?
                  <div className="sub header">
                    We are a group of professional bookmakers.We all have over
                    60% win ratio and high yield. We want to share our knowledge
                    with others people to outplay the bookmaker.That is why we
                    develop and provide you tools and types that will help you
                    in this
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </section>
        {/* IMAGE SECTION */}

        <div className="ui three column centered grid">
          <div className="column winnings">
            <figure>
              <img className="ui image " src={winnings} alt="winnings" />
            </figure>
          </div>
        </div>
      </div>
      <h2 className="ui dividing header centered">
        <i className="smile icon" />
        Our Team
      </h2>
    </div>
  );
}

export default Home;
