import styled from "styled-components";
import {COLOR_GREEN, COLOR_GREY} from "../../../GlobalStyle";

const MyElement = styled.div<MyProps>`
    position: relative;
    display: flex;
    width: 100%;

    & > span {
        white-space: nowrap;
        display: block;

        &:first-child {
            border-radius: 5px 0 0 5px;
        }
    }

    & > span {
        text-align: center;
        padding: 8px 12px;
        line-height: 2rem;
        font-weight: 600;
        color: ${COLOR_GREY.color1000};
        background: ${COLOR_GREEN.color700};
        border: 2px solid ${COLOR_GREEN.color700};
        transition: 300ms;
    }

    &:hover > span {
        color: ${COLOR_GREEN.color200};
        background: ${COLOR_GREEN.color1000};
        border-color: ${COLOR_GREEN.color1000};
    }
    &:hover > input {
        color: ${COLOR_GREEN.color800};
        border-color: ${COLOR_GREEN.color1000};
        border-color: ${COLOR_GREEN.color1000};
    }

    &:focus-within {
        & > span {
            color: ${COLOR_GREEN.color200};
            border-color: ${COLOR_GREEN.color1000};
            background: ${COLOR_GREEN.color1000};
        }
    }
`


interface MyProps {
}
export default MyElement;