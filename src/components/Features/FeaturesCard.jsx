import React from "react";
import Content from "./info";
import { Div, SubDiv, CardHeading, P } from "./Features.elements";

export const FeatureOne = () => {
  return (
    <Div>
      <SubDiv>{Content[0].icon}</SubDiv>
      <CardHeading>{Content[0].title}</CardHeading>
      <P>{Content[0].content}</P>
    </Div>
  );
};
export const FeatureTwo = () => {
  return (
    <Div>
      <SubDiv>{Content[1].icon}</SubDiv>
      <CardHeading>{Content[1].title}</CardHeading>
      <P>{Content[1].content}</P>
    </Div>
  );
};
export const FeatureThree = () => {
  return (
    <Div>
      <SubDiv>{Content[2].icon}</SubDiv>
      <CardHeading>{Content[2].title}</CardHeading>
      <P>{Content[2].content}</P>
    </Div>
  );
};
