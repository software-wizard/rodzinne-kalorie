import React from 'react';
import {StyledGridTemplate} from './GridTemplate.styles';
import {Css, DefaultCss} from "../../../GlobalStyle";

export type GridTemplateProps = {
    css?: Css
    children?: React.ReactNode;
};
const GridTemplate: React.FC<GridTemplateProps> = ({children, css = DefaultCss}) => {

    return (
        <StyledGridTemplate {...css}>
            {children}
        </StyledGridTemplate>
    );
};

export default GridTemplate;
