import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import CalorificManageTable, {CalorificManageTableProps} from "./CalorificManageTable";

export default {
    title: 'Components/nowy/CalorificManageTable',
    component: CalorificManageTable,
} as Meta;

const Template: StoryFn<CalorificManageTableProps> = (args) => <CalorificManageTable {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    dailyCalorific: 2000
};