import styled from 'styled-components';
import { PlaceholderProps } from './Placeholder';
import {COLOR_GREEN, COLOR_GREY} from "../../../GlobalStyle";

export const StyledPlaceholder = styled.div<PlaceholderProps>`
    width: ${p => p.width};
    height: ${p => p.height};
    padding: ${p => p.padding};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(45deg, ${COLOR_GREY.color300} 25%, transparent 25%, transparent 50%, ${COLOR_GREY.color300} 50%, ${COLOR_GREY.color300} 75%, transparent 75%, #fff);
    background-size: 15px 15px;
    border: ${COLOR_GREY.color1000} 2px solid;
    box-sizing: border-box;

    & > div > p,
    & > p {
        color: ${COLOR_GREEN.color1000};
        font-size: 0.8rem;
        font-weight: bold;
        margin: 0
    }
`;
export default StyledPlaceholder;