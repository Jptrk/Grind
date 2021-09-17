//Style
import "./styles/global.css";
//Components
import Home from "../src/Pages/Home.js";

// Library
import { useDispatch } from "react-redux";

//Action
import { loadFeatured } from "./actions/FeaturedAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFeatured());
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
