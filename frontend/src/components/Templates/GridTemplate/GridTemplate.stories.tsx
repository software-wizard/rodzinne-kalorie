import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import GridTemplate, {GridTemplateProps} from './GridTemplate';

export default {
    title: 'Components/templates/GridTemplate',
    component: GridTemplate,
} as Meta;

const Template: StoryFn<GridTemplateProps> = (args) => <GridTemplate {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    rows: 2,
    columns: 4,
    children:
        <React.Fragment>
            <div style={{backgroundColor: 'red', height: '100px'}}>1</div>
            <div style={{backgroundColor: 'blue', height: '100px'}}>2</div>
            <div style={{backgroundColor: 'green', height: '100px'}}>3</div>
            <div style={{backgroundColor: 'yellow', height: '100px'}}>4</div>
            <div style={{backgroundColor: 'purple', height: '100px'}}>5</div>
            <div style={{backgroundColor: 'orange', height: '100px'}}>6</div>
            <div style={{backgroundColor: 'pink', height: '100px'}}>7</div>
        </React.Fragment>
};