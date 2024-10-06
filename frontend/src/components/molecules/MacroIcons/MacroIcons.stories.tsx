import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MacroIcons, {MacroIconsProps} from './MacroIcons';

export default {
    title: 'Components/molecules/MacroIcons',
    component: MacroIcons,
} as Meta;

const Template: StoryFn<MacroIconsProps> = (args) => <MacroIcons {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    macro: {
        calories: 543,
        carbohydrates: 76.2,
        protein: 28.1,
        fat: 9.0
    },
};