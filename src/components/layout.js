import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { color } from "./common";
import { css } from "@emotion/core";

import "./layout.css";

const Footer = () => (
  <footer
    css={css`
      background-color: ${color.blue};
      color: white;
      text-align: center;
      height: 4.6875rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    `}
  >
    © 2019 All right reserved, Mobile Conf 2019
  </footer>
);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {children}
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
