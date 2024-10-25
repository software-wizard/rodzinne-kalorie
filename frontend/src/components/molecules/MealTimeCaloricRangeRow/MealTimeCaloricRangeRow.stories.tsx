import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MealTimeCaloricRangeRow, {MealTimeCaloricRangeRowProps} from './MealTimeCaloricRangeRow';
import {MealTime} from "../../../data/Enums";

export default {
    title: 'Components/nowy/MealTimeCaloricRangeRow',
    component: MealTimeCaloricRangeRow,
} as Meta;

const Template: StoryFn<MealTimeCaloricRangeRowProps> = (args) => <MealTimeCaloricRangeRow {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    mealTime: MealTime.LUNCH,
    minValue:30,
    maxValue:40,
    macroMinPercentages:{
        calories: 1600,
        carbohydrates: 25,
        protein: 35,
        fat: 20,
    },
    macroMaxPercentages:{
        calories: 2200,
        carbohydrates: 35,
        protein: 45,
        fat: 30,
    }
};