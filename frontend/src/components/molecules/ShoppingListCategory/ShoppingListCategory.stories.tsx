import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import ShoppingListCategory, {ShoppingListCategoryProps} from './ShoppingListCategory';

export default {
    title: 'Components/nowy/ShoppingListCategory',
    component: ShoppingListCategory,
} as Meta;

const Template: StoryFn<ShoppingListCategoryProps> = (args) => <ShoppingListCategory {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'Pieczywko',
    products: ['120g bułka żytnia', '450g chleb żytni', '200g bułka pszenna'],
};