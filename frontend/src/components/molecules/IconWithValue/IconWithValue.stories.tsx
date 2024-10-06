import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import IconWithValue, {IconWithValueProps} from './IconWithValue';
import {Size} from "../../../GlobalStyle";

export default {
    title: 'Components/molecules/IconWithValue',
    component: IconWithValue,
} as Meta;

const Template: StoryFn<IconWithValueProps> = (args) => <IconWithValue {...args} />;

export const XS = Template.bind({});
XS.args = {
    label: 'XS',
    value: '123.45',
    size: Size.XS,
};

export const S = Template.bind({});
S.args = {
    label: 'S',
    value: '123.45',
    size: Size.S,
};

export const M = Template.bind({});
M.args = {
    label: 'M',
    value: '123.45',
    size: Size.M,
};

export const L = Template.bind({});
L.args = {
    label: 'L',
    value: '123.45',
    size: Size.L,
};

export const XL = Template.bind({});
XL.args = {
    label: 'XL',
    value: '123.45',
    size: Size.XL,
};