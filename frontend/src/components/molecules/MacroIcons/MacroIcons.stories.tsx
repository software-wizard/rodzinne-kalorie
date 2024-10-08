import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import MacroIcons, {MacroIconsProps} from './MacroIcons';

export default {
    title: 'Components/molecules/MacroIcons',
    component: MacroIcons,
} as Meta;

const Template: StoryFn<MacroIconsProps> = (args) => (
    <div style={{width: '200px'}}>
        <MacroIcons {...args} />
    </div>
);

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    macro: {
        calories: 543,
        carbohydrates: 76.2,
        protein: 28.1,
        fat: 9.0
    },
};