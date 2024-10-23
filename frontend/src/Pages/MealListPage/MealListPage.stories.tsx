import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MealListPage, {MealListPageProps} from './MealListPage';

export default {
    title: 'components/pages/MealListPage',
    component: MealListPage,
} as Meta;

const Template: StoryFn<MealListPageProps> = (args) => <MealListPage {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'MealListPage',
};