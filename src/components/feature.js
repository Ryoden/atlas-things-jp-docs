import React from 'react'
import styled from 'styled-components'
import TitleBar from './titleBar'
import Abstract from '../images/abstract.png'

const Hero = styled.section.attrs({
  className: 'hero is-fullheight'
})`
`

const Feature = () => (
  <Hero id="feature">
    <TitleBar title="特徴" subtitle="" />
    <div className="media container">
      <img className="media-left" src={Abstract} width="450" alt="概要図" />
      <div className="media-content">
        <p>
          ATLAS-Things は RFID や QR に代表される自動認識技術を活用し、モノの入出荷を記録するためのクラウドサービスです。
          従来の入出荷管理サービスのような数量管理ではなく、自動認識技術により『個品管理』を実現します。
          マルチテナント方式で提供されるため、安価かつ迅速に提供することが可能です。
          モノの入出荷を確実に把握することにより、無駄な在庫を無くしたり、在庫の紛失を予防したりすることが期待できます。
        </p>
        <br />
        <p>
          ATLAS-Things は入出荷の把握に特化したクラウドサービスであり、実際の読取機器に制限はありません。
          ATLAS-Things が提供する『 WebAPI 』を活用し、ユーザーが独自に開発することも可能です。
          RFID ゲートで読み取った入出荷データを一括登録するクライアントを開発したり、ハンディで QR を読み取った入出荷データを
          個品登録したりするクライアントを開発することも可能です。
        </p>
        <br />
        <p>
          また、簡易分析機能を標準で提供します。それに加えて、ユーザーが慣れ親しんだツールを使えるように、
          標準でデータエクスポート機能を備えています。
        </p>
      </div>
    </div>
  </Hero>
)

export default Feature
