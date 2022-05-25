import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";
import Tipsters from "./Tipsters";
import items from "./data";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tipstersItems, setTipstersItems] = useState(items);

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
