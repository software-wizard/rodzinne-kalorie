import styled from 'styled-components';
import {ColumnTemplateProps} from './SingleColumnGridTemplate';

export const StyledColumnTemplate = styled.div<ColumnTemplateProps>`
    border: BLACK 2px solid;
    box-sizing: border-box;
    
    display: grid;
    grid-template-columns: 1fr; 
    gap: 10px;
    padding-left: 5px;
    padding-right: 5px;
`;
export default StyledColumnTemplate;