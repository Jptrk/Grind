import styled from "styled-components";

function Footer() {
  return (
    <Main>
      <div>
        <p>Grind © 2021. All Rights Reserved.</p>
      </div>
      <div>
        <p>
          Check out <a href="rawg.io">Rawg.io</a> for more.
        </p>
      </div>
    </Main>
  );
}

const Main = styled.div`
  background-color: #171717;
  border-top: solid 1px #272727;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  padding: 15px 60px;
  margin-top: auto;

  p {
    margin: 5px auto;
    color: white;
    font-family: Bahnschrift;
    font-size: 13px;
  }

  @media (max-width: 1366px) {
    p {
      width: 100%;
    }
    padding: 0 5px;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export default Footer;
