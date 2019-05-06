import React from 'react'
import { Container, color } from '../components/common'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const sectionContainer = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`

const H2 = styled.h2``

const Line = styled.hr`
  color: ${color.green};
  height: 2px;
  width: 60px;
  background-color: ${color.green};
  border-radius: 2px;
`

const AboutUs = () => (
  <Container css={sectionContainer}>
    <H2>ABOUT US</H2>
    <Line />
    <p
      css={css`
        max-width: 800px;
        text-align: center;
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Container>
)

export default AboutUs
