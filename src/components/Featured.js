//Libraries
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Rating from "./Ratings";

const Featured = ({ featuredGames }) => {
  // States
  const [featured, setFeatured] = useState([]);

  // Carousel
  const [active, setActive] = useState(1);
  const [tran, setTran] = useState(true);
  const [disable, setDisable] = useState(false);
  const [touch, setTouch] = useState({ start: 0, end: 0, drag: false });

  // Responsive Image
  const [imageSize, setImageSize] = useState(1200);

  const interval = useRef();

  // Use Effect
  useEffect(() => {
    setFeatured(featuredGames);
  }, [featuredGames]);

  useEffect(() => {
    // Update Active
    setFeatured((prev) =>
      prev.map((game) =>
        active === game.carouselId
          ? { ...game, active: true }
          : { ...game, active: false }
      )
    );

    // Slider Clone loop
    if (active === featured.length + 1) {
      setTimeout(() => {
        setTran(false);
        setActive(1);
      }, 300);
      setTimeout(() => {
        setTran(true);
      }, 600);
    }

    if (active === 0) {
      setTimeout(() => {
        setTran(false);
        setActive(featured.length);
      }, 300);
      setTimeout(() => {
        setTran(true);
      }, 600);
    }
  }, [active, featured.length]);

  useEffect(() => {
    // Set image size based on window size
    if (window.innerWidth <= 1366) {
      setImageSize(window.innerWidth - 250);
    } else {
      setImageSize(1200);
    }
    if (window.innerWidth <= 768) {
      setImageSize(window.innerWidth - 80);
    }
    if (window.innerWidth <= 425) {
      setImageSize(window.innerWidth - 40);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1366) {
        setImageSize(window.innerWidth - 250);
      } else {
        setImageSize(1200);
      }
      if (window.innerWidth <= 768) {
        setImageSize(window.innerWidth - 80);
      }
      if (window.innerWidth <= 425) {
        setImageSize(window.innerWidth - 40);
      }
    });

    autoplay();
    return () => clearInterval(interval.current);
  }, []);

  //   Handlers
  const autoplay = () => {
    interval.current = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 5000);
  };
  const nextImage = () => {
    if (active < featured.length + 1) {
      setActive((prev) => prev + 1);

      // Disable Button
      setDisable(true);
      setTimeout(() => {
        setDisable(false);
      }, 600);
    } else {
      setActive(1);
    }

    // Clear interval
    clearInterval(interval.current);
    autoplay();
  };

  const prevImage = () => {
    if (active > 0) {
      setActive((prev) => prev - 1);

      // Disable Button
      setDisable(true);
      setTimeout(() => {
        setDisable(false);
      }, 600);
    } else {
      setActive(3);
    }

    // Clear interval
    clearInterval(interval.current);
    autoplay();
  };

  const carouselNav = () => {
    const item = [];
    for (let i = 0; i < featured.length; i++) {
      item.push(
        <div
          className={active - 1 === i ? "active line" : "line"}
          onClick={() => setActive(i + 1)}
          key={i}
        ></div>
      );
    }

    return item;
  };

  const dragStart = (e) => {
    setTouch((prev) => ({ ...prev, start: e.clientX, drag: true }));
  };
  const dragEnd = (e) => {
    setTouch((prev) => ({ ...prev, drag: false }));
    if (touch.start - e.clientX > window.innerWidth / 3) {
      if (e.clientX !== 0) {
        if (touch.start > e.clientX) {
          nextImage();
        }
      }
    }

    if (touch.start - e.clientX < -window.innerWidth / 3) {
      if (e.clientX > 0) {
        if (touch.start < e.clientX) {
          prevImage();
        }
      }
    }
  };

  return (
    <>
      {featured.length !== 0 && (
        <Main>
          <h1>FEATURED AND POPULAR</h1>
          <Carousel
            style={{ width: imageSize + 20 + "px" }}
            drag="x"
            dragElastic={1}
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={(e) => dragStart(e)}
            onDragEnd={(e) => dragEnd(e)}
          >
            <Slider
              style={{
                transform: `translateX(-${
                  (imageSize + 20) * active + (imageSize + 20)
                }px)`,
                transition: `${!tran ? "none" : "300ms ease"}`,
              }}
            >
              {/* Clone */}
              <Card>
                <img
                  src={featured[featured.length - 2].background_image}
                  alt={featured[featured.length - 2].name}
                  className="inactive clone"
                  style={{ width: `${imageSize}px` }}
                />

                <CardDetails>
                  <h1>{featured[featured.length - 2].name}</h1>
                </CardDetails>
              </Card>
              <Card
                className={active === 0 ? "active clone" : "inactive clone"}
              >
                <img
                  src={featured[featured.length - 1].background_image}
                  alt={featured[featured.length - 1].name}
                  style={{ width: `${imageSize}px` }}
                />

                <CardDetails>
                  <h1>{featured[featured.length - 1].name}</h1>
                </CardDetails>
              </Card>
              {/* Images */}
              {featured.map((game) => (
                <Card
                  key={game.carouselId}
                  className={game.active ? "active" : "inactive"}
                >
                  <img
                    src={game.background_image}
                    alt={game.name}
                    style={{ width: `${imageSize}px` }}
                  />

                  <CardDetails
                    style={window.innerWidth <= 768 ? { opacity: 1 } : {}}
                    className="cardDetails"
                  >
                    <div className="details">
                      <h1>{game.name}</h1>
                    </div>
                    <div className="genre">
                      {game.genres.map((genre) => (
                        <p key={genre.name}>{genre.name}</p>
                      ))}
                    </div>
                    <div className="rating">
                      <Rating game={game.rating} />
                    </div>
                  </CardDetails>
                </Card>
              ))}
              {/* Clone */}
              <Card
                className={
                  active === featured.length + 1
                    ? "active clone"
                    : "inactive clone"
                }
              >
                <img
                  src={featured[0].background_image}
                  alt={featured[0].name}
                  style={{ width: `${imageSize}px` }}
                />
                <CardDetails>
                  <h1>{featured[0].name}</h1>
                </CardDetails>
              </Card>
              <Card>
                <img
                  src={featured[1].background_image}
                  alt={featured[1].name}
                  className="inactive clone"
                  style={{ width: `${imageSize}px` }}
                />

                <CardDetails>
                  <h1>{featured[1].name}</h1>
                </CardDetails>
              </Card>
            </Slider>
          </Carousel>
          {!touch.drag && (
            <Controls
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ width: imageSize + 170 + "px" }}
            >
              <Prev disabled={disable} onClick={prevImage}>
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
              <Next disabled={disable} onClick={nextImage}>
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
            </Controls>
          )}
          <Nav>{carouselNav()}</Nav>
        </Main>
      )}
    </>
  );
};

