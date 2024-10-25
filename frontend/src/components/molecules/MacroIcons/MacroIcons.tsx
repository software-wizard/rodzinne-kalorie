import React from 'react';
import {Size} from "../../../GlobalStyle";
import IconWithValue from ".././IconWithValue/IconWithValue";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import Label from "../../atoms/Label/Label";
import {Macro} from "../../../data/dtos/Meal";

export type MacroIconsProps = {
    headerColor: string,
    macro?: Macro
    minMacro?: Macro
    maxMacro?: Macro
};

const MacroIcons: React.FC<MacroIconsProps> = ({...props}) => {


    function prepareTextForRange(label: string, min: number, max: number) {
        return label + ':' + min.toString() + ' - ' + max.toString();
    }

    if (props.macro !== undefined) {
        return <GridTemplate direction={'column'}>
            <IconWithValue label={'K'} value={props.macro.calories.toString()} size={Size.S}/>
            <IconWithValue label={'B'} value={props.macro.protein.toString()} size={Size.S}/>
            <IconWithValue label={'W'} value={props.macro.carbohydrates.toString()} size={Size.S}/>
            <IconWithValue label={'T'} value={props.macro.fat.toString()} size={Size.S}/>
        </GridTemplate>
    } else {
        return <GridTemplate>
            <Label size={Size.L} backgroundColor={props.headerColor}
                   text={prepareTextForRange('K', props.minMacro!.calories, props.maxMacro!.calories)}></Label>
            <Label size={Size.L} backgroundColor={props.headerColor}
                   text={prepareTextForRange('B', props.minMacro!.protein, props.maxMacro!.protein)}></Label>
            <Label size={Size.L} backgroundColor={props.headerColor}
                   text={prepareTextForRange('W', props.minMacro!.carbohydrates, props.maxMacro!.carbohydrates)}></Label>
            <Label size={Size.L} backgroundColor={props.headerColor}
                   text={prepareTextForRange('T', props.minMacro!.fat, props.maxMacro!.fat)}></Label>
        </GridTemplate>
    }
};

export default MacroIcons;
