import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="404"
    />
    <div className="hero is-medium is-info" style={{ marginTop: 100, padding: 50 }}>
      <h1 className="title">404 NOT FOUND</h1>
    </div>
  </Layout>
)

export default NotFoundPage
