import styled from "styled-components";

interface MyProps {
}

const MyElement = styled.div<MyProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
    border: 3px solid #b5bfd9;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 300ms ease;
    cursor: pointer;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        top: 0.25rem;
        left: 0.25rem;
        transition: 300ms ease;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
        background-size: 12px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    &:hover {
        border-color: #2260ff;
    }

    // /* hide checkbox without hover */

    & > label > input {
        //clip: rect(0 0 0 0);
        //-webkit-clip-path: inset(100%);
        //clip-path: inset(100%);
        //height: 1px;
        //overflow: hidden;
        //position: absolute;
        //white-space: nowrap;
        //width: 1px;
        position:absolute;
        top: 0rem;
        right: 0rem;
    }

    & > label > div > div > img {
        width: 4rem;
        height: 4rem;
    }

    & > label > div > div > div {
        color: #B0B0B0;
        transition: 300ms ease;
        text-align: center;
        font-size: small;
        margin-bottom: 0.5rem;
    }

    & > label > input:checked {
        border-color: #2260ff;
        background-color: red;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        color: #2260ff;
    }

    &:before + & > label > input:checked {
        transform: scale(1);
        opacity: 1;
        background-color: #2260ff;
        border-color: #2260ff;
    }
`
export default MyElement
