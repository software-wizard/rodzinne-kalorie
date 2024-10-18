import React from 'react';
import SingleColumnGridTemplate from "../../Templates/SingleColumnGridTemplate/SingleColumnGridTemplate";
import Label from "../../atoms/Label/Label";
import MealCard from "../MealCard/MealCard";
import {MealDto} from "../../../data/Meal";
import {getDefaultCss} from "../../../GlobalStyle";

export type ScheduleDayProps = {
    date: Date
    meals: Array<MealDto>
};

const ScheduleDay: React.FC<ScheduleDayProps> = ({date, meals}) => {

    let css = getDefaultCss();
    css.rowGap = '10px';

    return (
        <SingleColumnGridTemplate css = {css}>
            <Label text={date.toLocaleDateString()}></Label>
            {meals.map((meal, index) => (
                <MealCard key={index} mealName={meal.name} macro={meal.macro}></MealCard>
            ))}
        </SingleColumnGridTemplate>
    );
};

export default ScheduleDay;
