import React from 'react'
import { color } from './style'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Container } from './style'

const Nav = () => (
  <section css={css`
    display: flex;
    justify-content: space-between;
  `}>
    <div>LOGO</div>
    <div css={css`
      a {
        padding: 0 10px;
      }
    `}>
      <a>Home</a>
      <a>About</a>
      <a>Schedule</a>
      <a>Speakers</a>
      <a>Sponsers</a>
      <a>Location</a>
    </div>
  </section>
)

const Button = styled.button`
  color: white;
  border-radius: 4px;
  padding: 10px 15px;

  background-color: ${color.green};
  border: none;

  &:hover {
    background-color: ${color.lightGreen};
  }
`

const ButtonTransparent = styled.button`
  color: white;
  border-radius: 4px;
  padding: 10px 15px;

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

const Header = () => (
  <section css={css`
      background: ${color.blue};
      height: 900px;
      display: flex;
      flex-direction: column;
    `}>
    <Container css={css`
      color: white;
      width: 960px;
      padding: 10px;
      margin: 0 auto;
  `}>
      <Nav />
    </Container>
  <Container css={css`
      color: white;
      margin: auto;
  `}>
    <div css={css`
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: auto;

      ${Line} {
        margin-top: 60px;
      }
    `}>
      <h2 css={css`
        font-size: 4em;
        font-weight: normal;
      `}>
        WELCOME TO
      </h2>
      <h1 css={css`font-size: 7em;`}>
        MOBILE CONF
      </h1>
      <h1 css={css`
        font-size: 7em;
        color: ${color.green};
      `}>
        2019
      </h1>
      <div css={css`
        display: flex;
        width: 100%;
        justify-content: center;

        ${Button} {
          margin: 0 5px;
        }
      `}>
        <Button>BUY TICKET</Button>
        <ButtonTransparent>MORE INFO</ButtonTransparent>
      </div>
      <Line/>
    </div>
  </Container>
</section>
)

export default Header
