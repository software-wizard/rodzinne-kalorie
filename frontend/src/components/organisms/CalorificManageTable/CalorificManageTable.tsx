import React from 'react';
import Label from "../../atoms/Label/Label";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import {COLOR_GREEN, Size} from "../../../GlobalStyle";
import CalorificRangeCalcRow from "../../molecules/CalorificRangeCalcRow/CalorificRangeCalcRow";

export type CalorificManageTableProps = {
    dailyCalorific: number;
};

const CalorificManageTable: React.FC<CalorificManageTableProps> = (props) => {
    const headerColor = COLOR_GREEN.color200
    return (
        <GridTemplate gap={'1rem'}>
            <GridTemplate gap={'1rem'} gridTemplateColumns={"repeat(4,1fr)"}>
                <Label backgroundColor={'x'} size={Size.L} text={'Makro na dzień'}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'%'}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'g'}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'kcalc'}></Label>
            </GridTemplate>
            <CalorificRangeCalcRow dailyCalorific={props.dailyCalorific} macroType={'protein'} minValue={25}
                                   maxValue={35}></CalorificRangeCalcRow>
            <CalorificRangeCalcRow dailyCalorific={props.dailyCalorific} macroType={'carbs'} minValue={35}
                                   maxValue={45}></CalorificRangeCalcRow>
            <CalorificRangeCalcRow dailyCalorific={props.dailyCalorific} macroType={'fat'} minValue={20}
                                   maxValue={30}></CalorificRangeCalcRow>
            <GridTemplate gap={'1rem'} gridTemplateColumns={"repeat(4,1fr)"}>
                <Label backgroundColor={'x'}></Label>
                <Label backgroundColor={headerColor}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'g'}></Label>
                <Label size={Size.L} backgroundColor={headerColor} text={'kcalc'}></Label>
            </GridTemplate>
        </GridTemplate>
    );
};

export default CalorificManageTable;