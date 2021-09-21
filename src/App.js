//Style
import "./styles/global.css";
//Pages
import Home from "../src/Pages/Home.js";
import GameDetails from "./Pages/GameDetails";
// Library
import { Route, Switch, useLocation } from "react-router";

// Components
import NotFound from "./Pages/NotFound";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/page/:id" exact>
          <Home />
        </Route>
        <Route path={`/game/:id`}>
          <GameDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
