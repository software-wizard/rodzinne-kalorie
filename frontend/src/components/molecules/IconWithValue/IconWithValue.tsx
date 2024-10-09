import React from 'react';
import {CssAttrs, getDefaultCss, Size} from "../../../GlobalStyle";
import Label from "../../atoms/Label/Label";
import SingleColumnGridTemplate from "../../Templates/SingleColumnGridTemplate/SingleColumnGridTemplate";

export type IconWithValueProps = {
    css?: CssAttrs
    label: string;
    value: string;
    size?: Size
};

const IconWithValue: React.FC<IconWithValueProps> = ({css = getDefaultCss(), label, value, size = Size.M,}) => {
    css.alignContent = 'center'
    css.rowGap = '3px'
    return (
        <SingleColumnGridTemplate css={css}>
            <Label text={label} size={size}/>
            <Label text={value} size={size}/>
        </SingleColumnGridTemplate>
    );
};

export default IconWithValue;
