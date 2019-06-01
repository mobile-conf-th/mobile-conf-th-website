import React, { useEffect, useState } from "react";
import { color, Container } from "../components/common";
import { Logo } from "../components/logo";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

const active = css`
  border-bottom: solid ${color.green} 3px;
  padding-bottom: 10px;
`;

const Nav = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setIsTop(window.scrollY === 0);
      },
      true
    );
  }, []);

  return (
    <section
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        transition: background-color 0.5s linear;
        ${isTop
          ? ``
          : `
          background-color: ${color.darkGary};
        `}
      `}
    >
      <Container
        css={css`
          margin: 0 auto;
          display: flex;
          align-items: center;
          height: 75px;
          justify-content: space-between;
        `}
      >
        <Logo />
        <div
          css={css`
            a {
              margin: 0 10px;
              color: white;
              font-size: 16px;
              text-decoration: none;
            }
          `}
        >
          <AnchorLink href="#home" css={active}>
            Home
          </AnchorLink>
          <AnchorLink href="#about">About</AnchorLink>
          <AnchorLink href="#schedule">Schedule</AnchorLink>
          <AnchorLink href="#speakers">Speakers</AnchorLink>
          <a>Sponsers</a>
          <a>Location</a>
        </div>
      </Container>
    </section>
  );
};

const baseButtonStyle = css`
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  width: 175px;
  height: 50px;
  font-weight: 600;
`;

const Button = styled.button`
  ${baseButtonStyle}

  background-color: ${color.green};
  border: none;

  &:hover {
    background-color: ${color.lightGreen};
  }
`;

const ButtonTransparent = styled.button`
  ${baseButtonStyle}

  background: transparent;
  border: solid white 2px;

  &:hover {
    color: ${color.blue};
    background-color: white;
  }
`;

const HeaderSection = styled.section`
  height: 700px;
  display: flex;
  flex-direction: column;
`;

const navContainer = css`
  color: white;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`;

const headerContentContainer = css`
  color: white;
  margin-top: 110px;
  margin: auto;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ActionGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;

  ${Button}, ${ButtonTransparent} {
    margin: 0 17px;
  }
`;

const SubTitle = styled.h2`
  line-height: 1;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  line-height: 1;
  font-size: 84px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const green = css`
  color: ${color.green};
`;

const Background = styled(({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        bg: file(relativePath: { eq: "header-background.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={data.bg.childImageSharp.fluid}
        backgroundColor={color.darkGary}
      >
        {children}
      </BackgroundImage>
    )}
  />
))`
  width: 100%;
  background-position: bottom center;
  background-size: cover;
  z-index: -1;
`;

const Header = () => (
  <Background>
    <HeaderSection id="home">
      <Nav />
      <Container css={headerContentContainer}>
        <HeaderContent>
          <SubTitle>WELCOME TO</SubTitle>
          <Title>MOBILE CONF</Title>
          <Title css={green}>2019</Title>
        </HeaderContent>
        <ActionGroup>
          <Button>BUY TICKET</Button>
          <ButtonTransparent>MORE INFO</ButtonTransparent>
        </ActionGroup>
      </Container>
    </HeaderSection>
  </Background>
);

export default Header;
