import styled from 'styled-components';
import {GridTemplateProps} from "./GridTemplate";
import React from "react";

export const StyledGridTemplate = styled.div<GridTemplateProps>`
    display: grid;

    grid-auto-flow: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap};

    justify-items: ${({justifyItems}) => justifyItems || 'stretch'};
    align-items: ${({alignItems}) => alignItems || 'stretch'};
    justify-content: ${({justifyContent}) => justifyContent || 'stretch'};
    align-content: ${({alignContent}) => alignContent || 'stretch'};

    grid-template-rows: ${({
                               headerHeight,
                               children
                           }) => headerHeight ? `${headerHeight} repeat(${React.Children.count(children) - 1}, 1fr)` : `none`};

    grid-template-rows: ${({gridTemplateRows}) => gridTemplateRows};
    grid-template-columns: ${({gridTemplateRows}) => gridTemplateRows};
    height: ${({height}) => height || '100%'};
    width: ${({width}) => width || '100%'};
`;
export default StyledGridTemplate;