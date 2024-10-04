import styled from 'styled-components';
import {IconWithLabelProps} from './IconWithLabel';

export const StyledIconWithLabel = styled.div<IconWithLabelProps>`
    width: 200px;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-size: 15px 15px;
    border: RED 2px solid;
    box-sizing: border-box;
`;
export default StyledIconWithLabel;