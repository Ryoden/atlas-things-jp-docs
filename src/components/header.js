import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

import Logo from '../images/logo.png'
import Catalog from '../../static/catalog.pdf'

class Header extends React.Component {
  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render(siteTitle) {
    return (
      <div className="navbar is-light is-fixed-top" role="navigation" aria-label="dropdown navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/#">
            <img src={Logo} alt={siteTitle} width="112" height="28" />
          </a>
          <div className="navbar-burger" data-target="navMenu" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'} id="navMenu">
          <div className="navbar-end" onClick={this.toggleNav}>
            <a className="navbar-item is-tab" href="/#">TOP</a>
            <a className="navbar-item is-tab" href="/#feature">特徴</a>
            <a className="navbar-item is-tab" href="/#price">価格表</a>
            <a className="navbar-item is-tab" href="/#contact">お問い合わせ</a>
            <a className="navbar-item is-tab" href={Catalog} download="catalog.pdf"><FontAwesomeIcon icon={faCloudDownloadAlt} />カタログ</a>
            <a className="navbar-item is-tab" href="https://docs.atlas-things.io/"><FontAwesomeIcon icon={faExternalLinkAlt} />WebAPI</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
