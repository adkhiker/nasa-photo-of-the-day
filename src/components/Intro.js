import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
`;

const Paragraph = styled.p`
  text-align: justify;
  color: #ead866;
  padding: 0rem;
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

function Intro() {
  return (
    <Container>
      <Paragraph>
        Thank you for joining us on a visual tour of the cosmos, brought to you
        by NASA and Greg Poirier, an innovative software engineer. Here you'll
        see NASA's astronomy image of the day. You may pick an earlier date to
        view an image or a video from that date.
      </Paragraph>
    </Container>
  );
}

export default Intro;
