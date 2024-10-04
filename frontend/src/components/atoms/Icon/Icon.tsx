import React from 'react';
import {StyledIcon} from './Icon.styles';

export type IconProps = {
    width?: string;
    height?: string;
    name?: string;
    children?: React.ReactNode;
};

const Icon: React.FC<IconProps> = ({name}) => {

    return (
        <StyledIcon>
            <p>{name}</p>
        </StyledIcon>
    );
};

export default Icon;
