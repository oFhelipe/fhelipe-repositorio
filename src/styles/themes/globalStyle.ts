import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Archivo', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    cursor: none;
  }

  * {
    cursor: none;
  }

  section {
    scroll-margin-top: 4rem;
  }

  body, #root {
    background-color: ${(props) => props.theme.colors.background};
    overflow-x: hidden;
    position: relative;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .gradient {
    background: ${(props) => props.theme.colors.gradient};
    background-size: 150% 150%;
    animation: gradientAnimation 5s ease infinite;
  }

  .gradient-text {
    background: ${(props) => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    clip: text;
    background-size: 150% 150%;
    animation: gradientAnimation 5s ease infinite;
  }


  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.menuBackground};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.cardBorder};
    border-radius: 8px;
    border: 4px solid ${(props) => props.theme.colors.menuBackground};
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @keyframes loadingAnimation {
    0% {
      height: 0%;
    }
    50% {
      background-position: 50%;
    }
    100% {
      background-position: 100%;
    }
  }
`

export default GlobalStyle
