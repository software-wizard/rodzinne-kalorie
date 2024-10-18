import React from 'react';
import {StyledSingleColumnGridTemplate} from './SingleColumnGridTemplate.styles';
import {CssAttrs, getDefaultCss} from "../../../GlobalStyle";

export type ColumnTemplateProps = {
    css?: CssAttrs
    children?: React.ReactNode;
    headerSize?: string;
};

const SingleColumnGridTemplate: React.FC<ColumnTemplateProps> = ({children, css = getDefaultCss(), headerSize}) => {
    return (
        <StyledSingleColumnGridTemplate headerSize = {headerSize} frRowAmount={React.Children.count(children)} {...css}>
            {children}
        </StyledSingleColumnGridTemplate>
    );
};

export default SingleColumnGridTemplate;
