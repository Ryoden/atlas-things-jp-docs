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

const ScrollToTop = styled.a`
  position: fixed;
  bottom: 50px; 
  right: 10px;
  padding: 6px 40px;

  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 46px;
    height: 46px;
    margin-left: -23px;
    border: 1px solid #fff;
    border-radius: 100%;
    box-sizing: border-box;
  }

  span::after {
    position: absolute;
    top: 70%;
    left: 50%;
    content: '';
    width: 16px;
    height: 16px;
    margin: -12px 0 0 -8px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    box-sizing: border-box;
  }
`

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
        <ScrollToTop href="#"><span></span></ScrollToTop>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
