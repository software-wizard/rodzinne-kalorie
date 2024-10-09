import React from 'react';
import {StyledSingleColumnGridTemplate} from './SingleColumnGridTemplate.styles';
import {CssAttrs, getDefaultCss} from "../../../GlobalStyle";

export type ColumnTemplateProps = {
    css?: CssAttrs
    children?: React.ReactNode;
};

const SingleColumnGridTemplate: React.FC<ColumnTemplateProps> = ({children, css = getDefaultCss()}) => {
    return (
        <StyledSingleColumnGridTemplate {...css}>
            {children}
        </StyledSingleColumnGridTemplate>
    );
};

export default SingleColumnGridTemplate;
