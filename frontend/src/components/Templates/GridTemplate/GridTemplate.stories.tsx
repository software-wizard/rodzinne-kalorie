import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import GridTemplate, {GridTemplateProps} from './GridTemplate';

export default {
    title: 'Components/templates/GridTemplate',
    component: GridTemplate,
} as Meta;

const Template: StoryFn<GridTemplateProps> = (args) => <GridTemplate {...args} />;

export const DEFAULT_SINGLE_COLUMN = Template.bind({});

function elements() {
    return [
        <div style={{display: 'flex', backgroundColor: 'red', height: '70px'}}>1</div>,
        <div style={{display: 'flex', backgroundColor: 'blue', height: '70px'}}>2</div>,
        <div style={{display: 'flex', backgroundColor: 'green', height: '70px'}}>3</div>,
        <div style={{display: 'flex', backgroundColor: 'yellow', height: '70px'}}>4</div>,
        <div style={{display: 'flex', backgroundColor: 'purple', height: '70px'}}>5</div>,
        <div style={{display: 'flex', backgroundColor: 'orange', height: '70px'}}>6</div>,
        <div style={{display: 'flex', backgroundColor: 'pink', height: '70px'}}>7</div>
    ];
}

DEFAULT_SINGLE_COLUMN.args = {
    children:
        elements()
};

export const SINGLE_ROW = Template.bind({});
SINGLE_ROW.args = {
    direction: 'column',
    children:
        elements()
};

export const SINGLE_COLUMN_WTH_HEADER = Template.bind({});
SINGLE_COLUMN_WTH_HEADER.args = {
    headerHeight: '20px',
    children:
        elements()
};