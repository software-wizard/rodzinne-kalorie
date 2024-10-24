import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import MultiRangeInput from './MultiRangeInput';
import {ButtonProps} from "../../atoms/Button/Button";

export default {
    title: 'Components/molecules/MultiRangeInput',
    component: MultiRangeInput,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) =>
    <div style={{width: '300px', height: '50px'}}>
        <MultiRangeInput {...args} />
    </div>


export const DEFAULT = Template.bind({});
DEFAULT.args = {};
