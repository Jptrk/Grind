import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <Main>
        <div className="loader">
          <h1>Loading...</h1>
        </div>
        <div className="overlay"></div>
      </Main>
    </>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: center;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(23, 23, 23, 1);
    z-index: 1;
  }

  .loader {
    h1 {
      color: #ff003b;
      text-transform: uppercase;
    }

    z-index: 2;
    margin: auto;
    width: fit-content;
  }
`;

export default Loading;
