import { useState } from "react";
import styled from "styled-components";

// Components
import Filter from "./Filter";

const DropdownFilter = ({ windowSize, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const selected = (e) => {
    setSelectedOption(e.target.innerText);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Header className="header">
        <div>
          <h1>ALL GAMES</h1>
        </div>
        <div className="sort">
          <p className="label">Sort by:</p>
          <Dropdown>
            <DropDownHeader onClick={toggling}>
              <p>{selectedOption}</p>
              <span>
                <svg
                  className={isOpen ? "arrow opened" : "arrow"}
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.773"
                  height="15.468"
                  viewBox="0 0 8.773 15.468"
                >
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M.238,8.338l6.646,6.883a.8.8,0,0,0,1.155,0l.489-.507a.869.869,0,0,0,0-1.2l-5.58-5.78L8.535,1.951a.87.87,0,0,0,0-1.2L8.045.247a.8.8,0,0,0-1.155,0L.238,7.137a.876.876,0,0,0,0,1.2Z"
                    fill="#ff003b"
                  />
                </svg>
              </span>
            </DropDownHeader>
            {isOpen && (
              <DropdownList>
                <ListItem onClick={(e) => selected(e)}>Popular</ListItem>
                <ListItem onClick={(e) => selected(e)}>Release Date</ListItem>
                <ListItem onClick={(e) => selected(e)}>Rating</ListItem>
              </DropdownList>
            )}
          </Dropdown>
        </div>
      </Header>
      {windowSize < 1850 && <Filter />}
    </>
  );
};

const Dropdown = styled.div`
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 709px) {
    display: block;
    h1 {
      text-align: left;
      margin-bottom: 30px;
    }

    .label {
      text-align: left;
      margin-bottom: 20px;
    }
  }

  p {
    font-weight: bold;
  }

  .sort {
    display: flex;
    align-items: center;
    p {
      margin-right: 20px;
    }

    @media (max-width: 709px) {
      display: block !important;
    }
  }
`;

const DropDownHeader = styled.div`
  cursor: pointer;
  height: 45px;
  width: 175px;
  padding: 12px 20px;
  text-align: left;
  color: #ff003b;
  border: 2px solid #ff003b;
  margin-bottom: -2px;
  background: #171717;

  display: flex;
  align-items: center;

  p {
    font-weight: normal !important;
    user-select: none;
  }

  span {
    margin-left: auto;

    .arrow {
      transform: rotate(-90deg);
      transition: 100ms ease;
    }
  }

  .opened {
    transform: rotate(90deg) !important;
  }

  @media (max-width: 709px) {
    width: 250px;
  }
`;
const DropdownList = styled.div`
  position: absolute;
  text-align: left;
  margin: 0;
  background: #171717;
  border: 2px solid #ff003b;
  box-sizing: border-box;
  color: #ff003b;
  font-size: 1rem;
  width: 175px;
  user-select: none;
  cursor: pointer;

  @media (max-width: 709px) {
    width: 250px;
  }
`;

const ListItem = styled.div`
  padding: 12px 20px;

  &:hover {
    color: white;
    background-color: #ff003b;
  }
`;

export default DropdownFilter;
