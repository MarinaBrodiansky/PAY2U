import { createGlobalStyle } from "styled-components";

import SFProTextRegular from '../assets/fonts/SFProText-Regular.ttf';
import SFProTexSemiBold from '../assets/fonts/SFProText-Semibold.ttf';

const GlobalStyles = createGlobalStyle`
:root {
    --accent: #EA417F; 
    --hover: #f05b92;
    --press: #bf1d59;
    --black: #282b2e;
    --dark-grey: #99a3ac;
    --grey: #e1e2e3;
    --light-grey: #f4f4f4;
    --white: #ffffff;
    --success: #26c44d;
    --error: #d72a2a;
    
    @font-face {
        font-family: 'SFProText';
        src: url(${SFProTextRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: 'SFProText';
        src: url(${SFProTexSemiBold}) format('truetype');
        font-weight: 600;
      }

      * {
      font-family: 'SFProText';
      box-sizing: border-box;
    }

    body {
        background-color: var(--light-grey);
        /* padding: 0 16px 16px 16px; */
    }

    h1 {
        font-size: 32px;
        line-height: 36px;
        font-weight: 600;
        margin: 0;
    }

    h2 {
        font-size: 22px;
        line-height: 28px;
        font-weight: 600;
        margin: 0;
    }

    h3 {
        font-size: 18px;
        line-height: 26px;
        font-weight: 600;
        margin: 0;
    }
}
`;

export default GlobalStyles;