import React from 'react';
import {StyledActionIcon} from './ActionIcon.styles';
import {IconType} from "react-icons";

export type ActionIconProps = {
    icon: IconType
};

const ActionIcon: React.FC<ActionIconProps> = ({icon: Icon}) => {

    return (
        <StyledActionIcon>
            <Icon/>
        </StyledActionIcon>
    );
};

export default ActionIcon;
