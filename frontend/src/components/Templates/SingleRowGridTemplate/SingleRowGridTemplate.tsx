import React from 'react';
import {StyledGridTamplate} from './SingleRowGridTemplate.styles';

export type SingleRowGridTemplateProps = {
    children?: React.ReactNode;
};

const SingleRowGridTemplate: React.FC<SingleRowGridTemplateProps> = ({children}) => {

    return (
        <StyledGridTamplate>
            {children}
        </StyledGridTamplate>
    );
};

export default SingleRowGridTemplate;
