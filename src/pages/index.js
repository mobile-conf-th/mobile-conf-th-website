import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../sections/header";
import AboutUs from "../sections/about-us";
import Schedule from "../sections/schedule";
import OurSpeakers from "../sections/our-speakers";
import { color } from "../components/common";
import GenSection from "../components/gen-section";
import { css } from "@emotion/core";

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
    <h4
      css={css`
        font-size: 20px;
        font-weight: 600;
        padding: 15px;
      `}
    >
      Charn Issara Tower 1
    </h4>
    <p>
      942 Rama 4 road, Khwaeng Suriya Wong, Khet Bang Rak, Krung Thep Maha
      Nakhon 10500
    </p>
    <div
      css={css`
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}
    >
      <iframe
        width="800"
        height="300"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Charn%20Issara%20Tower%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      />
    </div>
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
