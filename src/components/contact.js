import React from 'react'
import styled from 'styled-components'
import TitleBar from './titleBar'

const Hero = styled.section.attrs({
  className: 'hero is-fullheight'
})`
`

const Contact = () => (
  <Hero id="contact">
    <TitleBar title="お問い合わせ" subtitle="" />
  </Hero>
)

export default Contact
