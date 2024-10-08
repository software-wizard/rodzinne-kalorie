import React from 'react';
import {StyledGridTemplate} from './GridTemplate.styles';
import {Css, getDefaultCss} from "../../../GlobalStyle";

export type GridTemplateProps = {
    css?: Css
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
