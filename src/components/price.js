import React from 'react'
import styled from 'styled-components'
import Background from '../images/bg-price.jpg'
import TitleBar from './titleBar'

const Hero = styled.section.attrs({
  className: 'hero is-fullheight'
})`
  background-image: url(${Background});
  background-position: center center;
`

const PriceRoot = styled.div.attrs({
  className: 'columns'
})`
    margin-left: auto;
    margin-right: auto;
`

const PriceItem = styled.div.attrs({
  className: 'column card'
})`
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 70px;
`

const PriceItemHeader = styled.header.attrs({
  className: 'card-header is-size-5 has-text-weight-bold'
})``

const PriceItemContent = styled.div.attrs({
  className: 'card-content is-size-6'
})``

const Price = () => (
  <Hero id="price">
    <TitleBar title="価格表" subtitle="（価格は税抜きです。）" />
    <PriceRoot className="hero-body">
      <PriceItem>
        <PriceItemHeader>Starter</PriceItemHeader>
        <PriceItemContent>
          <table className="table">
            <thead>
              <tr><th colSpan="2">月間最大入出荷数</th></tr>
            </thead>
            <tbody>
              <tr><td>Small</td><td>20,000</td></tr>
              <tr><td>Medium</td><td>50,000</td></tr>
              <tr><td>Large</td><td>100,000</td></tr>
            </tbody>
          </table>
          <table className="table">
            <thead>
              <tr><th colSpan="2">月額</th></tr>
            </thead>
            <tbody>
              <tr><td>Small</td><td>￥50,000</td></tr>
              <tr><td>Medium</td><td>￥122,000</td></tr>
              <tr><td>Large</td><td>￥234,000</td></tr>
            </tbody>
          </table>
        </PriceItemContent>
      </PriceItem>
      <PriceItem>
        <PriceItemHeader>Professioanl</PriceItemHeader>
        <PriceItemContent>
        <table className="table">
            <thead>
              <tr><th colSpan="2">月間最大入出荷数</th></tr>
            </thead>
            <tbody>
              <tr><td>Small</td><td>250,000</td></tr>
              <tr><td>Medium</td><td>500,000</td></tr>
              <tr><td>Large</td><td>750,000</td></tr>
            </tbody>
          </table>
          <table className="table">
            <thead>
              <tr><th colSpan="2">月額</th></tr>
            </thead>
            <tbody>
              <tr><td>Small</td><td>￥420,000</td></tr>
              <tr><td>Medium</td><td>￥546,000</td></tr>
              <tr><td>Large</td><td>￥630,000</td></tr>
            </tbody>
          </table>
        </PriceItemContent>
      </PriceItem>
      <PriceItem>
        <PriceItemHeader>Enterprise</PriceItemHeader>
        <PriceItemContent>
        <table className="table">
            <thead>
              <tr><th colSpan="2">月間最大入出荷数</th></tr>
            </thead>
            <tbody>
              <tr><td>Small</td><td>1,000,000</td></tr>
              <tr><td>Medium</td><td>3,000,000</td></tr>
              <tr><td>Large</td><td>5,000,000</td></tr>
            </tbody>
          </table>
          <table className="table">
            <thead>
              <tr><th colSpan="2">月額</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td rowSpan="3" style={{ verticalAlign: "middle", textAlign: "center" }}>
                  お問い合わせ<br />ください
                </td>
              </tr>
              <tr><td>Medium</td></tr>
              <tr><td>Large</td></tr>
            </tbody>
          </table>
        </PriceItemContent>
      </PriceItem>
    </PriceRoot>
  </Hero>
)

export default Price
