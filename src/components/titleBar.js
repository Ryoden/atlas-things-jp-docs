import React from 'react'
import styled from 'styled-components'

const TitleBarRoot = styled.div.attrs({
  className: "hero is-info"
})`
  background-color: #dddddd;
  margin-top: 52px;
  padding: 20px 50px;
`

function TitleBar({title, subtitle}) {
  return (
    <TitleBarRoot>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </TitleBarRoot>
  )
}

export default TitleBar


