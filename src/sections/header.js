import React, { useEffect, useState } from "react";
import { color, Container } from "../components/common";
import { Logo } from "../components/logo";
import { Countdown } from "../components/countdown";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const active = css`
  .active:after {
    background-color: ${color.green} !important;
  }
`;

const navLink = css`
  position: relative;
  cursor: pointer;
  border: solid transparent 3px;
  padding-bottom: 10px;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background-color: transparent;
    transition: background-color 0.4s ease;
  }
`;

const linkConfig = {
  spy: true,
  smooth: true,
  offset: -100,
  activeClass: active.className,
  css: navLink
};
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
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        transition: background-color 0.4s linear;
        ${isTop
          ? ``
          : `
          background-color: ${color.darkGray};
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
          max-width: 1248px;
          width: 100%;
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
          <Global styles={active} />
          <Link to="home" {...linkConfig}>
            Home
          </Link>
          <Link to="about" {...linkConfig}>
            About
          </Link>
          <Link to="schedule" {...linkConfig}>
            Schedule
          </Link>
          <Link to="speakers" {...linkConfig}>
            Speakers
          </Link>
          <Link to="sponsors" {...linkConfig}>
            Sponsers
          </Link>
          <Link to="location" {...linkConfig}>
            Location
          </Link>
          <button
            css={[
              css`
                margin-left: 50px;

                ${isTop ? transparentButton : greenButton}
              `,
              smallButton
            ]}
          >
            BUY TICKET
          </button>
        </div>
      </Container>
    </section>
  );
};

// Buttons

const baseButtonStyle = css`
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  width: 175px;
  height: 50px;
  font-weight: 600;
  transition: border, background-color 0.4s linear;
`;

const greenButton = css`
  ${baseButtonStyle}
  background-color: ${color.green};
  border: none;

  &:hover {
    background-color: ${color.lightGreen};
  }
`;

const Button = styled.button`
  ${greenButton}
`;

const transparentButton = css`
  ${baseButtonStyle}
  background: transparent;
  border: solid white 2px;

  &:hover {
    color: ${color.darkGray};
    background-color: white;
  }
`;

const ButtonTransparent = styled.button`
  ${transparentButton}
`;

const smallButton = css`
  font-size: 16px;
  width: 150px;
  height: 40px;
  line-height: 1.1;
`;
// Header css

const HeaderSection = styled.section`
  height: 700px;
  display: flex;
  flex-direction: column;
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
        backgroundColor={color.darkGray}
      >
        {children}
      </BackgroundImage>
    )}
  />
))`
  width: 100%;
  background-position: bottom center;
  background-size: cover;
`;

const Header = () => {
  const sectionRef = React.createRef();
  return (
    <div
      id="home"
      css={css`
        position: relative;
      `}
    >
      <Nav />
      <Background>
        <HeaderSection ref={sectionRef}>
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
      <div
        css={css`
          position: absolute;
          left: 0;
          right: 0;
          bottom: -50px;
        `}
      >
        <Countdown />
      </div>
    </div>
  );
};

export default Header;
