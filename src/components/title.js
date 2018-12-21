import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo2.png'
import Background from '../images/bg-main.jpg'

const Hero = styled.div.attrs({
  className: 'hero is-fullheight'
})`
  background-image: url(${Background})
`

const HeroTitle = styled.div.attrs({
  className: 'box'
})``

const HeroDetail = styled.div.attrs({
  className: 'has-text-white is-size-3'
})`
  margin-top: 30px;
  margin-left: 10px;
`

const Title = ({ siteTitle }) => (
  <Hero>
    <div className="hero-body">
      <div className="columns">
        <div className="column">
          <HeroTitle style={{ minWidth: 500, maxWidth: 600 }}>
            <img src={Logo} alt={siteTitle} />
          </HeroTitle>
        </div>
        <div className="column">
          <HeroDetail>
            Automatically<br />
            Tracking, Locating and Analyzing<br />
            Service for Things
          </HeroDetail>
        </div>
      </div>
    </div>
  </Hero>
)

export default Title