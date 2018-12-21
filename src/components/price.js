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

function PriceItem({name, quantity, price}) {
  return (
    <tr>
      <td>{name}</td>
      <td className="has-text-right">{quantity}</td>
      <td className="has-text-right">{price}</td>
    </tr>
  )
}

function PriceList({name, children}) {
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <div className="card-header-title">{name}</div>
        </header>
        <div className="card-content">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="has-text-centered" style={{minWidth:"10em"}}>月間最大入出荷数</th>
                <th className="has-text-centered">月額</th>
              </tr>
            </thead>
            <tbody>
              {children}
            </tbody>
          </table>
        </div>
        <footer className="card-footer"></footer>
      </div>
    </div>
  )
}

const Price = () => (
  <Hero id="price">
    <TitleBar title="価格表（価格はすべて税抜きです）" />
    <div className="hero-body columns">
      <PriceList name="Starter">
        <PriceItem name="Small" quantity="20,000" price="￥50,000" />
        <PriceItem name="Medium" quantity="50,000" price="￥122,000" />
        <PriceItem name="Large" quantity="100,000" price="￥234,000" />
      </PriceList>
      <PriceList name="Professional">
        <PriceItem name="Small" quantity="250,000" price="￥420,000" />
        <PriceItem name="Medium" quantity="500,000" price="￥546,000" />
        <PriceItem name="Large" quantity="750,000" price="￥630,000" />
      </PriceList>
      <PriceList name="Enterprise">
        <PriceItem name="Small" quantity="1,000,000" price="" />
        <PriceItem name="Medium" quantity="2,000,000" price="" />
        <PriceItem name="Large" quantity="3,000,000" price="" />
      </PriceList>
    </div>
  </Hero>
)

export default Price
