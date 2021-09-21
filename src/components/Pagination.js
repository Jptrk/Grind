import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pagination = ({ data, setPage, page, myRef }) => {
  const dataCount = data;
  const pageCount = Math.round(dataCount / 18);

  // Functions
  const ListCount = () => {
    const pageList = [];
    for (let i = countStart(); i < countEnd(); i++) {
      pageList.push(
        <Link to={`/page/${i + 1}`} key={i + 1}>
          <motion.li
            className={page === i + 1 ? "active" : ""}
            onClick={() => pageHandler(i)}
          >
            {i + 1}
          </motion.li>
        </Link>
      );
    }

    return pageList;
  };

  const executeScroll = () => myRef.current.scrollIntoView();

  // Dont change
  const countStart = () => {
    if (page < 5) {
      return 0;
    } else {
      if (page >= pageCount - 3) {
        //Page equals to 198 out of 202
        return pageCount - 5;
      } else {
        return page - 3;
      }
    }
  };

  const countEnd = () => {
    if (page >= pageCount - 3) {
      return pageCount;
    } else {
      if (page < 5) {
        return 5;
      } else {
        return page + 2;
      }
    }
  };

  // Handlers
  const pageHandler = (i) => {
    executeScroll();

    if (page > pageCount) {
      // setPage((prev) => prev + 1);
      setPage(page + 1);
    } else {
      setPage(i + 1);
    }
  };

  const prevButtonHandler = () => {
    executeScroll();
    if (page === 1) {
      setPage(1);
    } else {
      // setPage((prev) => prev - 1);
      setPage(page - 1);
    }
  };

  const nextButtonHandler = () => {
    executeScroll();
    if (page >= pageCount) {
      setPage(pageCount);
    } else {
      // setPage((prev) => prev + 1);
      setPage(page + 1);
    }
  };

  return (
    <>
      {pageCount > 0 && (
        <Page>
          {data && (
            <>
              <ul>
                {page > 1 && (
                  <Link to={`/page/${page - 1}`}>
                    <li onClick={prevButtonHandler} className="prev">
                      Prev
                    </li>
                  </Link>
                )}
                {page >= 5 && (
                  <>
                    <Link to={`/page/${1}`}>
                      <li
                        onClick={() => {
                          executeScroll();
                          setPage(1);
                        }}
                      >
                        1
                      </li>
                    </Link>
                    <p>...</p>
                  </>
                )}

                {ListCount()}
                {page < pageCount - 3 && (
                  <>
                    <p>...</p>

                    <Link to={`/page/${pageCount}`}>
                      <li
                        onClick={() => {
                          executeScroll();
                          setPage(pageCount);
                        }}
                      >
                        {pageCount}
                      </li>
                    </Link>
                  </>
                )}
                {page < pageCount && (
                  <Link to={`/page/${page + 1}`}>
                    <li onClick={nextButtonHandler} className="prev">
                      Next
                    </li>
                  </Link>
                )}
              </ul>
            </>
          )}
        </Page>
      )}
    </>
  );
};

const Page = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Bahnschrift;
  }

  ul a {
    text-decoration: none;
    color: white;
  }

  ul p {
    padding-top: 1rem;
    margin: 0 0.5rem;
    width: 50px;
    height: 50px;
    text-align: center;
  }

  li {
    position: relative;
    text-align: center;
    width: 50px;
    height: 50px;

    margin: 0 15px;
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding-bottom: 2px;
  }

  li:hover {
    transition: 500ms ease;
    background-color: #ff003b;
    color: white;
  }

  .active {
    background-color: #ff003b;
    color: white;
  }

  .prev {
    min-width: 2rem !important;
  }

  @media (max-width: 768px) {
    ul {
      flex-wrap: wrap;
    }
    li {
      font-size: 13px;
      margin: 5px 5px;
    }
  }
`;
export default Pagination;
