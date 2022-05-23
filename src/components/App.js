import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";

function App() {
  return (
    <div className="ui fluid container">
      <header>
        <Header />
        <Menu />
      </header>

      <Home />
    </div>
  );
}

export default App;
