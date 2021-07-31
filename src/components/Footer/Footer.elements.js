import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: rgb(26, 24, 24);
  color: #fff;
  padding: 5% 0;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 5% 0;
    height: auto;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const AllFeatures = styled.div`
  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: 0 0 0 9%;
  }
`;

export const FooterDiv = styled.div`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    padding: 3%;
  }
`;

export const IconDiv = styled.div`
  text-align: center;
  color: #fff;
  padding-top: 3%;

  @media screen and (min-width: 768px) {
    margin: 5%;
  }
`;

export const FooterHeading = styled.h1`
  padding-top: 10%;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 0;
    text-align: left;
  }
`;
export const SubItems = styled.p`
  text-align: center;
  padding: 1% 0;
  @media screen and (min-width: 768px) {
    padding: 0;
    text-align: left;
  }
`;
