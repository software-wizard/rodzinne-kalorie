import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Icon, {IconProps} from './Icon';

export default {
    title: 'Components/atoms/Icon',
    component: Icon,
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'Icon',
};