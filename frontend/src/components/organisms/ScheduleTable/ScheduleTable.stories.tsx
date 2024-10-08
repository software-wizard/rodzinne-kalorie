import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import ScheduleTable, {ScheduleTableProps} from './ScheduleTable';
import scheduleData from "../../../mocks/schedule.json";

export default {
    title: 'Components/organisms/ScheduleTable',
    component: ScheduleTable,
} as Meta;

const Template: StoryFn<ScheduleTableProps> = (args) => <ScheduleTable {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    schedule: scheduleData
};