import React from 'react';
import {StyledColumnTemplate} from './SingleColumnGridTemplate.styles';

export type ColumnTemplateProps = {
    children?: React.ReactNode;
};

const SingleColumnGridTemplate: React.FC<ColumnTemplateProps> = ({children}) => {

    return (
        <StyledColumnTemplate>
            {children}
        </StyledColumnTemplate>
    );
};

export default SingleColumnGridTemplate;
