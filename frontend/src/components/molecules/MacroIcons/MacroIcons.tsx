import React from 'react';
import {Size} from "../../../GlobalStyle";
import IconWithValue from ".././IconWithValue/IconWithValue";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export type MacroIconsProps = {
    macro: {
        calories: number;
        carbohydrates: number;
        protein: number;
        fat: number;
    }
};

const MacroIcons: React.FC<MacroIconsProps> = ({macro}) => {

    return (
        <GridTemplate direction={'column'}>
            <IconWithValue label={'K'} value={macro.calories.toString()} size={Size.S}/>
            <IconWithValue label={'W'} value={macro.carbohydrates.toString()} size={Size.S}/>
            <IconWithValue label={'B'} value={macro.protein.toString()} size={Size.S}/>
            <IconWithValue label={'T'} value={macro.fat.toString()} size={Size.S}/>
        </GridTemplate>
    );
};

export default MacroIcons;
