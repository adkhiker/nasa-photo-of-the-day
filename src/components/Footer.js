import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  width: 100%;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
  text-align: center;

  p {
    padding: 0 1rem;
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: #f11513;
    }
  }
`;

//const apiKey = "lNC8oCJ2EiL15eHwhxfE41kjJoyciE1Pz6vQCyjD";

function Footer() {
  return (
    <>
      <FooterDiv>
        <p>
          API data provided by{" "}
          <a href="https://api.nasa.gov/api.html#apod">NASA</a>. Application
          created by <a href="https://poiriergreg.com/">Greg Poirier</a>.
        </p>
      </FooterDiv>
    </>
  );
}

export default Footer;
