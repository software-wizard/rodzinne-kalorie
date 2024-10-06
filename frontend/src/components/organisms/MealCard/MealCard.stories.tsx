import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import MealCard, {MealCardProps} from './MealCard';

export default {
    title: 'Components/organisms/MealCard',
    component: MealCard,
} as Meta;

const Template: StoryFn<MealCardProps> = (args) =>
    <div style={{width: '14vw', height: '15vh', border: 'BROWN 0px solid'}}>
        <MealCard {...args} />
    </div>;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    mealName: 'Owsianka z owocami',
    macro: {
        calories: 543,
        carbohydrates: 76.2,
        protein: 28.1,
        fat: 9.0
    },
};