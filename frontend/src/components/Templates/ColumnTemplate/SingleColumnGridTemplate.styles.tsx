import styled from 'styled-components';
import {ColumnTemplateProps} from './SingleColumnGridTemplate';

export const StyledColumnTemplate = styled.div<ColumnTemplateProps>`
    display: grid;
    grid-template-columns: 1fr; 
`;
export default StyledColumnTemplate;