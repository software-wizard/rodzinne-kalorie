import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import AppHeader from "../components/organisms/AppHeader/AppHeader";

export default {
    title: 'App/Header',
    component: AppHeader,
} as Meta;

const Template: StoryFn = (args) => <AppHeader {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
};