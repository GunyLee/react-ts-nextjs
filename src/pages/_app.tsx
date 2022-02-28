import Head from "next/head";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { RecoilRoot } from "recoil";
import reset from "../styles/reset";
import createEmotionCache from "../utils/createEmotionCache";
import { theme } from "../styles/theme";
import { useRouter } from "next/router";
library.add(fal, far, fas, fab);
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
function MyApp(props: MyAppProps) {
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <title>기구까지 챙겨주는 운동 OTT 서비스, 써클인 플러스</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content="운동, 운동앱, 코치, 홈트, 홈PT, 온라인PT, 운동기구, 기구대여, 운동기구대여, 기구렌탈, 운동기구렌탈, 관리, OTT, PT, 써클인, 써클인플러스"
        />
        <meta
          name="description"
          content="써클인 플러스는 국내 최초의 홈PT 경험을 제공하는 운동 전용 OTT 서비스입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="써클인 플러스" />
        <meta
          property="og:title"
          content="기구까지 챙겨주는 운동 OTT 서비스, 써클인 플러스"
        />
        <meta
          property="og:description"
          content="비싸고 효과없는 온라인 PT는 그만! 기구까지 챙겨주고 스케줄까지 잡아주는 진짜 홈PT, 써클인 플러스"
        />
        <meta property="og:image" content="/static/share.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="http://www.circlinplus.co.kr" />
        <meta name="twitter:card" content="summary" data-react-helmet="true" />
        <meta name="twitter:creator" content="" data-react-helmet="true" />
        <meta
          name="twitter:title"
          content="기구까지 챙겨주는 운동 OTT 서비스, 써클인 플러스"
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content="비싸고 효과없는 온라인 PT는 그만! 기구까지 챙겨주고 스케줄까지 잡아주는 진짜 홈PT, 써클인 플러스"
          data-react-helmet="true"
        />
        <meta name="twitter:image" content="/static/share.png" />
        <meta name="HandheldFriendly" content="true" />
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon/android-icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/static/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <script src="https://js.pusher.com/3.2/pusher.min.js" />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
      </Head>
      <Global styles={reset} />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}

export default MyApp;
