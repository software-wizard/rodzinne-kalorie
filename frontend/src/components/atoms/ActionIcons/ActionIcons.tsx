import React from 'react';
import { ActionIconsContainer, ActionIcon } from './ActionIcons.styles';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ActionIcons: React.FC = () => {
    return (
        <ActionIconsContainer className="action-icons">
            <ActionIcon>
                <FaEdit />
            </ActionIcon>
            <ActionIcon>
                <FaTrash />
            </ActionIcon>
        </ActionIconsContainer>
    );
};

export default ActionIcons;