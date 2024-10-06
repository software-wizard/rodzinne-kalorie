import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import SingleRowGridTemplate, {SingleRowGridTemplateProps} from './SingleRowGridTemplate';

export default {
    title: 'Components/templates/SingleRowGridTemplate',
    component: SingleRowGridTemplate,
} as Meta;

const Template: StoryFn<SingleRowGridTemplateProps> = (args) => <SingleRowGridTemplate {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    children:
        <React.Fragment>
        </React.Fragment>
};