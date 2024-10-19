import React from 'react';
import Label from "../../atoms/Label/Label";
import {Size} from "../../../GlobalStyle";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export type IconWithValueProps = {
    label: string;
    value: string;
    size?: Size
};

const IconWithValue: React.FC<IconWithValueProps> = ({label, value, size = Size.M,}) => {
    // css.alignContent = 'center'
    return (
        <GridTemplate rows={2}>
            <Label text={label} size={size}/>
            <Label text={value} size={size}/>
        </GridTemplate>
    );
};

export default IconWithValue;
