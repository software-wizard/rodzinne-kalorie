import React from 'react';
import {StyledSingleColumnGridTemplate} from './SingleRowGridTemplate.styles';
import {Css, DefaultCss} from "../../../GlobalStyle";

export type SingleRowGridTemplateProps = {
    css?: Css
    children?: React.ReactNode;
};

const SingleRowGridTemplate: React.FC<SingleRowGridTemplateProps> = ({children, css = DefaultCss}) => {

    return (
        <StyledSingleColumnGridTemplate {...css}>
            {children}
        </StyledSingleColumnGridTemplate>
    );
};

export default SingleRowGridTemplate;
