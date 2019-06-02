import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../sections/header";
import AboutUs from "../sections/about-us";
import Schedule from "../sections/schedule";
import OurSpeakers from "../sections/our-speakers";
import Location from "../sections/location";
import OurSponsors from "../sections/sponsors";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mobile`, `conference`, `thai`]} />
    <Header />
    <AboutUs />
    <Schedule />
    <OurSpeakers />
    <OurSponsors />
    <Location />
  </Layout>
);

export default IndexPage;
