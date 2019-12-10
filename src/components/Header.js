import React from "react";
import styled from "styled-components";
import myImage from './image.png';

const HeaderDiv = styled.header`
  //width: 100%;
  background-color: #2f3e55;
  color: white;
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Audiowide", cursive;
  background-image: url(${myImage});
`;

const Title = styled.div`
  font-size: 2rem;
`;

function Header() {
  return (
    <>
      <HeaderDiv>
        <Title>Discover the Comos!</Title>
      </HeaderDiv>
    </>
  );
}

export default Header;
