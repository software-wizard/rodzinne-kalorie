import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import CalorificManageTable from "./CalorificRangeCalcRow";
import CalorificRangeCalcRow, {CalorificRangeCalcRowProps} from "./CalorificRangeCalcRow";

export default {
    title: 'Components/molecules/CalorificRangeCalcRow',
    component: CalorificManageTable,
} as Meta;

const Template: StoryFn<CalorificRangeCalcRowProps> = (args) => <CalorificRangeCalcRow {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    dailyCalorific: 1900,
    macroType: 'protein',
    initialMinValue: 30,
    initialMaxValue: 33,
};