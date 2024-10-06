import React from 'react';
import {Size} from "../../../GlobalStyle";
import SingleRowGridTemplate from "../../Templates/SingleRowGridTemplate/SingleRowGridTemplate";
import IconWithValue from ".././IconWithValue/IconWithValue";

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
        <SingleRowGridTemplate>
            <IconWithValue label={'K'} value={macro.calories.toString()} size={Size.S}/>
            <IconWithValue label={'W'} value={macro.carbohydrates.toString()} size={Size.S}/>
            <IconWithValue label={'B'} value={macro.protein.toString()} size={Size.S}/>
            <IconWithValue label={'T'} value={macro.fat.toString()} size={Size.S}/>
        </SingleRowGridTemplate>
    );
};

export default MacroIcons;
