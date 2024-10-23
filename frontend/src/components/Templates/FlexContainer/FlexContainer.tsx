import React from 'react';
import {StyledFlexContainer} from './FlexContainer.styles';

export type FlexContainerProps = {
    direction?: 'row' | 'column';
    children: React.ReactNode;
};

const FlexContainer: React.FC<FlexContainerProps> = ({...props}) => {

    return (
        <StyledFlexContainer {...props}>
            {props.children}
        </StyledFlexContainer>
    );
};

export default FlexContainer;
