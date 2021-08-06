import styled from "styled-components";

export const Feature = styled.div`
  display: block;

  width: 100%;
  height: auto;
  padding-bottom: 3%;
  background-color: #eff1f7;
  padding-top: 25%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 60%;
    padding-top: 13%;
    justify-content: space-around;
  }
`;

export const FeatureHeadingContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 1% 0;
  }
`;

export const FeatureCardContainer = styled.div`
  background-color: #eff1f7;
  @media screen and (min-width: 768px) {
    display: flex;
    height: auto;
    margin: 3% 0;
  }
`;

export const Div = styled.div`
  display: block;

  align-items: center;
  justify-items: center;
  width: auto;
  height: auto;
  margin: 3% 5% 20% 5%;
  padding: 10%;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    height: auto;
    padding: 3%;
    margin: 0 3%;
  }
`;

export const SubDiv = styled.div`
  position: relative;
  bottom: 80px;
  left: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  padding: 8%;
  background-color: #3b3054;

  @media screen and (min-width: 768px) {
    text-align: left;
    left: 0;
    width: 100px;
    height: 100px;
    padding: 10%;
    margin: 1%;
  }
`;

export const H1 = styled.h1`
  margin-top: 5%;
  padding-top: 5%;
  text-align: center;
  color: black;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 3%;
  }
`;

export const CardHeading = styled.h1`
  text-align: left;
  margin: 3% 0;
  color: #3b3054;
`;

export const P = styled.p`
  text-align: left;
`;

export const SubPara = styled.p`
  text-align: center;
  color: #3b3054;
  margin-bottom: 10%;
`;
