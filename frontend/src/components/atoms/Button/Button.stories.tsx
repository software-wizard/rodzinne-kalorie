import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Button, {ButtonProps} from './Button';

export default {
    title: 'Components/atoms/Button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    onClick: () => {alert('Button clicked')},
    children: 'Button'
};

const TemplateWithDivWrapper: StoryFn<ButtonProps> = (args) =>
    <div style={{ width: '300px', height: '150px', border: '1px solid black' }}>
        <Button {...args} />
    </div>
export const WITH_DIV_WRAPPER = TemplateWithDivWrapper.bind({});
WITH_DIV_WRAPPER.args = {
    onClick: () => {alert('Button clicked')},
    children: 'Button'
};