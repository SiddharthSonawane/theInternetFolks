import React from "react";
import HomeImg from "./HomeImg";
import GetStarted from "../GetStarted/GetStarted";

import {
  HomeContainer,
  HeadingContainer,
  Heading,
  SubTitle,
  ImageDiv,
} from "./Home.elements";

const Home = () => {
  return (
    <HomeContainer>
      <HeadingContainer>
        <Heading>More than just shorter links</Heading>
        <SubTitle>
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </SubTitle>
      </HeadingContainer>
      <ImageDiv>
        <HomeImg />
      </ImageDiv>
      <GetStarted />
    </HomeContainer>
  );
};

export default Home;
