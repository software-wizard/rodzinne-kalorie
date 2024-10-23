import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import FlexContainer, {FlexContainerProps} from './FlexContainer';

export default {
    title: 'Components/templates/FlexContainer',
    component: FlexContainer,
} as Meta;

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

const Template: StoryFn<FlexContainerProps> = (args) => <FlexContainer {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    children: elements()
};