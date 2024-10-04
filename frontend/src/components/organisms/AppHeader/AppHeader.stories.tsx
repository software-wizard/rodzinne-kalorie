import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import AppHeader, {AppHeaderProps} from './AppHeader';

export default {
    title: 'Components/atoms/AppHeader',
    component: AppHeader,
} as Meta;

const Template: StoryFn<AppHeaderProps> = (args) => <AppHeader {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'AppHeader',
};