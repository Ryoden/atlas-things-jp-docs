import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Price from '../components/price'
import Contact from '../components/contact'
import Feature from '../components/feature'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo
      title="クラウド入出荷管理サービス"
      keywords={[`入出荷`,`RTI`,`循環容器`,`リターナブルラック`,`金属モジュール`,`パレット`,`車両管理`,`完成車`,`完成車物流`,`SCM`,`サプライチェーン`]}
    />
    <Title />
    <Feature />
    <Price />
    <Contact />
  </Layout>
)

export default IndexPage
