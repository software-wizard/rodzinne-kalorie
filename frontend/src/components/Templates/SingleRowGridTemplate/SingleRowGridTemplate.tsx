import React from 'react';
import {SingleRowGridTemplateStyles} from './SingleRowGridTemplate.styles';
import {Css, getDefaultCss} from "../../../GlobalStyle";

export type SingleRowGridTemplateProps = {
    css?: Css
    children?: React.ReactNode;
};

const SingleRowGridTemplate: React.FC<SingleRowGridTemplateProps> = ({children, css = getDefaultCss()}) => {
    return (
        <SingleRowGridTemplateStyles {...css}>
            {children}
        </SingleRowGridTemplateStyles>
    );
};

export default SingleRowGridTemplate;
