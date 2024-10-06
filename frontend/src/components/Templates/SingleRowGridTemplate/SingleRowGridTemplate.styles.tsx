import styled from 'styled-components';
import {SingleRowGridTemplateProps} from './SingleRowGridTemplate';

export const StyledGridTamplate = styled.div<SingleRowGridTemplateProps>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
`;
export default StyledGridTamplate;