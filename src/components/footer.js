import React from 'react'


const Footer = ({siteTitle}) => (
  <div className="footer hero is-dark">
    <div className="content has-text-centered">
      <p>
        <strong>{siteTitle}</strong> by <a href="http://www.ryoden.co.jp">RYODEN Corporation.</a>
      </p>
    </div>
  </div>
)

export default Footer
