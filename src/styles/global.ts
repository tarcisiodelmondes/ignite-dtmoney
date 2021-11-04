import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB2;
    --shape: #FFFFFF
   }
   
   *,*::before, *::after  {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
      
        background-color: var(--background);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    body, button, textarea, input{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
