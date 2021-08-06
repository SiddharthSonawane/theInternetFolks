import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 950px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 10% 2%;
  padding: 5% 7%;
  width: auto;
  height: auto;
  background-color: #232127;
  /* #2acfcf; */
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    top: 800px;
    left: 0;
    margin: 0 15%;
    padding: 1%;
    width: 70%;
    height: auto;
    font-size: 1rem;
  }
`;
export const Input = styled.input`
  width: auto;
  height: auto;
  padding: 5%;
  margin: 0 0 5% 0;
  border-radius: 50px;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 0.5rem;
    width: auto;
    height: 10%;
    padding: 1% 3%;
    margin: 0;
  }
`;

export const Button = styled.button`
  padding: 3%;
  width: auto;
  height: auto;
  border-radius: 50px;
  border: 2px #2acfcf solid;
  outline: #2acfcf;
  background-color: #fff;
  transition: all 0.5s;
  &:hover {
    background-color: #2acfcf;
    color: #fff;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    margin: 1% 0;
    padding: 1% 3%;
  }
`;

export const Content = styled.p`
  margin-right: 3%;
  color: #fff;
`;

export const Link = styled.a`
  color: blue;
`;

export const LoderDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin: 5% 0;
  padding: 3%;

  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    margin: 0;
    padding: 1% 5%;
  }
`;
