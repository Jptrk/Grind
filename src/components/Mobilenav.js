import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Mobilenav({ setShowMobile }) {
  return (
    <Main
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="close" onClick={() => setShowMobile(false)}>
        <svg
          id="Close"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
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
      </motion.div>
      <motion.div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 89 21"
        >
          <g id="Logo" transform="translate(-360 -20)">
            <text
              id="GRIND"
              transform="translate(390 21)"
              fill="#ff003b"
              fontSize="20"
              fontFamily="Bahnschrift"
              fontWeight="700"
            >
              <tspan x="0" y="16">
                GRIND
              </tspan>
            </text>
            <g id="gamepad" transform="translate(360 19.996)">
              <g
                id="Group_21"
                data-name="Group 21"
                transform="translate(13.679 6.831)"
              >
                <g id="Group_20" data-name="Group 20">
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M265.8,131.076a3.164,3.164,0,1,0,3.161,3.163A3.166,3.166,0,0,0,265.8,131.076Zm0,4.661a1.5,1.5,0,1,1,1.494-1.5A1.5,1.5,0,0,1,265.8,135.737Z"
                    transform="translate(-262.64 -131.076)"
                    fill="#ff003b"
                  />
                </g>
              </g>
              <g
                id="Group_23"
                data-name="Group 23"
                transform="translate(6.849 13.718)"
              >
                <g id="Group_22" data-name="Group 22">
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M135.821,266.45l1.719-1.721a.833.833,0,0,0-1.179-1.178l-1.717,1.719-1.717-1.719a.833.833,0,0,0-1.179,1.178l1.719,1.721-1.719,1.721a.833.833,0,1,0,1.179,1.178l1.717-1.719,1.717,1.719a.833.833,0,0,0,1.179-1.178Z"
                    transform="translate(-131.503 -263.307)"
                    fill="#ff003b"
                  />
                </g>
              </g>
              <g
                id="Group_25"
                data-name="Group 25"
                transform="translate(6.849 0.004)"
              >
                <g
                  id="Group_24"
                  data-name="Group 24"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M137.7,5.085,135.392.465a.834.834,0,0,0-1.492,0l-2.307,4.621a.833.833,0,0,0,.747,1.205h4.614a.833.833,0,0,0,.745-1.205Zm-4.012-.461.96-1.922.96,1.922Z"
                    transform="translate(-131.505 -0.004)"
                    fill="#ff003b"
                  />
                </g>
              </g>
              <g
                id="Group_27"
                data-name="Group 27"
                transform="translate(0 6.914)"
              >
                <g id="Group_26" data-name="Group 26">
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M5.322,132.676H.833a.834.834,0,0,0-.833.833V138a.833.833,0,0,0,.833.833H5.322A.834.834,0,0,0,6.155,138v-4.494A.834.834,0,0,0,5.322,132.676Zm-.833,4.494H1.667v-2.828H4.488v2.828Z"
                    transform="translate(0 -132.676)"
                    fill="#ff003b"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
      <div className="links">
        <ul>
          <li>
            <Link to="/" onClick={() => setShowMobile(false)}>
              ALL GAMES
            </Link>
          </li>

          <li>
            <Link to="/new" onClick={() => setShowMobile(false)}>
              NEW AND FEATURED
            </Link>
          </li>

          <li>
            <Link onClick={() => setShowMobile(false)} to="/upcoming">
              UPCOMING GAMES
            </Link>
          </li>
        </ul>
      </div>
    </Main>
  );
}

const Main = styled(motion.div)`
  user-select: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background-color: #171717;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    color: #ff003b;
  }

  a {
    text-decoration: none;
  }

  .logo {
    svg {
      width: 200px;
    }

    margin-bottom: 40px;
  }

  .search {
    display: flex;
    align-items: center;

    form {
      input {
        padding: 8px;
        width: 300px;
        outline: none;
        border-radius: none;
        border: solid 2px #ff003b;
        background-color: #171717;
        color: white;
        padding: 15px 15px;
      }
    }

    .icon {
      width: 25px;
      height: 25px;
      margin-left: 20px;
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0;
      list-style-type: none;

      li {
        position: relative;
        width: fit-content;
        font-size: 24px;
        padding: 50px 0 10px 0;
        height: fit-content;
        color: white;
        font-weight: bold;

        &:hover::after {
          width: 100%;
        }

        &::after {
          content: "";
          height: 2px;
          width: 0%;
          background-color: #ff003b;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: 500ms ease;
        }
      }
    }
  }

  .close {
    float: right;
    margin: 20px 20px 0 0;
    cursor: pointer;
    transition: 100ms ease;
    position: fixed;
    right: 0;
    top: 0;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default Mobilenav;
