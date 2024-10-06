import React from 'react';
import {StyledColumnTemplate} from './SingleColumnGridTemplate.styles';
import {Css, DefaultCss} from "../../../GlobalStyle";

export type ColumnTemplateProps = {
    css?: Css
    children?: React.ReactNode;
};

const SingleColumnGridTemplate: React.FC<ColumnTemplateProps> = ({children, css = DefaultCss}) => {

    css.alignContent = 'center'
    css.gap= '3px'

    return (
        <StyledColumnTemplate {...css}>
            {children}
        </StyledColumnTemplate>
    );
};

export default SingleColumnGridTemplate;
