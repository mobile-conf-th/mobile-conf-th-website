import React, { useEffect, useState } from "react";
import {
  color,
  onTablet,
  onMobile,
  Container,
  onDesktop
} from "../components/common";
import { Logo } from "../components/logo";
import { Countdown } from "../components/countdown";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "react-scroll";
import { Hamburger } from "../components/hamburger";

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
  border: solid transparent 0.1875rem;
  padding-bottom: 0.625rem;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.1875rem;
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

const Links = ({ close }) => (
  <>
    <Link to="home" {...linkConfig} onClick={close}>
      Home
    </Link>
    <Link to="about" {...linkConfig} onClick={close}>
      About
    </Link>
    <Link to="schedule" {...linkConfig} onClick={close}>
      Schedule
    </Link>
    <Link to="speakers" {...linkConfig} onClick={close}>
      Speakers
    </Link>
    <Link to="sponsors" {...linkConfig} onClick={close}>
      Sponsers
    </Link>
    <Link to="location" {...linkConfig} onClick={close}>
      Location
    </Link>
  </>
);
const Nav = () => {
  const [isTop, setIsTop] = useState(window.scrollY === 0);
  const [isOpen, setOpen] = useState(false);

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

        ${onTablet} {
          ${isOpen ? `background-color: ${color.darkGray}` : ``}
        }
      `}
    >
      <Container
        css={css`
          margin: 0 auto;
          display: flex;
          align-items: center;
          height: 4.6875rem;
          justify-content: space-between;
          max-width: 78rem;
          width: 100%;
        `}
      >
        <Logo />

        <Hamburger onClick={() => setOpen(!isOpen)} isOpen={isOpen} />
        <div
          css={css`
            a {
              margin: 0 0.625rem;
              color: white;
              font-size: 1rem;
              text-decoration: none;
            }
            ${onTablet} {
              display: none;
            }
          `}
        >
          <Global styles={active} />
          <Links />
          <a href="http://www.eventpop.me" target="_blank">
            <button
              css={[
                css`
                  margin-left: 3.125rem;

                  ${isTop ? transparentButton : greenButton}
                `,
                smallButton
              ]}
            >
              BUY TICKET
            </button>
          </a>
        </div>
      </Container>
      <div
        css={css`
          ${onDesktop} {
            display: none;
          }
          position: absolute;
          width: 100%;
          height: 100vh;
          background-color: ${color.darkGray};
          display: flex;
          opacity: ${isOpen ? 1 : 0};
          ${isOpen ? "" : "visibility: hidden;"}
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: visibility 0.4s ease, opacity 0.4s ease;
          a {
            display: flex;
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
            margin: 1em 0;
          }
        `}
      >
        <div
          css={css`
            background-color: white;
            height: 0.1rem;
            width: 95%;
            position: absolute;
            top: 0;
          `}
        />
        <Links close={() => setOpen(false)} />
        <a href="http://www.eventpop.me" target="_blank">
          <button
            css={[
              css`
                ${greenButton}
                width: 13rem;
                height: 4rem;
                margin-bottom: 10rem;
              `
            ]}
          >
            BUY TICKET
          </button>
        </a>
      </div>
    </section>
  );
};

// Buttons

const baseButtonStyle = css`
  color: white;
  padding: 0.625rem 0.9375rem;
  border-radius: 0.375rem;
  width: 10.9375rem;
  height: 3.125rem;
  font-weight: 600;
  transition: border, background-color 0.4s ease;
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
  border: solid white 0.125rem;

  &:hover {
    color: ${color.darkGray};
    background-color: white;
  }
`;

const ButtonTransparent = styled.button`
  ${transparentButton}
`;

const smallButton = css`
  font-size: 1rem;
  width: 9.375rem;
  height: 2.5rem;
  line-height: 1.1;
`;
// Header css

const HeaderSection = styled.section`
  height: 53.75rem;
  display: flex;
  flex-direction: column;

  ${onTablet} {
    height: 53.75rem;
  }
`;

const headerContentContainer = css`
  color: white;
  margin-top: 8rem;
  margin: auto;
  padding: 0;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ActionGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3.125rem;

  ${Button}, ${ButtonTransparent} {
    margin: 0 1.0625rem;
  }
`;

const SubTitle = styled.h2`
  line-height: 1;
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1.25rem;

  ${onMobile} {
    font-size: 2rem;
  }
`;

const Title = styled.h1`
  line-height: 1;
  font-size: 5.25rem;
  font-weight: 700;
  margin-bottom: 0.3125rem;
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

              <div
                css={css`
                  margin: 2rem auto;
                  width: 5rem;
                  height: 0.2rem;
                  border-radius: 1.5px;
                  background-color: white;
                `}
              />
              <div
                css={css`
                  font-weight: 500;
                  font-size: 1.5rem;
                `}
              >
                20 AUGUST 2019
              </div>
            </HeaderContent>
            <ActionGroup>
              <a href="http://www.eventpop.me" target="_blank">
                <Button>BUY TICKET</Button>
              </a>

              <Link to="about" {...linkConfig}>
                <ButtonTransparent>MORE INFO</ButtonTransparent>
              </Link>
            </ActionGroup>
          </Container>
        </HeaderSection>
      </Background>
      <div
        css={css`
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3.125rem;
        `}
      >
        <Countdown />
      </div>
    </div>
  );
};

export default Header;
