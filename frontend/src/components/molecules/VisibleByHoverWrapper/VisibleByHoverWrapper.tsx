import React from 'react';
import {ActionIconsContainer} from './VisibleByHoverWrapper.styles';
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import {getDefaultCss} from "../../../GlobalStyle";

type VisibleByHoverWrapperProps = {
    children: React.ReactNode;
    rows: number;
    columns: number;
}

const VisibleByHoverWrapper: React.FC<VisibleByHoverWrapperProps> = ({children, rows, columns}) => {
    let css = getDefaultCss();
    css.columnGap = '10px';
    css.rowGap = '10px';

    return (
        <ActionIconsContainer className="action-icons">
            <GridTemplate rows={2}  columns={3} css={css}>
                {children}
            </GridTemplate>
        </ActionIconsContainer>
    );
};

export default VisibleByHoverWrapper;