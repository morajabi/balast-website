/* @flow */
import { injectGlobal } from 'styled-components';
import { colors, sizes } from './utils';

injectGlobal`
  /* iranyekan - normal */
  @font-face {
    font-family: 'iranyekan';
    font-style: normal;
    src: url('/static/fonts/iranyekan/eot/iranyekanwebregular.eot')
    src: url('/static/fonts/iranyekan/eot/iranyekanwebregular.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
      url('/static/fonts/iranyekan/woff2/iranyekanwebregular.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
      url('/static/fonts/iranyekan/woff/iranyekanwebregular.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url('/static/fonts/iranyekan/ttf/iranyekanwebregular.ttf') format('truetype');
    font-weight: normal;
  }
  /* iranyekan - light */
  @font-face {
    font-family: 'iranyekan';
    font-style: normal;
    src: url('/static/fonts/iranyekan/eot/iranyekanweblight.eot');
    src: url('/static/fonts/iranyekan/eot/iranyekanweblight.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
      url('/static/fonts/iranyekan/woff2/iranyekanweblight.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
      url('/static/fonts/iranyekan/woff/iranyekanweblight.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url('/static/fonts/iranyekan/ttf/iranyekanweblight.ttf') format('truetype');
    font-weight: 300;
  }
  /* iranyekan - bold */
  @font-face {
    font-family: 'iranyekan';
    font-style: normal;
    src: url('/static/fonts/iranyekan/eot/iranyekanwebbold.eot');
    src: url('/static/fonts/iranyekan/eot/iranyekanwebbold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
      url('/static/fonts/iranyekan/woff2/iranyekanwebbold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
      url('/static/fonts/iranyekan/woff/iranyekanwebbold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url('/static/fonts/iranyekan/ttf/iranyekanwebbold.ttf') format('truetype');
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
  }

  body,
  html {
    padding: 0;
    margin: 0;
    direction: rtl;
  }

  html {
    height: 100%;
    font-size: ${sizes.typographyBase};
    @media screen and (max-width: 700px) {
      font-size: 10px !important;
    }
  }

  body {
    font-family: 'iranyekan', sans-serif, serif, tahoma;
    min-height: 100%;
    color: #333;
  }

  a {
    text-decoration: none;
    color: ${colors.blue};
  }

  [role=button], a, area, button, input, label, select, summary, textarea {
    touch-action: manipulation;
  }

  #__next-error {
    direction: ltr;
  }
`;
