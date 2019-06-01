import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../sections/header";
import AboutUs from "../sections/about-us";
import Schedule from "../sections/schedule";
import OurSpeakers from "../sections/our-speakers";

import { css } from "@emotion/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mobile`, `conference`, `thai`]} />
    <Header />
    <AboutUs />
    <Schedule />
    <OurSpeakers />
  </Layout>
);

export default IndexPage;
