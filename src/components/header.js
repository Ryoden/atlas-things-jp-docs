import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../images/logo.png'


const Header = ({ siteTitle }) => (
  <div className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/#">
        <img src={Logo} alt={siteTitle} width="112" height="28" />
      </a>
    </div>

    <div className="mabvar-menu" id="nav">
      <div className="navbar-start"></div>
      <div className="navbar-end">
        <a className="navbar-item is-tab" href="/#">TOP</a>
        <a className="navbar-item is-tab" href="/#price">価格表</a>
        <a className="navbar-item is-tab" href="/#contact">お問い合わせ</a>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
