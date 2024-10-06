import styled from 'styled-components';
import {SingleRowGridTemplateProps} from './SingleRowGridTemplate';
import {Css} from "../../../GlobalStyle";

export const StyledGridTamplate = styled.div<Css>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
`;
export default StyledGridTamplate;