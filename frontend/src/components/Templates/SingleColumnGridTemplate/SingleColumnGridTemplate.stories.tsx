import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import SingleColumnGridTemplate, {ColumnTemplateProps} from './SingleColumnGridTemplate';

export default {
    title: 'Components/templates/SingleColumnGridTemplate',
    component: SingleColumnGridTemplate,
} as Meta;

const Template: StoryFn<ColumnTemplateProps> = (args) => <SingleColumnGridTemplate {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    children:
        <React.Fragment>
            <div style={{backgroundColor: 'red', width: '100px'}}>1</div>
            <div style={{backgroundColor: 'blue', width: '100px'}}>2</div>
            <div style={{backgroundColor: 'green', width: '100px'}}>3</div>
            <div style={{backgroundColor: 'yellow', width: '100px'}}>4</div>
            <div style={{backgroundColor: 'purple', width: '100px'}}>5</div>
            <div style={{backgroundColor: 'orange', width: '100px'}}>6</div>
            <div style={{backgroundColor: 'pink', width: '100px'}}>7</div>
        </React.Fragment>
};