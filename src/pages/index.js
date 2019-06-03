import React from 'react'
import { Global, css } from '@emotion/core'
import { onMobile, onSmallMobile } from '../components/common'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../sections/header'
import AboutUs from '../sections/about-us'
import Schedule from '../sections/schedule'
import OurSpeakers from '../sections/our-speakers'
import Location from '../sections/location'
import OurSponsors from '../sections/sponsors'

const IndexPage = () => (
  <Layout>
    <SEO
      lang="th"
      keywords={[`mobile`, `conference`, `conf`, `thailand`, `2019`]}
    />
    <Global
      styles={css`
        ${onMobile} {
          html {
            font-size: 12px;
          }
        }
        ${onSmallMobile} {
          html {
            font-size: 10px;
          }
        }
      `}
    />
    <Header />
    <AboutUs />
    <Schedule />
    <OurSpeakers />
    <OurSponsors />
    <Location />
  </Layout>
)

export default IndexPage
