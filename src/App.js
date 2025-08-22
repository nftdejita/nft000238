// import React from "react";
import React, { useRef } from "react";
import LightRays from "./blocks/backgrounds/LightRays/LightRays.jsx";
import TextPressure from "./blocks/textanimations/TextPressure/TextPressure.jsx";
import DecryptedText from "./blocks/textanimations/DecryptedText/DecryptedText.jsx";
import TrueFocus from "./blocks/textanimations/TrueFocus/TrueFocus.jsx";
import VariableProximity from "./blocks/textanimations/VariableProximity/VariableProximity.jsx";
import ElectricBorder from "./blocks/animations/ElectricBorder/ElectricBorder.jsx";
import ScrollVelocity from "./blocks/textanimations/ScrollVelocity/ScrollVelocity.jsx";
import InfiniteScroll from "./blocks/components/InfiniteScroll/InfiniteScroll.jsx";
import ScrollFloat from "./blocks/textanimations/ScrollFloat/ScrollFloat.jsx";
import ScrollReveal from "./blocks/textanimations/ScrollReveal/ScrollReveal.jsx";
import Plasma from "./blocks/backgrounds/Plasma/Plasma.jsx";
import { color } from "motion";

export default function App() {
  const containerRef = useRef(null);
  return (
    // ページ全体を黒背景
    <div style={{ minHeight: "100vh", backgroundColor: "#000" }}>
      {/* Section1 Heroセクション */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
          minHeight: "100vh", // 画面全体
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* 背景 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            fadeDistance={1}
            saturation={1}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
          />
        </div>

        {/* 前面コンテンツ */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            textAlign: "left", // ← 左寄せ
            padding: "0 16px",
            width: "80%",
            margin: "0 auto",
            paddingTop: "8rem"
          }}
        >
          <div className="w-full my-4" style={{margin: "0 auto" }}>
            {/* h1 = TextPressure */}
            <div className="my-4" style={{ marginBottom: "1rem" }}>
              <TextPressure
                text="0xEXiA"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                minFontSize={48}
              />
            </div>

            {/* 説明文 = DecryptedText */}
            <div className="my-4" style={{ fontSize: "20px", lineHeight: 1.8 }}>
              <DecryptedText
                text="0xEXiAは、個人開発エンジニアとして活動しています。"
                animateOn="view"
                revealDirection="start"
                maxIterations={10}
                speed={60}
                sequential={true}
              />
              <br />
              <DecryptedText
                text="新しい技術を用いたサービスを作るのが好きです。"
                animateOn="view"
                revealDirection="start"
                maxIterations={10}
                speed={60}
                sequential={true}
              />
              <br />
              <DecryptedText
                text="自分が面倒だと感じたことを解決するプロダクトを作ってきました。"
                animateOn="view"
                revealDirection="start"
                maxIterations={10}
                speed={60}
                sequential={true}
              />
              <br />
              <DecryptedText
                text="アイデアから動くものが作られたときに達成感を感じます。"
                animateOn="view"
                revealDirection="start"
                maxIterations={10}
                speed={60}
                sequential={true}
              />
            </div>
          </div>
        </div>

      </section>

      {/* --- Section 2 About --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          {/* セクションタイトル */}
          <div className="text-3xl md:text-5xl font-bold mb-8">
            <TrueFocus
            sentence="About Me"
            manualMode={true}
            blurAmount={5}
            borderColor="#5227ff"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
            />
          </div>

          {/* コンテンツ */}
          <div className="space-y-6">
            {/* 1枚目 */}
            {/* <ElectricBorder
              color="#5227ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16, display: "block" }}
            > */}
              <div className="bg-black/60 rounded-2xl p-6">
                <p className="text-lg leading-relaxed opacity-90">
                    Python / Flask で便利な Web アプリを作ってきました。<br />
                  Solidity ではシンプルな DEX や NFT 販売所を開発し、ブロックチェーンにも触れています。<br />
                  また AI と IoT を組み合わせたプロジェクトにも挑戦しています。
                </p>
              </div>
            {/* </ElectricBorder> */}

            {/* 2枚目 */}
            {/* <ElectricBorder
              color="#5227ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16, display: "block" }}
            > */}
              <div className="bg-black/60 rounded-2xl p-6">
                <p className="text-lg leading-relaxed opacity-90">
                    新しい技術を取り入れてサービスを作るのが好きです。<br />
                  「自分が面倒だ」と思ったことを解決するプロダクトを形にしてきました。
                </p>
              </div>
            {/* </ElectricBorder> */}

            {/* 3枚目 */}
            <ElectricBorder
              color="#5227ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16, display: "block" }}
            >
              <div className="bg-black/60 rounded-2xl p-6">
                <p className="text-lg leading-relaxed opacity-90">
                    大切にしているのは「とにかく動くものを早く出すこと」。<br />
                  完成度よりも MVP を素早く作り、実際に使ってフィードバックを得ることを重視しています。
                </p>
              </div>
            </ElectricBorder>

            {/* 4枚目 */}
            {/* <ElectricBorder
              color="#5227ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16, display: "block" }}
            > */}
              <div className="bg-black/60 rounded-2xl p-6">
                <p className="text-lg leading-relaxed opacity-90">
                    現在は大学院で、大規模言語モデル（LLM）の内部機構を研究しています。<br />
                  研究と開発の両面から、AI の可能性を広げることを目指しています。
                </p>
              </div>
            {/* </ElectricBorder> */}
          </div>
        </div>
      </section>

      {/* --- Section 3 Skills --- */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white">
        {/* セクションタイトル */}
        <ScrollVelocity
            texts={['Skills Skills Skills Skills', 'Python Flask Solidity']}
            velocity={100}
            className="custom-scroll-text"
          />
        <div className="w-full max-w-4xl mx-auto px-6 py-16">

          {/* コンテンツ */}
          {/* InfiniteScroll 適用 */}
          <div style={{ height: '500px', position: 'relative' }}>
            <InfiniteScroll
              items={[
                { content: <h3 className="text-2xl font-bold" style={{ color: "#5227ff" }}>Web / Backend</h3> },
                {
                  content: (
                    <p>
                      Python & Flask → web app or REST API<br />
                      database : SQLite
                    </p>
                  ),
                },
                { content: <h3 className="text-2xl font-bold" style={{ color: "#5227ff" }}>AI / 音声</h3> },
                {
                  content: (
                    <p>
                      GPT-4 API & Whisper→ 要約抽出<br />
                      +Voicevox API で Instagram / YouTube の自動投稿システム
                    </p>
                  ),
                },
                { content: <h3 className="text-2xl font-bold" style={{ color: "#5227ff" }}>IoT</h3> },
                {
                  content: (
                    <p>
                      音声で家電を操作する Alexa-like デバイス<br />
                      例えば「今日暑いね」と話しかけると、<br />エアコンが起動する
                    </p>
                  ),
                },
                { content: <h3 className="text-2xl font-bold" style={{ color: "#5227ff" }}>Blockchain / Web3</h3> },
                {
                  content: (
                    <p>
                      Solidity → 簡単なDEX や NFT 販売所<br />
                      dApps を多数体験
                    </p>
                  ),
                },
              ]}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={1}
              autoplayDirection="up"
              pauseOnHover={true}
            />
          </div>
        </div>
      </section>

      {/* --- Section 4 Works / Projects --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          {/* セクションタイトル */}
          <div className="text-3xl md:text-6xl font-bold mb-8">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Works / Projects
            </ScrollFloat>
          </div>

          {/* コンテンツ */}
          <article className="mb-8 text-lg">
            <h3 className="text-lg font-bold" style={{ color: "#5227ff" }}>業務改善アプリ（起業）</h3>
            <p>
              スーパーの商談音声を Whisper と GPT で構造化データ（価格・個数など）に変換。<br />
              従来 3 時間かかっていた作業を 30 分程度に短縮し、大幅な省力化に貢献しました。
            </p>
          </article>

          <article className="mb-8">
            <h3 className="text-lg font-bold" style={{ color: "#5227ff" }}>音声アシスタント × スマートホーム</h3>
            <p>
              OpenAI と Voicevox を組み合わせた “Alexa-like” デバイスを開発。<br />
              自然言語で家電を操作できる仕組みにより、日常のタスクを自動化しました。
            </p>
          </article>

          <article className="mb-8">
            <h3 className="text-lg font-bold" style={{ color: "#5227ff" }}>Simple DEX / NFT 販売所（学習作）</h3>
            <p>
              基本的な Swap と ERC-721 の Listing / Buying を最小構成で実装。<br />
              UI からコントラクト、トランザクション処理まで一連の流れを体感しました。
            </p>
          </article>

          <article>
            <h3 className="text-lg font-bold" style={{ color: "#5227ff" }}>福岡未踏 チーム開発（最優秀賞）</h3>
            <p>
              要件のすり合わせからプロトタイプ作成、検証までのサイクルをチームで実践。<br />
              その成果が評価され、最優秀賞を受賞しました。
            </p>
          </article>

        </div>
      </section>
      {/* --- Section 5 DeFi Sandbox for Intern --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          {/* セクションタイトル */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8">DeFi Sandbox for Intern</h2>

          {/* コンテンツ */}
          <p className="text-lg leading-relaxed">
            私は次世代の金融システムに強い関心を持っています。<br />
            インターンでは、自分一人では思いつかないようなユニークな特徴を持つ DeFi を形にしてみたいと考えています。
            実際に動く仕組みを作りながら理解を深め、挑戦を積み重ねていきたいと思います。
          </p>
        </div>
      </section>
      {/* --- Section 6 Hobbies / Fun --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          {/* セクションタイトル */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Hobbies / Fun</h2>

          {/* コンテンツ */}
          <p className="text-lg leading-relaxed">
            趣味のひとつはヒエログリフの学習です。壁画に描かれた単語を少しずつ読めるようになることを目標にしています。<br />
            また、目隠しでのルービックキューブにも挑戦しており、集中力と記憶力を鍛える楽しみになっています。<br />
            そのほか、体を動かすことも好きで、スキーやテニスを楽しんでいます。
          </p>
        </div>
      </section>
      <footer className="w-full flex items-center justify-center bg-black text-white">
        <p>© 0xEXiA — Portfolio</p>
      </footer>

    </div>
  );
}
