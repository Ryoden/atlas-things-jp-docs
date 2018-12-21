import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Price from '../components/price'
import Contact from '../components/contact'
import Feature from '../components/feature';

const IndexPage = () => (
  <Layout>
    <Title />
    <Feature />
    <Price />
    <Contact />
  </Layout>
)

export default IndexPage
