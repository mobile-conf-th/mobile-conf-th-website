import React from 'react'
import SEO from '../components/seo'
import Header from '../sections/header'
import Countdown from '../sections/countdown'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mobile`, `conference`, `thai`]} />
    <Header />
    <Countdown />
  </Layout>
)

export default IndexPage
