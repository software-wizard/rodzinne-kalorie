import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import VisibleByHoverWrapper from "./VisibleByHoverWrapper";

export default {
    title: 'Components/atoms/VisibleByHoverWrapper',
    component: VisibleByHoverWrapper,
} as Meta;

const Template: StoryFn<typeof VisibleByHoverWrapper> = (args) => <VisibleByHoverWrapper {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    children: '<Label>You see me now</Label>',
    rows: 2,
    columns: 3
};