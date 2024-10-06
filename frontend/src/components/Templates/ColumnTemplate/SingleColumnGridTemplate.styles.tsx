import styled from 'styled-components';
import {Css} from "../../../GlobalStyle";

export const StyledColumnTemplate = styled.div<Css>`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${({gap}) => gap};
    align-content: ${({alignContent}) => alignContent};
`;
export default StyledColumnTemplate;