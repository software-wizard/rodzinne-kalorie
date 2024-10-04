import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
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
            <SingleColumnGridTemplate></SingleColumnGridTemplate>
            <SingleColumnGridTemplate></SingleColumnGridTemplate>
            <SingleColumnGridTemplate></SingleColumnGridTemplate>
        </React.Fragment>
};