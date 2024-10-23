import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import SchedulePage, {SchedulePageProps} from './SchedulePage';

export default {
    title: 'components/pages/SchedulePage',
    component: SchedulePage,
} as Meta;

const Template: StoryFn<SchedulePageProps> = (args) => <SchedulePage {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'SchedulePage',
};