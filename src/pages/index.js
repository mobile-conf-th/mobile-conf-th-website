import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../sections/header'
import Countdown from '../sections/countdown'
import AboutUs from '../sections/about-us'
import Schedule from '../sections/schedule'
import OurSpeakers from '../sections/our-speakers'

import { css } from '@emotion/core'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mobile`, `conference`, `thai`]} />
    <Header />
    <div
      css={css`
        margin-top: -110px;
      `}
    >
      <Countdown />
    </div>
    <AboutUs />
    <Schedule />
    <OurSpeakers />
  </Layout>
)

export default IndexPage
