import styled from "styled-components";

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: rgb(27, 27, 27);
  color: #fff;
  padding: 7% 20% 0 20%;

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 0;
    margin: 3% 0 0 20%;
  }
`;

export const IconDiv = styled.div`
  width: 100%;
  height: auto;
  font-size: 2rem;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    padding: 3%;
  }
`;
//FaFacebookSquare
//AiOutlineTwitter
//FaPinterest
//AiOutlineInstagram
