import React from 'react';
import Label from "../../atoms/Label/Label";
import MealCard from "../MealCard/MealCard";
import {MealDto} from "../../../data/Meal";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import {Size} from "../../../GlobalStyle";

export type ScheduleDayProps = {
    date: Date
    meals: Array<MealDto>
};

const ScheduleDay: React.FC<ScheduleDayProps> = ({date, meals}) => {

    return (
        <GridTemplate justifyItems={'center'}>
            <Label size={Size.L} text={date.toLocaleDateString()}></Label>
            {meals.map((meal, index) => (
                <MealCard key={index} mealName={meal.name} macro={meal.macro}></MealCard>
            ))}
        </GridTemplate>
    );
};

export default ScheduleDay;
