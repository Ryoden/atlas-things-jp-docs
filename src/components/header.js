import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderBar = styled.div`
  background-color: #1eb9ee;
  margin-bottom: 1.45rem;
`

const HeaderBody = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <HeaderBody>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
    </HeaderBody>
  </HeaderBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
