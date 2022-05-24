import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";
import Tipsters from "./Tipsters";

function App() {
  return (
    <div className="ui fluid container">
      <header>
        <Header />
        <Menu />
      </header>

      <Home />
      <Tipsters />
    </div>
  );
}

export default App;
