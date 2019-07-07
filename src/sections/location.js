import React from "react";
import { css } from "@emotion/core";
import GenSection from "../components/gen-section";

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
        {/* Charn Issara Tower 1 */}
        TBA
      </h4>
      {/*   <p> */}
      {/*     942 Rama 4 road, Khwaeng Suriya Wong, Khet Bang Rak, Krung Thep Maha */}
      {/*     Nakhon 10500 */}
      {/*   </p> */}
      {/* </div> */}
      {/* <div */}
      {/*   css={css` */}
      {/*     position: relative; */}
      {/*     overflow: hidden; */}
      {/*     padding-top: 56.25%; */}
      {/*  */}
      {/*     ${onMobile} { */}
      {/*       padding-top: 100%; */}
      {/*       margin: 0 -1.5rem -6.25rem; */}
      {/*     } */}
      {/*  */}
      {/*     iframe { */}
      {/*       position: absolute; */}
      {/*       top: 0; */}
      {/*       left: 0; */}
      {/*       width: 100%; */}
      {/*       height: 100%; */}
      {/*       border: 0; */}
      {/*     } */}
      {/*   `} */}
      {/* > */}
      {/*   <iframe */}
      {/*     title="map" */}
      {/*     width="800" */}
      {/*     height="300" */}
      {/*     src="https://maps.google.com/maps?q=Charn%20Issara%20Tower%201&t=&z=13&ie=UTF8&iwloc=&output=embed" */}
      {/*     frameBorder="0" */}
      {/*     scrolling="no" */}
      {/*     marginHeight="0" */}
      {/*     marginWidth="0" */}
      {/*   /> */}
    </div>
  </GenSection>
);

export default Location;
