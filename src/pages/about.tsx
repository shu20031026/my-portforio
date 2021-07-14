import React from "react";
import { Link } from "gatsby";
import "twin.macro";
import { css } from "@emotion/react";
import MyPageLayout from "../layout/my-page-layout";

const introductionContainer = css``;

const About = () => {
  return (
    <MyPageLayout tw="h-screen">
      <div css={introductionContainer}>
        <div>
          <h1>About</h1>
        </div>
        <div>
          <p>
            2019年より北九州高専に在学.
            2020年11月より同校コンピューター研究部に入部しプログラミング学習中.
            2021年現在 県内の企業にてwebエンジニアとしてアルバイトとして活動.
          </p>
        </div>
        <div>
          <div>
            <img></img>
          </div>
          <div>
            <h2>中嶋 柊</h2>
            <h3>Nakashuma Shu</h3>
            <dl>
              <dt>在籍 :</dt>
              <dd>北九州工業高等専門学校 情報システムコース 3年</dd>
              <dt>出身 :</dt>
              <dd>福岡県内</dd>
              <dt>生年月日 :</dt>
              <dd>2003年10月26日(17歳)</dd>
            </dl>
            <div>
              <h3>技術領域</h3>
              <ol>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Go言語</li>
                <li>C/C++</li>
              </ol>
            </div>
            <div>
              <dl>
                <dt>gmail: </dt>
                <dd>
                  <a href="mailto:shu20031026@gmail.com">
                    shu20031026@gmail.com
                  </a>
                </dd>
                <dt>Twitter</dt>
                <dd>
                  <a href="https://twitter.com/hiiragi61848684" target="_blank">
                    @hiiragi61848684
                  </a>
                </dd>
                <dt>Github</dt>
                <dd>
                  <a href="https://github.com/shu20031026" target="_blank">
                    shu20031026
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </MyPageLayout>
  );
};

export default About;
