import "./App.css";
import { useState, useEffect } from "react";

import Home from "./Home";
import Tipsters from "./Tipsters";
import items from "./data";
import Header from "./Header";
import Menu from "./Menu";
import Scores from "./Scores";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tipstersItems, setTipstersItems] = useState(items);
  const [scoress, setScoress] = useState(Scores);

  useEffect(() => {
    setScoress(Scores);
  }, []);

  // eslint-disable-next-line no-console
  console.log(scoress);
  return (
    <div className="ui fluid container">
      <header>
        <Header />
        <Menu />
      </header>

      <Home />
      <Tipsters items={tipstersItems} />
    </div>
  );
}

export default App;
