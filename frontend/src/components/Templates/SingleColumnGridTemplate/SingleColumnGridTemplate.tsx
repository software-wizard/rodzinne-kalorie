import React from 'react';
import {StyledSingleColumnGridTemplate} from './SingleColumnGridTemplate.styles';
import {Css, DefaultCss} from "../../../GlobalStyle";

export type ColumnTemplateProps = {
    css?: Css
    children?: React.ReactNode;
};

const SingleColumnGridTemplate: React.FC<ColumnTemplateProps> = ({children, css = DefaultCss}) => {
    return (
        <StyledSingleColumnGridTemplate {...css}>
            {children}
        </StyledSingleColumnGridTemplate>
    );
};

export default SingleColumnGridTemplate;
