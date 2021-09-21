import styled from "styled-components";

function Footer() {
  return (
    <Main>
      <p>Grind © 2021. All Rights Reserved.</p>
    </Main>
  );
}

const Main = styled.div`
  background-color: #171717;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 60px;
  border-top: solid 1px #272727;
  p {
    width: 1200px;
    margin: auto;
    color: white;
    font-family: Bahnschrift;
    font-size: 13px;
  }

  @media (max-width: 1366px) {
    padding: 0 40px;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export default Footer;
