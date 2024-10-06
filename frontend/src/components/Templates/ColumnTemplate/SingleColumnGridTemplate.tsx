import React from 'react';
import {StyledColumnTemplate} from './SingleColumnGridTemplate.styles';
import {Css, DefaultCssGrid} from "../../../GlobalStyle";

export type ColumnTemplateProps = {
    css: Css
    children?: React.ReactNode;
};

const SingleColumnGridTemplate: React.FC<ColumnTemplateProps> = ({children, css = DefaultCssGrid}) => {

    css.alignContent = 'center'
    css.rowGap= '3px'

    return (
        <StyledColumnTemplate css={css}>
            {children}
        </StyledColumnTemplate>
    );
};

export default SingleColumnGridTemplate;
