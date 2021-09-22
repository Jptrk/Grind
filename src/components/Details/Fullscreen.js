import styled from "styled-components";

function Fullscreen({ images, setFullscreen, fullScreen }) {
  const selectedImage = images[fullScreen.image].image;

  // Handlers
  const nextImage = () => {
    setFullscreen((prev) =>
      prev.image >= images.length - 1
        ? { ...prev, image: 1 }
        : { ...prev, image: prev.image + 1 }
    );
  };

  const prevImage = () => {
    setFullscreen((prev) =>
      prev.image <= 0
        ? { ...prev, image: images.length - 1 }
        : { ...prev, image: prev.image - 1 }
    );
  };
  return (
    <Main>
      <div
        className="close"
        onClick={() => setFullscreen((prev) => ({ ...prev, active: false }))}
      >
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
      <div className="imageContainer">
        <Prev onClick={prevImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.456"
            height="43.891"
            viewBox="0 0 25.456 43.891"
          >
            <g id="Arrow" transform="translate(1.768 1.768)">
              <line
                id="Line_9"
                data-name="Line 9"
                x2="31"
                transform="translate(21.92 40.355) rotate(-135)"
                fill="none"
                stroke="#ff003b"
                strokeWidth="5"
              />
              <line
                id="Line_10"
                data-name="Line 10"
                x2="30"
                transform="translate(21.92 0) rotate(135)"
                fill="none"
                stroke="#ff003b"
                strokeWidth="5"
              />
            </g>
          </svg>
        </Prev>
        <img src={selectedImage} alt={selectedImage} />
        <Next onClick={nextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.456"
            height="43.891"
            viewBox="0 0 25.456 43.891"
          >
            <g id="Arrow" transform="translate(-1695.054 -428.055)">
              <line
                id="Line_9"
                data-name="Line 9"
                x2="31"
                transform="translate(1696.822 470.178) rotate(-45)"
                fill="none"
                stroke="#ff003b"
                strokeWidth="5"
              />
              <line
                id="Line_10"
                data-name="Line 10"
                x2="30"
                transform="translate(1696.822 429.822) rotate(45)"
                fill="none"
                stroke="#ff003b"
                strokeWidth="5"
              />
            </g>
          </svg>
        </Next>
      </div>
    </Main>
  );
}

const Main = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;

  .close {
    float: right;
    margin: 20px 20px 0 0;
    cursor: pointer;
    transition: 100ms ease;
    position: fixed;
    right: 0;

    &:hover {
      transform: scale(1.2);
    }
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 1300px;

      object-fit: cover;
    }

    button {
      margin: 50px;
    }
  }

  @media (max-width: 1500px) {
    .imageContainer {
      img {
        width: 90%;
        height: auto;
      }

      button {
        z-index: 100;
        margin: -50px;
      }
    }

    .close {
      svg {
        width: 90%;
      }
    }
  }
`;

const Next = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: end;
  align-items: center;
  pointer-events: all;
  transition: 100ms ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const Prev = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  pointer-events: all;
  transition: 100ms ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Fullscreen;
