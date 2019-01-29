import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mobile`, `conference`, `thai`]} />
    <h1>Welcome to Mobile Conference Bangkok 2019</h1>
    <p>Is this a real life?</p>
    <p>Is this just fantasy?</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/sponsors/">Sponsors</Link>
  </Layout>
)

export default IndexPage
