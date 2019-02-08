import React from 'react'
import AbstractImage from '../images/abstract.png'
import SectionDiv from './util'

const Abstract = () => (
    <SectionDiv id="abstract" name="概要">
        <div className="columns">
            <figure className="column">
                <img src={AbstractImage} alt="概要図" style={{width: "500px"}} />
            </figure>
            <div className="column">
                <p>
                　ATLAS-Things は RFID や QR に代表される自動認識技術を活用し、
                モノの入出荷を記録するためのクラウドサービスです。
                従来の入出荷管理サービスのような数量管理ではなく、
                自動認識技術により『個品管理』を実現します。
                マルチテナント方式で提供されるため、安価かつ迅速に提供することが可能です。
                モノの入出荷を確実に把握することにより、無駄な在庫を無くしたり、
                在庫の紛失を予防したりすることが期待できます。
                </p>
                <p>
                　ATLAS-Things は入出荷の把握に特化したクラウドサービスであり、
                実際の読取機器に制限はありません。
                ATLAS-Things が提供する『 WebAPI 』を活用し、
                ユーザーが独自に開発することも可能です。
                RFID ゲートで読み取った入出荷データを一括登録するクライアントを開発したり、
                ハンディで QR を読み取った入出荷データを個品登録したりするクライアントを
                開発することも可能です。
                </p>
                <p>
                　また、簡易分析機能を標準で提供します。
                それに加えて、ユーザーが慣れ親しんだツールを使えるように、
                標準でデータエクスポート機能を備えています。
                </p>
            </div>
        </div>
    </SectionDiv>
)

export default Abstract