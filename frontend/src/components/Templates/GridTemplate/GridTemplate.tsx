import React from 'react';
import {StyledGridTemplate} from './GridTemplate.styles';

export type GridTemplateProps = {
    direction?: 'row' | 'column';
    width?: string;
    height?: string;
    gap?: string;
    gridTemplateRows?: string;
    gridTemplateColumns?: string;
    headerHeight?: string;
    justifyItems?: string;
    alignItems?: string;
    justifyContent?: string;
    alignContent?: string;

    children: React.ReactNode;
};

const GridTemplate: React.FC<GridTemplateProps> = ({...props}) => {
    return (
        <StyledGridTemplate{...props}>
            {props.children}
        </StyledGridTemplate>
    );
};

export default GridTemplate;