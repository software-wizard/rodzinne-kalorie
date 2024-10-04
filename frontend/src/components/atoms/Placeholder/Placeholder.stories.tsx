import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Placeholder, { PlaceholderProps } from './Placeholder';

export default {
    title: 'Components/atoms/Placeholder',
    component: Placeholder,
} as Meta;

const Template: StoryFn<PlaceholderProps> = (args) => <Placeholder {...args} />;

export const HalfWidth = Template.bind({});
HalfWidth.args = {
    width: '50%',
    height: '200px',
    name: 'Placeholder',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    width: '100%',
    height: '300px',
    name: 'Placeholder',
};

export const withChildrens = Template.bind({});
withChildrens.args = {
    width: '100%',
    height: '300px',
    name: 'Placeholder',
    children:
        <React.Fragment>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
        </React.Fragment>
};