import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import CalorificManageTable from "./CalorificRangeCalcRow";
import CalorificRangeCalcRow, {CalorificRangeCalcRowProps} from "./CalorificRangeCalcRow";

export default {
    title: 'Components/nowy/CalorificRangeCalcRow',
    component: CalorificManageTable,
} as Meta;

const Template: StoryFn<CalorificRangeCalcRowProps> = (args) => <CalorificRangeCalcRow {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    dailyCalorific: 2000,
    macroType: 'protein'
};