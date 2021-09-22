import styled from "styled-components";

function GameListLoader() {
  return (
    <Card>
      <div className="image"></div>
      <div className="details">
        <div className="title"></div>
        <div className="genre"></div>
        <div className="rating"></div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  background-color: #171717;
  border: solid 1px #272727;
  height: 360px;
  overflow: hidden;
  padding: 20px;

  .image {
    height: 70%;
    width: 100%;

    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #000000, #171717, #000000);
    background-size: 200% 100%;
  }

  .details {
    padding: 20px 0;
    height: 115px;
  }

  .title {
    height: 16px;

    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #000000, #171717, #000000);
    background-size: 200% 100%;
  }

  .genre {
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #000000, #171717, #000000);
    background-size: 200% 100%;

    height: 16px;
    margin-top: 10px;
    margin-bottom: 10px;

    p {
      margin-right: 10px;
    }
  }

  .rating {
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #000000, #171717, #000000);
    background-size: 200% 100%;
    height: 19px;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -80% 0;
    }
  }
`;

export default GameListLoader;
