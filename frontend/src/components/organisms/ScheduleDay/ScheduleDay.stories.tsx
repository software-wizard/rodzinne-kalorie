import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import ScheduleDay, {ScheduleDayProps} from './ScheduleDay';
import scheduleData from '../../../mocks/schedule.json';

export default {
    title: 'Components/organisms/ScheduleDay',
    component: ScheduleDay,
} as Meta;

const Template: StoryFn<ScheduleDayProps> = (args) =>

    <div style={{width: '200px', height: '80vh', display: 'grid'}}>
        <ScheduleDay {...args}/>
    </div>

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    date: new Date(scheduleData.days[0].date),
    meals: scheduleData.days[0].meals
};