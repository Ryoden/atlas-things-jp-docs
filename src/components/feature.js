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
        拠点ごとに入出荷を把握することができます。
        各拠点にクライアントを配置して入出荷情報を登録すれば、各拠点の在庫を把握できます。
      </FeatureItem>

      <FeatureItem name="クライアント認証">
        クライアントごとに API キーを用意して、確実なクライアント認証を実現します。
        APIキーが漏えいしてもクラウド側で無効化できます。
      </FeatureItem>

      <FeatureItem name="最低契約期間なし">
        月額課金のクラウドサービスです。<br />
        最短１ヶ月から利用可能で、最低利用期間はありません。
      </FeatureItem>
    </FeatureList>

    <FeatureList>
      <FeatureItem name="WebAPI 公開">
        利用するアプリケーションやプログラミング言語に制限はありません。
        仕様もオープンなため、ユーザーによるアプリ開発も可能です。
      </FeatureItem>

      <FeatureItem name="簡易ダッシュボード">
        入出荷数量や入出荷履歴など、簡易的にデータを確認することができます。
        滞留在庫など、簡易的な分析機能も確認できます。
      </FeatureItem>

      <FeatureItem name="BI ツール連携">
        データエクスポート機能を使用して、 BI ツールにでデータをインポートできます。
        これにより様々な分析ができるようになります。
      </FeatureItem>
    </FeatureList>

    <FeatureList>
      <FeatureItem name="セキュリティ">
        すべての通信は HTTPS により暗号化されます。
        また、認証により不正なデータのインポート・エクスポートを防ぎます。
      </FeatureItem>

      <FeatureItem name="BCP/DR対策">
        地理的に離れた複数のデータセンターで運用します。
        また、毎日データベースのバックアップを実施します。
      </FeatureItem>

      <FeatureItem name="稼働監視">
        24時間365日稼働を監視しています。<br />
        障害検知時には直ちに復旧作業を行い、安定した稼働を提供します。
      </FeatureItem>
    </FeatureList>
  </SectionDiv>
)

export default Feature
