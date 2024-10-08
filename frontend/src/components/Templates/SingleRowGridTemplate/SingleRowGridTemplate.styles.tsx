import styled from 'styled-components';
import {Css} from "../../../GlobalStyle";

export const SingleRowGridTemplateStyles = styled.div<Css>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;

    column-gap: ${({columnGap}) => columnGap};
    height: ${({height}) => height};
`;
export default SingleRowGridTemplateStyles;