import React from "react";
import { css } from "@emotion/core";
import GenSection from "../components/gen-section";

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
        src="https://maps.google.com/maps?q=Charn%20Issara%20Tower%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  </GenSection>
);

export default Location;
