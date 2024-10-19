// src/components/molecules/Checkbox/Checkbox.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
    title: 'Components/Atoms/Checkbox',
    component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Checkbox Label',
};