//Libraries
import styled from "styled-components";
import { useSelector } from "react-redux";

//Components
import Nav from "../components/Nav";
import Featured from "../components/Featured";

const Home = () => {
  const { featuredGames } = useSelector((state) => state.games);

  return (
    <Main>
      <Nav />
      <Featured featuredGames={featuredGames} />
    </Main>
  );
};

const Main = styled.div``;

export default Home;
