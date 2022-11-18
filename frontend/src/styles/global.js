import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;   
    }
    :root{
        --azul-claro:#29abe2;
        --azul-escuro: #012d51;
        --cinza:#808080; 
    }
   
    a{
        text-decoration: none;
    }
    label{
        font-size: 12px;
    }   
`;