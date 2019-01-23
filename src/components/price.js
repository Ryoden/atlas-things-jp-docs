import React from 'react'
import SectionDiv from './util'


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
  <SectionDiv id="price" name="価格表（価格はすべて税抜きです）">
    <div className="columns">
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
    </div>

    <div className="columns">
      <div className="column">
        <div className="card">
          <header className="card-header">
            <div className="card-header-title">Enterprise</div>
          </header>
          <div className="card-content">
            <p>上記以上の場合は、お気軽にお問合せください。</p>
            <p>100万件以上の入出荷数量でも対応可能です。</p>
          </div>
        </div>
      </div>
    </div>
  </SectionDiv>
)

export default Price
