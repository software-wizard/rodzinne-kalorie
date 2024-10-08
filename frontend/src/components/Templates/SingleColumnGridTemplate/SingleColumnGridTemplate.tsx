import React from 'react';
import {StyledSingleColumnGridTemplate} from './SingleColumnGridTemplate.styles';
import {Css, getDefaultCss} from "../../../GlobalStyle";

export type ColumnTemplateProps = {
    css?: Css
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
