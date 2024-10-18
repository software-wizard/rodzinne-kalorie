import styled from 'styled-components';
import {CssAttrs} from "../../../GlobalStyle";

export const SingleRowGridTemplateStyles = styled.div<CssAttrs>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    width: 100%;
    height: 100%;

    column-gap: ${({columnGap}) => columnGap};
    height: ${({height}) => height};
`;
export default SingleRowGridTemplateStyles;