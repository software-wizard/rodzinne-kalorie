import styled from 'styled-components';
import {CssAttrs} from "../../../GlobalStyle";

export const SingleRowGridTemplateStyles = styled.div<CssAttrs>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;

    column-gap: ${({columnGap}) => columnGap};
    height: ${({height}) => height};
`;
export default SingleRowGridTemplateStyles;