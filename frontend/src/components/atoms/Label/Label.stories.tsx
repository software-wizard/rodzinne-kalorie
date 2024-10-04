import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Label, {LabelProps} from './Label';

export default {
    title: 'Components/atoms/Label',
    component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'Label',
};