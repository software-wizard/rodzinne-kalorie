import React from 'react';
import Label from "../../atoms/Label/Label";
import {Size} from "../../../GlobalStyle";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export type IconWithValueProps = {
    label: string;
    value: string;
    size?: Size
    direction?: 'row' | 'column';
};
const IconWithValue: React.FC<IconWithValueProps> = (props) => {
    return (<GridTemplate direction='row'>
        <Label text={props.label} size={props.size}/>
        <Label text={props.value} size={props.size}/>
    </GridTemplate>)
};

export default IconWithValue;