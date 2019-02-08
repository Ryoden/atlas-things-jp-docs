import React from 'react'
import styled from 'styled-components'
import SectionDiv from './util'


const FeatureList = styled.div.attrs({
  className: "columns"
})``

function FeatureItem({name, children}) {
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{name}</p>
        </header>
        <div className="card-content">
          {children}
        </div>
      </div>
    </div>
  )
}


const Feature = () => (
  <SectionDiv id="feature" name="特徴">
    <FeatureList>
      <FeatureItem name="対応データフォーマット">
        データフォーマットに制限はありません。
        RFID タグや２次元コードを読み取るハードウェアがあれば対応できます。
      </FeatureItem>
    
      <FeatureItem name="トレーサビリティ">
        データキャリアに縛られない管理を行います。
        そのため、様々なライフサイクルを持つ個品の入出荷履歴を追跡できます。
      </FeatureItem>

      <FeatureItem name="階層構造あり入出荷情報">
        入出荷情報を登録する時に階層構造を指定することが可能です。
        階層構造に制限はなく、コンテナ→パレット→商品のようできます。
      </FeatureItem>
    </FeatureList>

    <FeatureList>
      <FeatureItem name="拠点単位での入出荷">
      </FeatureItem>

      <FeatureItem name="クライアント認証">
      </FeatureItem>

      <FeatureItem name="最低契約期間なし">
      </FeatureItem>
    </FeatureList>

    <FeatureList>
      <FeatureItem name="WebAPI 公開">
      </FeatureItem>

      <FeatureItem name="簡易ダッシュボード">
      </FeatureItem>

      <FeatureItem name="BI ツール連携">
      </FeatureItem>
    </FeatureList>

    <FeatureList>
      <FeatureItem name="セキュリティ">
      </FeatureItem>

      <FeatureItem name="BCP/DR対策">
      </FeatureItem>

      <FeatureItem name="24時間365日の稼働監視">
      </FeatureItem>
    </FeatureList>
  </SectionDiv>
)

export default Feature
