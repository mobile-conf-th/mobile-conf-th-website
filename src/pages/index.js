import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../sections/header";
import AboutUs from "../sections/about-us";
import Schedule from "../sections/schedule";
import OurSpeakers from "../sections/our-speakers";
import { color } from "../components/common";
import GenSection from "../components/gen-section";

const OurSponsors = () => (
  <GenSection
    id="sponsors"
    title="OUR SPONSORS"
    color={color.blue}
    textColor="white"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </GenSection>
);
const Location = () => (
  <GenSection id="location" title="LOCATION">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </GenSection>
);

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
