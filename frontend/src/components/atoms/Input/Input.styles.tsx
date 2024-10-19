import styled from "styled-components";
import {COLOR_GREEN, COLOR_GREY} from "../../../GlobalStyle";

interface MyProps {
}

const MyElement = styled.input<MyProps>`
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    background: ${COLOR_GREEN.color200};
    color: ${COLOR_GREEN.color1000};
    
    font-weight: 600;
    font-size: 1em;
    font-family: inherit;
    -webkit-appearance: none;
    border: 2px solid ${COLOR_GREEN.color700};
    border-left: transparent;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: border .3s ease;

    &::placeholder {
        color: ${COLOR_GREY.color400};
    }

    &:focus {
        outline: none;
        border-color: ${COLOR_GREEN.color1000};
    }

    &:focus::placeholder {
        color: transparent;
    }

// ---------------------NUMBER------------------
    &::-webkit-inner-spin-button{
        appearance: none;
    }
`
export default MyElement;