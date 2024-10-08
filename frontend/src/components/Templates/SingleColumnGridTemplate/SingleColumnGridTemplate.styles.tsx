import styled from 'styled-components';
import {Css} from "../../../GlobalStyle";

export const StyledSingleColumnGridTemplate = styled.div<Css>`
    display: grid;
    grid-template-columns: 1fr;
    
    justify-items: center;
    justify-content: center;
    align-items: self-end;
    
    row-gap: ${({rowGap}) => rowGap};
`;
export default StyledSingleColumnGridTemplate;