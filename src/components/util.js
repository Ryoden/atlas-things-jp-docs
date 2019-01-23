import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding-top: 60px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 200px;
`

function SectionDiv({id, name, children}) {
  return (
    <Section id={id}>
      <div className="message">
        <div className="message-header">{name}</div>
        <div className="message-body">{children}</div>
      </div>
    </Section>
  )
}

export default SectionDiv
