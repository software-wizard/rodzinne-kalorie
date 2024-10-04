import styled from 'styled-components';
import {IconProps} from './Icon';

export const StyledIcon = styled.div<IconProps>`
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
export default StyledIcon;