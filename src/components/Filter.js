import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// Actions
import { filterGenre, clearGenre } from "../actions/FilterGenreAction";
import { useEffect } from "react";

const Filter = ({ genre }) => {
  const [showGenre, setShowGenre] = useState(
    window.innerWidth <= 1850 ? false : true
  );

  const genres = useSelector((state) => state.genres.genreList);
  const dispatch = useDispatch();
  const dispatchClear = useDispatch();
  const selectedGenre = useSelector((state) => state.controls.genres);

  // Handlers
  const selectedHandler = (e, select) => {
    dispatch(filterGenre(e.target.checked, select));
  };

  useEffect(() => {}, [selectedGenre]);

  return (
    <Main>
      {genre && (
        <div className="genre-main">
          <AnimateSharedLayout>
            <Genre layout>
              <motion.div
                layout
                className={!showGenre ? "toggle margin-none" : "toggle"}
                onClick={() => setShowGenre((prev) => !prev)}
              >
                <h1>Genre</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <g id="Cross" transform="translate(-1633.5 -1186.5)">
                    <motion.line
                      id="Line_9"
                      data-name="Line 9"
                      x2="30"
                      transform="translate(1633.5 1201.5)"
                      fill="none"
                      stroke="#ff003b"
                      strokeWidth="5"
                    />

                    {!showGenre && (
                      <motion.line
                        id="Line_10"
                        data-name="Line 10"
                        x2="30"
                        transform="translate(1648.5 1186.5) rotate(90)"
                        fill="none"
                        stroke="#ff003b"
                        strokeWidth="5"
                      />
                    )}
                  </g>
                </svg>
              </motion.div>
              <AnimatePresence>
                {showGenre && (
                  <>
                    <motion.ul layout>
                      {genres.map((genre) => (
                        <li key={genre.id}>
                          <label>
                            <input
                              type="checkbox"
                              value={genre.name}
                              onChange={(e) => {
                                selectedHandler(e, genre.slug);
                              }}
                              checked={
                                selectedGenre.includes(genre.slug)
                                  ? true
                                  : false
                              }
                            />
                            <span className="checkmark"></span>
                            <p>{genre.name}</p>
                          </label>
                        </li>
                      ))}
                    </motion.ul>
                    <p
                      className="reset"
                      onClick={() => dispatchClear(clearGenre())}
                    >
                      Reset
                    </p>
                  </>
                )}
              </AnimatePresence>
            </Genre>
          </AnimateSharedLayout>
        </div>
      )}
    </Main>
  );
};

const Main = styled(motion.div)`
  width: 250px;
  padding: 40px 0 0 0;
  grid-column-end: span 1;

  .genre-main {
    border: solid 1px #272727;
  }

  .reset {
    cursor: pointer;
    color: #ff003b;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 1850px) {
    width: 100%;
  }
`;

const Genre = styled(motion.div)`
  background-color: #171717;
  padding: 20px;

  overflow: hidden;

  .toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  h1 {
    margin-bottom: 0;

    @media (max-width: 1850px) {
      margin-bottom: 0;
    }
  }
  ul {
    list-style-type: none;
    margin-top: 50px;
    margin-bottom: 50px;
    li {
      margin: 30px 0;
      left: 30px;
      position: relative;

      &:hover input ~ .checkmark {
      }

      input {
        cursor: pointer;
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ .checkmark {
          background-color: #ff003b;
        }
      }

      .checkmark {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: -30px;
        height: 15px;
        width: 15px;
        background-color: transparent;
        border: solid 2px #ff003b;
      }

      p {
        cursor: pointer;
      }
    }
  }
`;

export default Filter;
