import React from 'react'
import SEO from '../components/seo'
import Header from '../sections/header'
import Countdown from '../sections/countdown'
import AboutUs from '../sections/about-us'
import Layout from '../components/layout'

import { css } from '@emotion/core'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mobile`, `conference`, `thai`]} />
    <Header />
    <div
      css={css`
        margin-top: -90px;
      `}
    >
      <Countdown />
    </div>
    <AboutUs />
  </Layout>
)

export default IndexPage
