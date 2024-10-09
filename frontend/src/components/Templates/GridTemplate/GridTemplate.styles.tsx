import styled from 'styled-components';
import {CssAttrs} from "../../../GlobalStyle";

export const StyledGridTemplate = styled.div<CssAttrs>`
    display: grid;
    grid-auto-flow: row;

    grid-template-rows: ${({rows}) => `repeat(${rows}, 1fr)`};
    grid-template-columns: ${({columns}) => `repeat(${columns}, 1fr)`};
    row-gap: ${({rowGap}) => rowGap};
    column-gap: ${({columnGap}) => columnGap};
`;
export default StyledGridTemplate;