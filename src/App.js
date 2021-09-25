//Style
import "./styles/global.css";
//Pages
import Home from "../src/Pages/Home.js";
import GameDetails from "./Pages/GameDetails";
import NewGames from "./Pages/NewGames";
import UpcomingGames from "./Pages/UpcomingGames";
import Search from "./Pages/Search";
// Library
import { Route, Switch, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// Components
import NotFound from "./Pages/NotFound";
import Loading from "./components/LoadingPage";
import Nav from "./components/Nav";
// Action
import { fetchGenre } from "./actions/FetchallgamesAction";

function App() {
  const dispatch = useDispatch();
  const [firstTime, setFirtTime] = useState(true);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchGenre());
    setTimeout(() => {
      setFirtTime(false);
    }, 3000);
  }, [dispatch]);

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
        <Route path={`/upcoming`}>
          <UpcomingGames />
        </Route>
        <Route path={`/upcoming/page/:id`}>
          <UpcomingGames />
        </Route>
        <Route path={`/search`}>
          <Search />
        </Route>
        <Route path={`/search/page/:id`}>
          <Search />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
