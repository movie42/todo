import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}    
    html,body{
        font-size:10px;
    }
    a{
        text-decoration: none;
        color:#1d1d1d;
    }
`;

export default GlobalStyle;
