import React from 'react'
import styled from 'styled-components'
import AbstractImage from '../images/abstract.png'
import SectionDiv from './util'

const Abstract = () => (
    <SectionDiv id="abstract" name="概要">
        <img src={AbstractImage} alt="概要図" style={{width: "600px"}} />
    </SectionDiv>
)

export default Abstract