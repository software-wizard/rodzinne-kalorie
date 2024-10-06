import React from 'react';
import {Css, Size} from "../../../GlobalStyle";
import Label from "../../atoms/Label/Label";
import SingleColumnGridTemplate from "../../Templates/ColumnTemplate/SingleColumnGridTemplate";

export type IconWithValueProps = {
    css?: Css
    label: string;
    value: string;
    size?: Size
};

const IconWithValue: React.FC<IconWithValueProps> = ({css, label, value, size = Size.M}) => {
    return (
        <SingleColumnGridTemplate css={css}>
            <Label text={label} size={size}/>
            <Label text={value} size={size}/>
        </SingleColumnGridTemplate>
    );
};

export default IconWithValue;
