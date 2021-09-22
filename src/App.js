//Style
import "./styles/global.css";
//Pages
import Home from "../src/Pages/Home.js";
import GameDetails from "./Pages/GameDetails";
// Library
import { Route, Switch, useLocation } from "react-router";
import { useState, useEffect } from "react";
// Components
import NotFound from "./Pages/NotFound";
import Loading from "./components/LoadingPage";

function App() {
  const [firstTime, setFirtTime] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setFirtTime(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {firstTime === true && <Loading />}

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
