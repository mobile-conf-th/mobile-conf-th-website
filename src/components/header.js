import React from 'react'
import { color, Container } from './common'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Nav = () => (
  <section
    css={css`
      display: flex;
      justify-content: space-between;
    `}
  >
    <div>LOGO</div>
    <div
      css={css`
        a {
          padding: 0 10px;
        }
      `}
    >
      <a>Home</a>
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
  border-radius: 4px;
  padding: 10px 15px;
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
  border: solid white 1px;

  &:hover {
    color: ${color.blue};
    background-color: white;
  }
`

const Line = styled.hr`
  color: white;
  height: 2px;
  width: 120px;
  background-color: white;
  border-radius: 2px;
`

const HeaderSection = styled.section`
  background: ${color.blue};
  height: 900px;
  display: flex;
  flex-direction: column;
`

const navContainerStlye = css`
  color: white;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`

const headerContentContainerStyle = css`
  color: white;
  margin: auto;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;

  ${Line} {
    margin-top: 60px;
  }
`

const ActionGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  ${Button} {
    margin: 0 5px;
  }
`

const SubTitle = styled.h2`
  font-size: 4em;
  font-weight: normal;
`

const Title = styled.h1`
  font-size: 7em;
`

const green = css`
  color: ${color.green};
`

const Header = () => (
  <HeaderSection>
    <Container css={navContainerStlye}>
      <Nav />
    </Container>
    <Container css={headerContentContainerStyle}>
      <HeaderContent>
        <SubTitle>WELCOME TO</SubTitle>
        <Title>MOBILE CONF</Title>
        <Title css={green}>2019</Title>
        <ActionGroup>
          <Button>BUY TICKET</Button>
          <ButtonTransparent>MORE INFO</ButtonTransparent>
        </ActionGroup>
        <Line />
      </HeaderContent>
    </Container>
  </HeaderSection>
)

export default Header
