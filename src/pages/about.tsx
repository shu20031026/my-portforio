import "twin.macro";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import MyPageLayout from "src/layout/my-page-layout";

const DummyPic = css`
  width: 250px;
  height: 250px;
  background-color: gray;
`;

const TitleStyle = css``;

const About: ReactNode = () => {
  return (
    <MyPageLayout>
      <div tw="sm:mx-auto sm:w-3/5 w-full">
        <div tw="justify-center mt-10">
          <h1 tw=" text-5xl pt-12" css={TitleStyle}>
            About
          </h1>
        </div>
        <div tw="my-20 ml-10">
          <p>
            2019年より北九州高専に在学.
            <br />
            2020年11月より同校コンピューター研究部に入部しプログラミング学習中.
            <br />
            2021年現在 県内の企業にてwebエンジニアとしてアルバイトとして活動.
          </p>
        </div>
        <div>
          <div css={DummyPic} tw="ml-24">
            <img />
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
                  <a
                    href="mailto:&#115;&#104;&#117;&#50;&#48;&#48;&#51;&#49;&#48;&#50;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;&#10;"
                  >
                    &#115;&#104;&#117;&#50;&#48;&#48;&#51;&#49;&#48;&#50;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;&#10;
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
