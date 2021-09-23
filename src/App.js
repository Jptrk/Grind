//Style
import "./styles/global.css";
//Pages
import Home from "../src/Pages/Home.js";
import GameDetails from "./Pages/GameDetails";
import NewGames from "./Pages/NewGames";
// Library
import { Route, Switch, useLocation } from "react-router";
import { useState, useEffect } from "react";
// Components
import NotFound from "./Pages/NotFound";
import Loading from "./components/LoadingPage";
import Nav from "./components/Nav";

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
      <Nav />

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
        <Route path={`/new`}>
          <NewGames />
        </Route>
        <Route path={`/new/page/:id`}>
          <NewGames />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
