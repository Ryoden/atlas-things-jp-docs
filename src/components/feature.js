import React from 'react'
import styled from 'styled-components'
import TitleBar from './titleBar'

const Hero = styled.section.attrs({
  className: 'hero is-fullheight'
})`
`

const Feature = () => (
  <Hero id="feature">
    <TitleBar title="特徴" subtitle="" />
  </Hero>
)

export default Feature
