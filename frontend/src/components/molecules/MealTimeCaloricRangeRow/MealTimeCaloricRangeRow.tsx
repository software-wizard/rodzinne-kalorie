import React, {Suspense, useEffect, useState} from 'react';
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import Label from "../../atoms/Label/Label";
import {COLOR_GREEN, Size} from "../../../GlobalStyle";
import MultiRangeInput from "../MultiRangeInput/MultiRangeInput";
import {MealTime} from "../../../data/Enums";
import {Macro} from "../../../data/dtos/Meal";
import MacroIcons from "../MacroIcons/MacroIcons";

export type MealTimeCaloricRangeRowProps = {
    mealTime: MealTime
    macroMinPercentages: Macro
    macroMaxPercentages: Macro
    minValue: number
    maxValue: number
};

const MealTimeCaloricRangeRow: React.FC<MealTimeCaloricRangeRowProps> = ({...props}) => {
    const headerColor = COLOR_GREEN.color100;

    const [rangeFromInput, setRangeFromInput] = useState({min: props.minValue, max: props.maxValue});
    useEffect(() => {
        setRangeFromInput({min: props.minValue, max: props.maxValue});
    }, [props.minValue, props.maxValue]);

    const handleRangeChange = (min: number, max: number) => {
        setRangeFromInput({min, max});
    };

    function calculate(macro: Macro, selectedRange: {
        min: number;
        max: number
    }): Macro {
        console.log(macro);
        return {
            calories: (selectedRange.min * macro.calories) / 100,
            protein: (selectedRange.min * macro.protein) / 100,
            carbohydrates: (selectedRange.min * macro.carbohydrates) / 100,
            fat: (selectedRange.min * macro.fat) / 100
        }
    }

    return (
        <GridTemplate gap={'1rem'} direction={'column'} gridTemplateColumns={"repeat(4,1fr)"}>
            Tutaj sko ńczyłem. Trzeba zrobić pojedynczy slider i uprościć trochę kod.
            <Label size={Size.L} backgroundColor={headerColor} text={props.mealTime.valueOf()}></Label>
            <MultiRangeInput onChange={handleRangeChange} unit={'%'} initialMinValue={props.minValue}
                             initialMaxValue={props.maxValue}
            />

            <GridTemplate>
                <MacroIcons headerColor={COLOR_GREEN.color100}
                            minMacro={calculate(props.macroMinPercentages, rangeFromInput)}
                            maxMacro={calculate(props.macroMaxPercentages, rangeFromInput)}/>
            </GridTemplate>
        </GridTemplate>
    )
        ;
};

export default MealTimeCaloricRangeRow;
