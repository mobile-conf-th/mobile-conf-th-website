import React from 'react'
import { color, Container } from '../components/common'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const active = css`
  border-bottom: solid ${color.green} 3px;
  padding-bottom: 7px;
`

const Nav = () => (
  <section
    css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
    <div>LOGO</div>
    <div
      css={css`
        a,
        button {
          margin: 0 10px;
        }
      `}
    >
      <a css={active}>Home</a>
      <a>About</a>
      <a>Schedule</a>
      <a>Speakers</a>
      <a>Sponsers</a>
      <a>Location</a>
    </div>
  </section>
)

const baseButtonStyle = css`
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  width: 175px;
  height: 50px;
  font-weight: 600;
`

const Button = styled.button`
  ${baseButtonStyle}

  background-color: ${color.green};
  border: none;

  &:hover {
    background-color: ${color.lightGreen};
  }
`

const ButtonTransparent = styled.button`
  ${baseButtonStyle}

  background: transparent;
  border: solid white 2px;

  &:hover {
    color: ${color.blue};
    background-color: white;
  }
`

const HeaderSection = styled.section`
  background: ${color.blue};
  height: 700px;
  display: flex;
  flex-direction: column;
`

const navContainer = css`
  color: white;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`

const headerContentContainer = css`
  color: white;
  margin-top: 110px;
  margin: auto;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ActionGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;

  ${Button}, ${ButtonTransparent} {
    margin: 0 17px;
  }
`

const SubTitle = styled.h2`
  line-height: 1;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 20px;
`

const Title = styled.h1`
  line-height: 1;
  font-size: 84px;
  font-weight: 700;
  margin-bottom: 5px;
`

const green = css`
  color: ${color.green};
`

const Header = () => (
  <HeaderSection>
    <Container css={navContainer}>
      <Nav />
    </Container>
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
)

export default Header
