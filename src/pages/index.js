import React from 'react'
import SEO from '../components/seo'
import Header from '../sections/header'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mobile`, `conference`, `thai`]} />
    <Header />
  </Layout>
)

export default IndexPage
