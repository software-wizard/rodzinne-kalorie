import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Label, {LabelProps} from './Label';
import {Size} from "../../../GlobalStyle";

export default {
    title: 'Components/atoms/IconWithValue',
    component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    text: 'Label',
};

export const XS = Template.bind({});
XS.args = {
    text: 'IconWithValue XS',
    size: Size.XS,
};

export const S = Template.bind({});
S.args = {
    text: 'IconWithValue S',
    size: Size.S,
};

export const M = Template.bind({});
M.args = {
    text: 'IconWithValue M',
    size: Size.M,
};

export const L = Template.bind({});
L.args = {
    text: 'IconWithValue L',
    size: Size.L,
};

export const XL = Template.bind({});
XL.args = {
    text: 'IconWithValue XL',
    size: Size.XL,
};