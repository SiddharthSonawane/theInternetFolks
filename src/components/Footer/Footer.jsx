import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  MainContainer,
  AllFeatures,
  FooterDiv,
  IconDiv,
  SvgImg,
  FooterHeading,
  SubItems,
} from "./Footer.elements";

import { FooterSvg } from "./FooterLogo";
const Footer = () => {
  return (
    <MainContainer>
      <IconDiv>
        <FooterSvg />
      </IconDiv>

      <AllFeatures>
        <FooterDiv>
          <FooterHeading>Features</FooterHeading>
          <SubItems>Link Shortening</SubItems>
          <SubItems>Branded Link</SubItems>
          <SubItems>Analytics</SubItems>
        </FooterDiv>

        <FooterDiv>
          <FooterHeading>Resources</FooterHeading>
          <SubItems>Blog</SubItems>
          <SubItems>Developer</SubItems>
          <SubItems>Support</SubItems>
        </FooterDiv>

        <FooterDiv>
          <FooterHeading>Company</FooterHeading>
          <SubItems>About</SubItems>
          <SubItems>Our Team</SubItems>
          <SubItems>Careers</SubItems>
          <SubItems>Contact</SubItems>
        </FooterDiv>
      </AllFeatures>
      <SocialMedia />
    </MainContainer>
  );
};

export default Footer;
