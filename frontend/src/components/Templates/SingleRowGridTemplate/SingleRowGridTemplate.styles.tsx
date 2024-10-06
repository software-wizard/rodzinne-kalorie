import styled from 'styled-components';
import {Css} from "../../../GlobalStyle";

export const StyledSingleColumnGridTemplate = styled.div<Css>`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    column-gap: ${({columnGap}) => columnGap};
`;
export default StyledSingleColumnGridTemplate;