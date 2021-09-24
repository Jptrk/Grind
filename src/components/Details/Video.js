import { useSelector } from "react-redux";
import styled from "styled-components";

function Video({ setShowVideo, backgroundimage }) {
  const url = useSelector((state) => state.games.video);

  return (
    <>
      {url.data !== undefined && (
        <Main>
          <div className="overlay" onClick={() => setShowVideo(false)}></div>
          <div className="close" onClick={() => setShowVideo(false)}>
            <svg
              id="Close"
              xmlns="http://www.w3.org/2000/svg"
              width="70.711"
              height="70.711"
              viewBox="0 0 70.711 70.711"
            >
              <g
                id="Close-2"
                data-name="Close"
                transform="translate(1161.069 -796.909) rotate(135)"
              >
                <line
                  id="Line_6"
                  data-name="Line 6"
                  x2="50"
                  transform="translate(1359.5 207.5)"
                  fill="none"
                  stroke="#ff003b"
                  strokeWidth="4"
                />
                <line
                  id="Line_7"
                  data-name="Line 7"
                  x2="50"
                  transform="translate(1384.5 182.5) rotate(90)"
                  fill="none"
                  stroke="#ff003b"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </div>
          <Player>
            <video controls autoPlay>
              <source src={url.data.max}></source>
            </video>
          </Player>
        </Main>
      )}
      {url.data === undefined && (
        <Main>
          <div className="overlay" onClick={() => setShowVideo(false)}></div>
          <div className="close" onClick={() => setShowVideo(false)}>
            <svg
              id="Close"
              xmlns="http://www.w3.org/2000/svg"
              width="70.711"
              height="70.711"
              viewBox="0 0 70.711 70.711"
            >
              <g
                id="Close-2"
                data-name="Close"
                transform="translate(1161.069 -796.909) rotate(135)"
              >
                <line
                  id="Line_6"
                  data-name="Line 6"
                  x2="50"
                  transform="translate(1359.5 207.5)"
                  fill="none"
                  stroke="#ff003b"
                  strokeWidth="4"
                />
                <line
                  id="Line_7"
                  data-name="Line 7"
                  x2="50"
                  transform="translate(1384.5 182.5) rotate(90)"
                  fill="none"
                  stroke="#ff003b"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </div>
          <Player>
            <img src={backgroundimage} alt={backgroundimage} />
          </Player>
        </Main>
      )}
    </>
  );
}

const Main = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 300;

  .overlay {
    background-color: rgba(0, 0, 0, 0.9);
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 1;
  }

  .close {
    float: right;
    margin: 20px 20px 0 0;
    cursor: pointer;
    transition: 100ms ease;
    position: fixed;
    right: 0;
    z-index: 1;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 1500px) {
    .close {
      svg {
        width: 90%;
      }
    }
  }
`;

const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1300px;
  height: auto;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  video,
  img {
    max-height: 100%;
    max-width: 100%;
  }

  @media (max-width: 1500px) {
    width: 90%;
  }
`;

export default Video;
