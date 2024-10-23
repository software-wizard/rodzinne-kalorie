import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MealCardWithDetails, {MealCardWithDetailsProps} from './MealCardWithDetails';

export default {
    title: 'Components/organisms/MealCardWithDetails',
    component: MealCardWithDetails,
} as Meta;

const Template: StoryFn<MealCardWithDetailsProps> = (args) => <MealCardWithDetails {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'MealCardWithDetails',
};