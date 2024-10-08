import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import ActionIcon from './ActionIcon';
import {FaTree} from "react-icons/fa";

export default {
    title: 'Components/atoms/ActionIcon',
    component: ActionIcon,
} as Meta;

const Template: StoryFn<typeof ActionIcon> = (args) => <ActionIcon {...args} />;


export const DEFAULT = Template.bind({});
DEFAULT.args = {
    icon: FaTree
};