import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import GridTemplate, {GridTemplateProps} from './GridTemplate';

export default {
    title: 'Components/nowy/GridTemplate',
    component: GridTemplate,
} as Meta;

const Template: StoryFn<GridTemplateProps> = (args) => <GridTemplate {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'GridTemplate',
};