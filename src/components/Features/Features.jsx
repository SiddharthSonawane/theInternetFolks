import React from "react";
import { FeatureOne, FeatureTwo, FeatureThree } from "./FeaturesCard";
import {
  Feature,
  FeatureHeadingContainer,
  FeatureCardContainer,
  H1,
  SubPara,
} from "./Features.elements";

const Features = () => {
  return (
    <Feature>
      <FeatureHeadingContainer>
        <H1>Advance Statistics</H1>
        <SubPara>
          Track how your links are performing across the web with <br /> our
          advance statistic dashboard.
        </SubPara>
      </FeatureHeadingContainer>

      <FeatureCardContainer>
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
      </FeatureCardContainer>
    </Feature>
  );
};

export default Features;
