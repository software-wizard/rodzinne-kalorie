import React, {useEffect, useState} from 'react';
import Label from "../../atoms/Label/Label";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import {COLOR_GREEN, Size} from "../../../GlobalStyle";
import MultiRangeInput from "../../molecules/MultiRangeInput/MultiRangeInput";

export type CalorificRangeCalcRowProps = {
    dailyCalorific: number;
    macroType: 'protein' | 'carbs' | 'fat';
};

const CalorificRangeCalcRow: React.FC<CalorificRangeCalcRowProps> = (props) => {
    const headerColor = COLOR_GREEN.color100
    const initialMinValue = 40;
    const initialMaxValue = 60;
    const macroFactor = props.macroType === 'fat' ? 9 : 4;


    const [rangeFromInput, setRangeFromInput] = useState({min: initialMinValue, max: initialMaxValue});
    useEffect(() => {

        setRangeFromInput({min: initialMinValue, max: initialMaxValue});
    }, []);

    const handleRangeChange = (min: number, max: number) => {
        setRangeFromInput({min, max});
    };

    function calculateGrams() {
        const min = props.dailyCalorific * rangeFromInput.min / 100 / macroFactor;
        const max = props.dailyCalorific * rangeFromInput.max / 100 / macroFactor;
        return min.toFixed(1).toString() + ' - ' + max.toFixed(1).toString();
    }

    function calculateKcalc() {
        const min = props.dailyCalorific * rangeFromInput.min / 100;
        const max = props.dailyCalorific * rangeFromInput.max / 100;
        return min.toFixed(1).toString() + ' - ' + max.toFixed(1).toString();
    }

    function getText() {
        switch (props.macroType) {
            case "protein":
                return "Białko"
            case "carbs":
                return "Węgle"
            case "fat":
                return "Tłuszczyk"
        }
    }

    return (
        <GridTemplate gap={'1rem'} direction={'column'} gridTemplateColumns={"repeat(4,1fr)"}>
            <Label size={Size.L} backgroundColor={headerColor} text={getText()}></Label>
            <MultiRangeInput initialMinValue={initialMinValue} initialMaxValue={initialMaxValue}
                             onChange={handleRangeChange}/>
            <Label size={Size.L} backgroundColor={headerColor} text={calculateGrams()}></Label>
            <Label size={Size.L} backgroundColor={headerColor} text={calculateKcalc()}></Label>
        </GridTemplate>
    );
};

export default CalorificRangeCalcRow;