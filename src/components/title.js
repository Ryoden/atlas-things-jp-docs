import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo2.png'

const Hero = styled.div.attrs({
  className: 'hero is-fullheight'
})`
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

const MainCopy = styled.div.attrs({
  className: 'title'
})`
  color: white;
  font-weight: bold;
`
const SubCopy = styled.div.attrs({
  className: 'subtitle'
})`
  color: white;
  font-weight: bold;
  padding-left: 3em;
`

const Red = styled.span`
  color: red;
`

const Title = ({ siteTitle }) => (
  <Hero>
    <div className="hero-body">
      <div className="section">
        <MainCopy>
          モノの入出荷記録をカンタンに
        </MainCopy>
        <SubCopy>
          モノの入出荷を記録することにより、各拠点での在庫を把握することが可能になります。
        </SubCopy>
        <div className="columns">
          <div className="column is-half">
            <HeroTitle style={{ minWidth: 500, maxWidth: 600 }}>
              <img src={Logo} alt={siteTitle} />
            </HeroTitle>
          </div>
          <div className="column">
            <HeroDetail>
              <Red>A</Red>utomatically<br />
              <Red>T</Red>racking, <Red>L</Red>ocating and <Red>A</Red>nalyzing <Red>S</Red>ervice<br />
              for Things
            </HeroDetail>
          </div>
        </div>
      </div>
    </div>
  </Hero>
)

export default Title