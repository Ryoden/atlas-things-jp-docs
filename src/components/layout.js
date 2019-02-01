import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import './all.scss'
import Background from '../images/bg-main.jpg'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', { offset: 60 });
}

const Body = styled.div.attrs({
  className: 'site-content'
})`
  &::before {
    position:fixed;
    top:0;
    left:0;
    z-index:-1;
    width:100vw;
    height:100vh;
    background:url(${Background});
    -webkit-background-size:contain;
    background-size:contain;
    content:"";
  }
`

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Body>
          {children}
        </Body>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
