import React from 'react';
import {ActionIcon, ActionIconsContainer} from './ActionIcons.styles';
import {FaTrash, FaTree} from 'react-icons/fa';
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import {DefaultCss} from "../../../GlobalStyle";


const ActionIcons: React.FC = () => {
    let css = DefaultCss;
    css.rows = 2;
    css.columns = 3;
    css.columnGap = '10px';
    css.rowGap = '10px';

    return (
        <ActionIconsContainer className="action-icons">
            <GridTemplate css={css}>
                <ActionIcon>
                    <FaTree/>
                </ActionIcon>

                <ActionIcon>
                    <FaTrash/>
                </ActionIcon>

                <ActionIcon>
                    <FaTrash/>
                </ActionIcon>

                <ActionIcon>
                    <FaTree/>
                </ActionIcon>

                <ActionIcon>
                    <FaTrash/>
                </ActionIcon>

                <ActionIcon>
                    <FaTrash/>
                </ActionIcon>
            </GridTemplate>
        </ActionIconsContainer>
    );
};

export default ActionIcons;