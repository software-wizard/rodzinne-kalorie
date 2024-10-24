import React from 'react';
import Label from "../../atoms/Label/Label";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import {COLOR_GREEN, Size} from "../../../GlobalStyle";
import CalorificRangeCalcRow from "../CalorificRangeCalcRow/CalorificManageTable";

export type CalorificManageTableProps = {
    dailyCalorific: number;
};

const CalorificManageTable: React.FC<CalorificManageTableProps> = (props) => {
    const headerColor = COLOR_GREEN.color100
    return (
        <GridTemplate gap={'1rem'}>
            <GridTemplate gap={'1rem'} gridTemplateColumns={"repeat(4,1fr)"}>
                <Label backgroundColor={headerColor}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'%'}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'g'}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'kcalc'}></Label>
            </GridTemplate>
            <CalorificRangeCalcRow dailyCalorific={props.dailyCalorific} macroType={'protein'}></CalorificRangeCalcRow>
            <CalorificRangeCalcRow dailyCalorific={props.dailyCalorific} macroType={'carbs'}></CalorificRangeCalcRow>
            <CalorificRangeCalcRow dailyCalorific={props.dailyCalorific} macroType={'fat'}></CalorificRangeCalcRow>
        </GridTemplate>
    );
};

export default CalorificManageTable;