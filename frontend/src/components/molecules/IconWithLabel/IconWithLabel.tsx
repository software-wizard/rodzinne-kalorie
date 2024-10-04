import React from 'react';
import {StyledIconWithLabel} from './IconWithLabel.styles';

export type IconWithLabelProps = {
    width?: string;
    height?: string;
    name?: string;
    children?: React.ReactNode;
};

const IconWithLabel: React.FC<IconWithLabelProps> = ({name}) => {

    return (
        <StyledIconWithLabel>
            <p>{name}</p>
        </StyledIconWithLabel>
    );
};

export default IconWithLabel;
