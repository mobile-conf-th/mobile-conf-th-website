import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Sponsors" />
    <h1>Sponsors</h1>
    <p>Whoever</p>
    <Link to="/">Go home!</Link>
  </Layout>
)

export default SecondPage
