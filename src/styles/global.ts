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
    --shape: #FFFFFF;
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
        border: none;
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

    .react-modal-overlay {
        background-color: rgba(0,0,0,.5);

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        background-color: var(--background);
        border-radius: 0,24rem;

        width: 100%;
        max-width: 576px;
        height: 100%;
        max-height: 588px;

        padding: 3rem ;
        position: relative;
    }

    .react-modal-close {
        position: absolute;
        top: 1.3rem;
        right: 1.3rem;

        background-color: transparent;
        cursor: pointer;
        transition: filter .3s;

        &:hover {
            filter: brightness(.8);
        }
    }
`;
