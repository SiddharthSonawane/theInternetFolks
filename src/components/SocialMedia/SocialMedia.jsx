import React from "react";
import { SocialMediaContainer, IconDiv } from "./SocialMedia.elements";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagramSquare,
} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <IconDiv>
        <FaFacebookSquare />
      </IconDiv>
      <IconDiv>
        <FaTwitter />
      </IconDiv>
      <IconDiv>
        <FaPinterest />
      </IconDiv>
      <IconDiv>
        <FaInstagramSquare />
      </IconDiv>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
