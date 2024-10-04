import React from 'react';
import {StyledMacroIcons} from './MacroIcons.styles';

export type MacroIconsProps = {
    width?: string;
    height?: string;
    name?: string;
    children?: React.ReactNode;
};

const MacroIcons: React.FC<MacroIconsProps> = ({name}) => {

    return (
        <StyledMacroIcons>
            <p>Macro icons</p>
        </StyledMacroIcons>
    );
};

export default MacroIcons;
