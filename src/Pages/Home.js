//Libraries
import styled from "styled-components";
import { useSelector } from "react-redux";

//Components
import Nav from "../components/Nav";
import Featured from "../components/Featured";
import Games from "../components/Games";

const Home = () => {
  const { featuredGames } = useSelector((state) => state.games);

  return (
    <Main>
      <Nav />
      <Featured featuredGames={featuredGames} />
      <Games />
    </Main>
  );
};

const Main = styled.div``;

export default Home;