const Main = styled.div`
  padding-top: 60px;
  padding-bottom: 45px;
  overflow-x: hidden;
  position: relative;

  background-color: #171717;
  border-bottom: 1px solid #1d1d1d;
  h1 {
    width: 1200px;
    margin: auto auto 20px auto;

    @media (max-width: 1366px) {
      padding: 0 40px;
      width: 100%;
    }
    @media (max-width: 425px) {
      padding: 0 20px;
    }
  }
`;

const Carousel = styled(motion.div)`
  position: relative;
  cursor: grab;
  margin: auto;
`;

const Slider = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: fit-content;

  .active {
    opacity: 100%;
    align-self: center;
    align-content: center;
  }

  img {
    opacity: 100%;
    max-width: 1200px;
    min-height: 300px;
    height: 515px;
    object-fit: cover;
    border-radius: 3px;
    pointer-events: none;
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
`;
const Controls = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  height: 5px;

  @media (max-width: 1100px) {
    height: 15px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    .line {
      margin: 0 10px;
      width: 5px;
      height: 5px;
    }

    .active {
      width: 10px;
      height: 10px;
    }
  }

  .line {
    background-color: #ff003b;
    height: 2px;
    width: 50px;
    cursor: pointer;
    margin: 0 20px;
    transition: 100ms ease-in;

    @media (max-width: 768px) {
      margin: 0 15px;
      width: 5px;
      height: 5px;
    }
  }

  .active {
    background-color: #ff003b;
    height: 5px;
    width: 60px;

    @media (max-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }
`;

const CardDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  height: fit-content;
  /* background-image: linear-gradient(rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.7) 70%); */
  background-color: rgba(0, 0, 0, 0.6);
  padding: 25px 25px;
  transition: 500ms ease;
  opacity: 0;

  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: end;

  h1 {
    cursor: pointer;
    font-size: 20px;
    padding: 0;
    margin-bottom: 5px;
  }

  .genre {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
    p {
      font-size: 14px;
      margin: 0 10px 0 0;
      color: white;
      font-weight: 500;
      line-height: 1.5rem;
    }

    .active {
      opacity: 1;
    }
  }
`;

const Card = styled.div`
  position: relative;
  margin: 0 10px;
  max-height: 515px;
  border-radius: 3px;
  opacity: 10%;

  &:hover .cardDetails {
    opacity: 1;
  }
`;

export default Featured;
