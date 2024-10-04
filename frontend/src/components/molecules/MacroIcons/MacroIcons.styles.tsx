import styled from 'styled-components';
import {MacroIconsProps} from './MacroIcons';

export const StyledMacroIcons = styled.div<MacroIconsProps>`
    height: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-size: 15px 15px;
    border: RED 2px solid;
    box-sizing: border-box;
`;
export default StyledMacroIcons;