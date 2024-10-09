import React from 'react';
import {StyledGridTemplate} from './GridTemplate.styles';
import {CssAttrs, getDefaultCss} from "../../../GlobalStyle";

export type GridTemplateProps = {
    rows: number;
    columns: number;
    css?: CssAttrs
    children?: React.ReactNode;
};
const GridTemplate: React.FC<GridTemplateProps> = ({children, rows, columns}) => {
    let css = getDefaultCss();
    css.rows = rows;
    css.columns = columns;
    return (
        <StyledGridTemplate {...css}>
            {children}
        </StyledGridTemplate>
    );
};

export default GridTemplate;
