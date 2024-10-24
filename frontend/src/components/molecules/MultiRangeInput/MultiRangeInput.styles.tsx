import styled from 'styled-components';
import {COLOR_GREEN} from "../../../GlobalStyle";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Slider = styled.div`
    width: 90%;
    height: 1rem;
    position: relative;
    background-color: ${COLOR_GREEN.color900};
    border-radius: 20px;
`;

export const RangeTrack = styled.span`
    height: 100%;
    position: absolute;
    border-radius: 20px;
    background-color: ${COLOR_GREEN.color400};
`;

const ValueBase = styled.div`
    position: absolute;
    padding: 6px 15px;
    background-color: ${COLOR_GREEN.color900};
    border-radius: 1rem;
    color: ${COLOR_GREEN.color100};
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const MinValue = styled(ValueBase)<{ left: number }>`
    top: 3rem;
    transform: translate(0, -100%);
    left: ${({left}) => left - 15}%;
    transition: left 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const MaxValue = styled(ValueBase)<{ right: number }>`
    top: -0.7rem;
    transform: translate(0, 100%);
    right: ${({right}) => right - 15}%;
    transition: right 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const RangeInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    background: transparent;
    pointer-events: none;

    &::-webkit-slider-thumb {
        appearance: none;
        pointer-events: all;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: ${COLOR_GREEN.color700};
        cursor: pointer;
    }
`;
