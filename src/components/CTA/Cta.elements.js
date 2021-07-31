import styled from "styled-components";
import { BgImg } from "../Svg/Svg";

export const CtaDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 5%;
  background-color: darkslateblue;

  background-image: url("${BgImg}");

  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;

    height: auto;
    padding: 0;
  }
`;

export const CtaHeading = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    margin: 10% 0 0 0;
  }
`;

export const CtaButton = styled.button`
  border: none;
  font-size: 1.5rem;

  width: 200px;
  height: auto;

  margin: 1%;
  padding: 3%;

  border-radius: 50px;
  background-color: #fff;
  color: #bfbfbf;
  &:hover {
    color: #3b3054;
    background-color: cyan;
  }

  @media screen and (min-width: 768px) {
    background-color: blue;
    width: 300px;
    height: auto;
    padding: 1%;
    margin: 3% 0 7% 0;
  }
`;
