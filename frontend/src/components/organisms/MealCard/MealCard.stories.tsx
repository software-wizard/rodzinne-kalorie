import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MealCard, {MealCardProps} from './MealCard';

export default {
    title: 'Components/organisms/MealCard',
    component: MealCard,
} as Meta;

const Template: StoryFn<MealCardProps> = (args) => <MealCard {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'MealCard',
};