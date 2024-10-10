import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import ActiveMemberButtonBar, {ActiveMemberButtonBarProps} from './ActiveMemberButtonBar';

export default {
    title: 'Components/organisms/ActiveMemberButtonBar',
    component: ActiveMemberButtonBar,
} as Meta;

const Template: StoryFn<ActiveMemberButtonBarProps> = (args) =>
    <div style={{width: '500px', height: '3rem'}}>
        <ActiveMemberButtonBar {...args} />
    </div>

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    userNames: ["user1", "user2", "user3"],
    activeName: "user1"
};