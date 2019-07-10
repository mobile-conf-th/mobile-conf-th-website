import React from "react";
import { css } from "@emotion/core";
import GenSection from "../components/gen-section";
import {onMobile} from '../components/common'

const Location = () => (
  <GenSection id="location" title="LOCATION">
    <div
      css={css`
        padding: 0 4rem 3rem;
      `}
    >
      <h4
        css={css`
          font-size: 1.25rem;
          font-weight: 600;
          padding: 0.9375rem;
        `}
      >
        S31 Hotel
      </h4>
      <p>
        545 Sukhumvit Rd, Khwaeng Khlong Toei Nuea, Khet Watthana,
      </p>
      <p>
        Krung Thep Maha Nakhon 10110
      </p>
    </div>
    <div
      css={css`
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;

        ${onMobile} {
          padding-top: 100%;
          margin: 0 -1.5rem -6.25rem;
        }

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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7552138776427!2d100.56382361550179!3d13.733264601421242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee9b762895f%3A0xcbffbfb218432fa1!2sS31+Sukhumvit+Hotel!5e0!3m2!1sen!2sth!4v1562764295297!5m2!1sen!2sth"
        title="map"
        width="800"
        height="300"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  </GenSection>
);

export default Location;
