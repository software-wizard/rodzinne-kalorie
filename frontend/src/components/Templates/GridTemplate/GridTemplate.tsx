import React from 'react';
import {StyledGridTemplate} from './GridTemplate.styles';
import {CssAttrs, getDefaultCss} from "../../../GlobalStyle";

export type GridTemplateProps = {
    css?: CssAttrs
    children?: React.ReactNode;
};
const GridTemplate: React.FC<GridTemplateProps> = ({children, css = getDefaultCss()}) => {

    return (
        <StyledGridTemplate {...css}>
            {children}
        </StyledGridTemplate>
    );
};

export default GridTemplate;
