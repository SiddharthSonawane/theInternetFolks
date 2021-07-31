import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column-reverse;
  background-color: #fff;
  padding: 30% 1% 70% 1%;
  width: auto;
  height: auto;
  z-index: -1;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 8% 8% 50% 8%;
  }
`;

export const HeadingContainer = styled.div`
  width: auto;
  margin-top: 100px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 30%;
    margin: 0 5%;
    padding: 3%;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    /* position: absolute;
    top: 100px;
    right: 200px; */
  }
`;

export const SubTitle = styled.p`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    /* position: absolute;
    top: 150px;
    right: 300px; */
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 480px;
  @media screen and (min-width: 768px) {
    width: 735px;
    height: auto;
    margin-left: 5%;
  }
`;
