import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Label, {LabelProps} from './Label';
import {COLOR_GREEN, Size} from "../../../GlobalStyle";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export default {
    title: 'Components/atoms/Label',
    component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) =>
    <React.Fragment>
        <Label text={'Label default'}></Label>
        <div style={{height: '20px'}}></div>
        <Label text={'Label XS'} size={Size.XS}></Label>
        <Label text={'Label S'} size={Size.S}></Label>
        <Label text={'Label M'} size={Size.M}></Label>
        <Label text={'Label L'} size={Size.L}></Label>
        <Label text={'Label XL'} size={Size.XL}></Label>
    </React.Fragment>
;
export const DEFAULT = Template.bind({});
DEFAULT.args = {};

const Template2: StoryFn<LabelProps> = (args) =>
    <GridTemplate gridTemplateColumns={'repeat(2,1fr)'}>
        <Label {...args} />
        <Label {...args} backgroundColor={COLOR_GREEN.color600}/>
        <Label {...args} />
        <Label {...args} />
        <Label {...args} />
    </GridTemplate>;


export const WITH_BACKGROUND = Template2.bind({});
WITH_BACKGROUND.args = {
    text: 'Label with background',
    size: Size.M,
};