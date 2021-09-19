//Libraries
import styled from "styled-components";

const Nav = () => {
  return (
    <Header>
      <Navigation>
        <Logo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="89"
            height="21"
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
        </Logo>
        <Links>
          <ul>
            <li className="active">ALL GAMES</li>
            <li>PS4</li>
            <li>PS5</li>
            <li>XBOX</li>
            <li>NINTENDO SWITCH</li>
          </ul>
        </Links>
      </Navigation>
    </Header>
  );
};

const Header = styled.div`
  background-color: #171717;
  height: 60px;
  border-bottom: 1px solid #2d2d2d;

  h1 {
    color: #ff003b;
  }
`;

const Navigation = styled.div`
  width: 1200px;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1366px) {
    width: 100%;
    padding: 0 40px 0 40px;
  }
  @media (max-width: 425px) {
    padding: 0 20px 0 20px;
  }
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const Links = styled.div`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    li {
      position: relative;
      height: 100%;
      margin: 0 30px;
      display: flex;
      align-items: center;

      font-size: 14px;
      font-weight: bold;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .active {
      &::after {
        content: "";
        height: 2px;
        width: 100%;
        background-color: #ff003b;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export default Nav;