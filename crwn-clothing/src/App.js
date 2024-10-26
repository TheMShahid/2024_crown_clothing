import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Route } from "react-router-dom";

const HatsPage = () => (
  // main component of the hats page
  <div className="hats-page">
    <h1>I am Hats Page but HTML Presentational Coponent</h1>
  </div>
);

const JacketsPage = () => {
  return (
    // main component of the jackets page
    <div className="jackets-page">
      <h1>
        I am jackets page but i am Javascript expression function like component
      </h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/jackets" component={JacketsPage} />
    </div>
  );
}

export default App;
