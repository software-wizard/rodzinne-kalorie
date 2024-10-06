import React from 'react';
import {ActionIconsContainer, ActionIcon} from './ActionIcons.styles';
import {FaEdit, FaTrash} from 'react-icons/fa';
import SingleRowGridTemplate from "../../Templates/SingleRowGridTemplate/SingleRowGridTemplate";
import SingleColumnGridTemplate from "../../Templates/ColumnTemplate/SingleColumnGridTemplate";


const ActionIcons: React.FC = () => {
    return (
        <ActionIconsContainer className="action-icons">
            <SingleColumnGridTemplate css={{gap: '2rem'}}>
                <SingleRowGridTemplate css={{gap: '1rem'}}>
                    <ActionIcon>
                        <FaEdit/>
                    </ActionIcon>
                    <ActionIcon>
                        <FaTrash/>
                    </ActionIcon>
                    <ActionIcon>
                        <FaTrash/>
                    </ActionIcon>
                </SingleRowGridTemplate>


                <SingleRowGridTemplate css={{gap: '2rem'}}>
                    <ActionIcon>
                        <FaEdit/>
                    </ActionIcon>
                    <ActionIcon>
                        <FaTrash/>
                    </ActionIcon>

                    <ActionIcon>
                        <FaTrash/>
                    </ActionIcon>
                </SingleRowGridTemplate>
            </SingleColumnGridTemplate>
        </ActionIconsContainer>
    );
};

export default ActionIcons;