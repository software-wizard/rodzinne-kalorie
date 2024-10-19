import styled from 'styled-components';
import {MealCardWithDetailsProps} from './MealCardWithDetails';

export const StyledMealCardWithDetails = styled.div<MealCardWithDetailsProps>`
    border: GREEN 2px solid;
    box-sizing: border-box;
    
    width: 200px;
    height: 100px;
`;
export default StyledMealCardWithDetails;