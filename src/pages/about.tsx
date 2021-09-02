import "twin.macro";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import MyPageLayout from "src/layout/my-page-layout";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

const DummyPic = css`
  width: 250px;
  height: 250px;
  background-color: gray;
`;

const TitleStyle = css`
  font-family: "Raleway", sans-serif;
`;

const TextStyle = css`
  font-family: "M PLUS 1p", sans-serif;
  font-family: "Sawarabi Mincho", sans-serif;
  font-weight: 500;
`;

const AboutPage: React.VFC = () => {
  return (
    <MyPageLayout>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&family=Sawarabi+Mincho&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div tw="sm:mx-auto sm:w-3/5 w-full ">
        <div>
          <h1 tw="text-5xl md:text-6xl text-center" css={TitleStyle}>
            About
          </h1>
        </div>
        <div tw="my-16 mx-10 lg:text-2xl" css={TextStyle}>
          <p tw="leading-8">
            2019年より北九州高専に在学.
            <br />
            2020年11月より同校コンピューター研究部に入部しプログラミング学習中.
            <br />
            2021年現在 県内の企業にてwebエンジニアとしてアルバイトとして活動.
          </p>
        </div>
        <div tw="xl:flex xl:flex-row">
          <div css={DummyPic} tw="mx-auto">
            <img />
          </div>

          <div tw="mt-12 sm:mt-0 mx-auto">
            <div tw="flex flex-row justify-center sm:mt-4 py-6">
              <h2 tw="text-2xl sm:text-4xl mr-5">中嶋 柊</h2>
              <h3 tw="sm:text-3xl">Nakashuma Shu</h3>
            </div>
            <div tw="flex justify-center flex-col my-10 sm:text-xl">
              <div tw="flex flex-col mx-auto">
                <div tw="flex">
                  <p tw="mr-2">在籍 :</p>
                  <p>北九州工業高等専門学校</p>
                </div>
                <div tw="flex">
                  <p tw="mr-2">出身 :</p>
                  <p>福岡県内</p>
                </div>
                <div tw="flex">
                  <p tw="mr-2">生年月日 :</p>
                  <p>2003年10月26日(17歳)</p>
                </div>
              </div>
              <div tw="flex flex-col mx-auto my-8 sm:my-0">
                <div tw="flex">
                  <div tw="mr-2">gmail :</div>
                  <div tw="hover:text-gray-300">
                    <a
                      href="mailto:&#115;&#104;&#117;&#50;&#48;&#48;&#51;&#49;&#48;&#50;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;&#10;"
                    >
                      &#115;&#104;&#117;&#50;&#48;&#48;&#51;&#49;&#48;&#50;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;&#10;
                    </a>
                  </div>
                </div>
                <div tw="flex">
                  <div tw="mr-2">Twitter :</div>
                  <div tw="hover:text-gray-300">
                    <a
                      href="https://twitter.com/hiiragi61848684"
                      target="_blank"
                    >
                      @hiiragi61848684
                    </a>
                  </div>
                </div>
                <div tw="flex">
                  <div tw="mr-2">Github :</div>
                  <div tw="hover:text-gray-300">
                    <a href="" target="_blank">
                      shu20031026
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyPageLayout>
  );
};

export default AboutPage;
