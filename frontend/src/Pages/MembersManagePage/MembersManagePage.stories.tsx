import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MembersManagePage, {MembersManagePageProps} from './MembersManagePage';

export default {
    title: 'components/pages/MembersManagePage',
    component: MembersManagePage,
} as Meta;

const Template: StoryFn<MembersManagePageProps> = (args) => <MembersManagePage {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'MembersManagePage',
};