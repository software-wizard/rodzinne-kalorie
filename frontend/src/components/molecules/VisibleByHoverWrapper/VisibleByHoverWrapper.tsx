import React from 'react';
import {ActionIconsContainer} from './VisibleByHoverWrapper.styles';
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

type VisibleByHoverWrapperProps = {
    children: React.ReactNode;
    rows: number;
    columns: number;
}

const VisibleByHoverWrapper: React.FC<VisibleByHoverWrapperProps> = ({children, rows, columns}) => {

    return (
        <ActionIconsContainer className="action-icons">
            <GridTemplate direction={'column'} gridTemplateRows={'repeat(2, 1fr)'} gap={'0.5rem'}>
                {children}
            </GridTemplate>
        </ActionIconsContainer>
    );
};

export default VisibleByHoverWrapper;