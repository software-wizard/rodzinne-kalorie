import styled from 'styled-components';
import {CssAttrs} from "../../../GlobalStyle";

export const StyledSingleColumnGridTemplate = styled.div<CssAttrs>`
    display: grid;
    grid-auto-rows: 1fr;
    height: 100%;
    
    justify-items: center;
    justify-content: center;
    
    row-gap: ${({rowGap}) => rowGap};
`;
export default StyledSingleColumnGridTemplate;