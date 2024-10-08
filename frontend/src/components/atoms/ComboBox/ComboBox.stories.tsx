import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import ComboBox, {ComboBoxProps} from './ComboBox';

export default {
    title: 'Components/nowy/ComboBox',
    component: ComboBox,
} as Meta;

const Template: StoryFn<ComboBoxProps> = (args) => <ComboBox {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'ComboBox',
};