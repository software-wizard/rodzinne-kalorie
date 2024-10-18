import styled from 'styled-components';
import {CssAttrs} from "../../../GlobalStyle";

export const StyledSingleColumnGridTemplate = styled.div<CssAttrs & { frRowAmount: number } & {
    headerSize: string | undefined
}>`
    display: grid;
    grid-template-rows: ${({
                               headerSize,
                               frRowAmount
                           }) => headerSize == undefined ? '1fr' : `${headerSize} repeat(${frRowAmount - 1}, 1fr)`};
    height: 100%;
    width: 100%;

    justify-items: center;
    justify-content: stretch;

    row-gap: ${({rowGap}) => rowGap};
`;
export default StyledSingleColumnGridTemplate;