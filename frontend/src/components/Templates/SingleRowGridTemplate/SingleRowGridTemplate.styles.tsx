import styled from 'styled-components';
import {SingleRowGridTemplateProps} from './SingleRowGridTemplate';

export const StyledGridTamplate = styled.div<SingleRowGridTemplateProps>`
    border: BLACK 2px solid;
    box-sizing: border-box;

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 10px;
`;
export default StyledGridTamplate;