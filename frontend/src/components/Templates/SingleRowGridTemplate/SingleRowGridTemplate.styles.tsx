import styled from 'styled-components';
import {SingleRowGridTemplateProps} from './SingleRowGridTemplate';
import {Css} from "../../../GlobalStyle";

export const StyledGridTemplate = styled.div<Css>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    column-gap: ${({gap}) => gap};
`;
export default StyledGridTemplate;