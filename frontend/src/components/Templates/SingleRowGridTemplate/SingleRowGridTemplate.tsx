import React from 'react';
import {StyledGridTemplate} from './SingleRowGridTemplate.styles';
import {Css, DefaultCss} from "../../../GlobalStyle";

export type SingleRowGridTemplateProps = {
    css?: Css
    children?: React.ReactNode;
};

const SingleRowGridTemplate: React.FC<SingleRowGridTemplateProps> = ({children, css = DefaultCss}) => {

    return (
        <StyledGridTemplate {...css}>
            {children}
        </StyledGridTemplate>
    );
};

export default SingleRowGridTemplate;
