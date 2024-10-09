import React from 'react';
import {StyledActionIcon} from './ActionIcon.styles';
import {IconType} from "react-icons";

export type ActionIconProps = {
    icon: IconType
    onClick: () => void
};

const ActionIcon: React.FC<ActionIconProps> = ({
                                                   icon: Icon,
                                                   onClick = () => {
                                                       alert('icon clicked');
                                                   }
                                               }) => {
    return (
        <StyledActionIcon onClick={onClick}>
            <Icon/>
        </StyledActionIcon>
    );
};

export default ActionIcon;
