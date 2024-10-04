import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MealCardActions from './ActionIcons';

export default {
    title: 'Components/atoms/ActionIcons',
    component: MealCardActions,
} as Meta;

const Template: StoryFn = (args) => <MealCardActions {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'MealCardActions',
};