import {css} from '@emotion/react';

const reset = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    height: 100vh;
  }
  body {
    scroll-behavior: smooth;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  /* legend,
  caption {
    height: 0px;
    overflow: hidden;
    font-size: 0em;
    line-height: 0em;
    text-indent: -9999px;
    width: 0;
    margin: -1px 0 0 0;
    position: relative;
    top: -1px;
  } */
  colgroup {
    display: table-column-group;
  }

  select {
    width: 200px;
    height: 32px;
    padding-left: 7px;
    -webkit-appearance: menulist;
    -moz-appearance: menulist;
    appearance: menu;
    border: 1px solid #eee;
    border-radius: 0px;
    background-color: #fff;
  }
  select::-ms-expand {
    display: none;
  }
  input#password {
    padding: 0;
    border: 0;
    border-bottom: 2px #e1e1e1 solid;
  }
  input[type='button'] {
    border-radius: 0;
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    background-color: rgba(254, 78, 108, 0.2);
    background-image: none;
    color: #000;
  }
  html,
  body,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  img {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(18, 18, 18, 0) !important;
  }
  html {
    -webkit-text-size-adjust: none;
  }
  div {
    cursor: default;
  }
  li {
    list-style: none;
  }
  img,
  fieldset {
    border: none;
    vertical-align: middle;
  }
  input {
    font-size: 12px;
    color: #000;
    vertical-align: middle;
    opacity: 1;
  }
  select,
  option,
  textarea {
    font-size: 12px;
    color: #000;
    vertical-align: middle;
  }
  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: #000;
  }
  a:active {
    text-decoration: none;
  }
  table {
    border-spacing: 0;
    border: 0;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
  }
  button {
    padding: 0;
    margin: 0;
    border: 0;
    overflow: visible;
    cursor: pointer;
    background-color: transparent;
  }
  [role='button'] {
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
  strong {
    font-weight: bold;
  }
  * {
    font-family: 'Montserrat', 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif !important;
    font-display: block,
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap') format('truetype');
    unicode-range:U+0041-005A, U+0061-007A, U+0030-0039;
}
  body {
    /* font-family: "Noto Sans KR", sans-serif; */
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol"; */
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #000;
    font-weight: normal;
    line-height: 160%;
    font-size: 12px;
    background-color: #fff;
    letter-spacing: -0.4px !important;
  }
  ::-moz-scrollbar {
    display: none !important;
  }
  ::-webkit-scrollbar {
    display: none !important;
  }
  img {
    border: none;
    vertical-align: middle;
    max-width: 100%;
  }
  select {
    padding-left: 7px;
    padding-right: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #d8d8d8;
    border-radius: 0px;
    /* background: url(https://danoshop.net/mall/upload/resource/common/selection-arrow.svg)
    no-repeat right 5px center #fff; */
  }
  input {
    line-height: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    touch-action: pan-y;
  }
  input,
  textarea {
    caret-color: #ff5722 !important;
  }
  input::placeholder {
    color: #ced4da;
  }
  input[type='checkbox'] {
    padding: 0;
  }
  input[type='text'],
  input[type='password'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input:focus,
  input:active,
  input:hover {
    outline: none;
    background-color: transparent;
  }
  caption {
    visibility: visible;
    position: absolute;
    left: -1000px;
    top: -1000px;
    height: 0;
    width: 0;
    display: none;
  }
  #__next {
    /* width: 100%;
    height: 100%; */
    font-weight: bold;
    --sat: var(--sait);
    --sar: var(--sair);
    --sab: var(--saib);
    --sal: var(--sail);
    overflow: hidden;
    /* overflow-x: hidden;
    overflow-y: scroll; */
  }
`;

export default reset;
