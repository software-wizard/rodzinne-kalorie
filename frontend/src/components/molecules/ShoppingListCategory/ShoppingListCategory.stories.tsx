import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import ShoppingListCategory, {ShoppingListCategoryProps} from './ShoppingListCategory';

export default {
    title: 'Components/molecules/ShoppingListCategory',
    component: ShoppingListCategory,
} as Meta;

const Template: StoryFn<ShoppingListCategoryProps> = (args) =>
    <div>
        <ShoppingListCategory {...args} />
    </div>
;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    name: 'Pieczywko',
    products: ['120g bułka żytnia', '450g chleb żytni', '200g bułka pszenna'],
};