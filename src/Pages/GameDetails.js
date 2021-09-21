import styled from "styled-components";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

// Components
import Ratings from "../components/Ratings";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Fullscreen from "../components/Details/Fullscreen";
// Actions
import { loadDetails } from "../actions/gameDetailsAction";

const GameDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const gameId = parseInt(location.pathname.split("/game/")[1]);

  const data = useSelector((state) => state.games.gameDetails.data);
  const screenshots = useSelector((state) => state.games.screenshots);
  const isLoading = useSelector((state) => state.games.isLoading);

  const [showMore, setShowMore] = useState(false);
  const [fullScreen, setFullscreen] = useState({
    active: false,
    image: null,
  });

  useEffect(() => {
    dispatch(loadDetails(gameId));
  }, [dispatch, gameId]);

  // Handlers
  const releaseDate = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const x = new Date(date);
    return `${monthNames[x.getMonth()]} ${x.getDate()}, ${x.getFullYear()}`;
  };

  return (
    <>
      <Nav />
      {data != null && !isLoading && (
        <Main>
          <Video>
            <div className="overlay">
              <img src={data.background_image} alt={data.background_image} />
            </div>
          </Video>
          <Details>
            <div className="header">
              <div className="name">
                <h1>{data.name}</h1>
                <div className="developers">
                  {data.publishers.map(({ name }) => {
                    return (
                      <a href="/" key={name}>
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="rating">
                <div className="stars">
                  <Ratings game={data.rating} size={20} spacing={15} />
                </div>
                <div className="date">
                  <p>
                    <span>Release Date: </span> {releaseDate(data.released)}
                  </p>
                </div>
              </div>
            </div>

            <div className="description">
              <p>
                {!showMore && data.description_raw.substring(0, 550)}
                {showMore && data.description_raw}

                {!showMore && data.description_raw.length >= 550 && (
                  <>
                    <span>...</span>{" "}
                    <span
                      className="red"
                      onClick={() => setShowMore((prev) => !prev)}
                    >
                      Show more
                    </span>
                  </>
                )}

                {showMore && data.description_raw.length >= 550 && (
                  <>
                    {" "}
                    <span
                      className="red"
                      onClick={() => setShowMore((prev) => !prev)}
                    >
                      Show less
                    </span>
                  </>
                )}
              </p>
            </div>

            <div className="platforms">
              <div className="header">
                <h1>Platforms</h1>
              </div>
              <div className="content">
                {data.platforms
                  .map(({ platform }) => {
                    return platform.name;
                  })
                  .join(", ")}
              </div>
            </div>

            <div className="genre">
              <div className="header">
                <h1>Genre</h1>
              </div>
              <div className="content">
                {data.genres
                  .map(({ name }) => {
                    return name;
                  })
                  .join(", ")}
              </div>
            </div>

            <div className="gallery">
              <div className="header">
                <h1>Screenshots</h1>
              </div>
              <div className="slider">
                {screenshots.map((game, key) => (
                  <img
                    className="screenshot"
                    src={game.image}
                    alt={game.id}
                    key={game.id}
                    onClick={() =>
                      setFullscreen((prev) => ({
                        ...prev,
                        active: true,
                        image: key,
                      }))
                    }
                  />
                ))}
              </div>
            </div>
          </Details>
          {fullScreen.active && (
            <Fullscreen
              images={screenshots}
              fullScreen={fullScreen}
              setFullscreen={setFullscreen}
            />
          )}
        </Main>
      )}
      <Footer />
    </>
  );
};

const Main = styled.div`
  padding: 60px 0;
  color: rgb(215, 215, 215);
  width: 1200px;
  margin: auto;
`;

const Video = styled.div`
  padding: 60px 0 0 0;

  .overlay {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        rgb(25, 25, 25, 0.3) 10%,
        rgb(25, 25, 25, 0.95) 60%,
        rgb(25, 25, 25, 1) 70%
      );
    }
  }

  img {
    width: 1200px;
    height: 550px;
    object-fit: cover;
  }
`;

const Details = styled.div`
  position: relative;
  top: -140px;
  padding: 0 0 60px 0;

  font-family: Bahnschrift;
  font-weight: 300;
  font-size: 16px;

  p {
    line-height: 30px;
  }

  .header {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    .name {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        color: #ff003b;
        margin-bottom: 10px;
      }

      a {
        font-size: 13px;
        font-weight: 400;
        cursor: pointer;
        margin-right: 20px;
      }

      .developers {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .rating {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .stars {
        margin-bottom: 5px;
        margin-top: 5px;
        margin-right: -15px;
        display: flex;
        justify-content: end;
      }

      .date {
        font-size: 13px;
        text-align: right;
        color: white;
        font-weight: 400;
      }
    }
  }

  .description {
    margin-bottom: 40px;
    p {
      font-weight: 100;
      padding-right: 60px;
    }

    .red {
      color: #ff003b;
      cursor: pointer;
      margin-top: 10px;
      user-select: none;
      white-space: nowrap;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .platforms,
  .genre {
    margin-bottom: 40px;
    .header {
      margin-bottom: 10px;
    }
    .header h1 {
      /* color: rgba(255, 255, 255, 0.5); */
    }
    .content {
      width: 350px;
      line-height: 30px;
    }
  }

  .gallery {
    .slider {
      display: flex;
      align-items: center;
      width: 100%;
      overflow-x: scroll;
      padding-bottom: 20px;
      img {
        width: 250px;
        height: 125px;
        margin-right: 10px;
        object-fit: cover;
        user-select: none;
        cursor: pointer;
      }

      /* width */
      ::-webkit-scrollbar {
        height: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #4a1420;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #ff003b;
      }
    }
  }
`;
export default GameDetails;
