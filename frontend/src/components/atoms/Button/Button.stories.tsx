import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Button, {ButtonProps} from './Button';
import {IconType} from "react-icons";
import {FaTree} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa6";

export default {
    title: 'Components/atoms/Button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) =>
    <div style={{width: '300px', height: '50px'}}>
        <Button {...args} />
    </div>

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    onClick: () => {
        alert('Button clicked')
    },
    children: 'Button'
};

export const WITH_ICON = Template.bind({});
WITH_ICON.args = {
    onClick: () => {
        alert('Button clicked')
    },
    children: 'Button with icon',
    icon: FaYoutube
};