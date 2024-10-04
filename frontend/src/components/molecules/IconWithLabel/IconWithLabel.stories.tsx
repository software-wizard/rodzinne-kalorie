import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import IconWithLabel, {IconWithLabelProps} from './IconWithLabel';

export default {
    title: 'Components/molecules/IconWithLabel',
    component: IconWithLabel,
} as Meta;

const Template: StoryFn<IconWithLabelProps> = (args) => <IconWithLabel {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'IconWithLabel',
};