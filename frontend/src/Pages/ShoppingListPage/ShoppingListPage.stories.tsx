import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import ShoppingListPage, {ShoppingListPageProps} from './ShoppingListPage';

export default {
    title: 'Components/nowy/ShoppingListPage',
    component: ShoppingListPage,
} as Meta;

const Template: StoryFn<ShoppingListPageProps> = (args) => <ShoppingListPage {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
list: [
    {name: 'Fruits', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Fruit${i + 1}`)},
    {name: 'Vegetables', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Vegetable${i + 1}`)},
    {name: 'Dairy', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Dairy${i + 1}`)},
    {name: 'Grains', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Grain${i + 1}`)},
    {name: 'Meat', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Meat${i + 1}`)},
    {name: 'Seafood', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Seafood${i + 1}`)},
    {name: 'Beverages', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Beverage${i + 1}`)},
    {name: 'Snacks', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Snack${i + 1}`)},
    {name: 'Frozen Foods', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `FrozenFood${i + 1}`)},
    {name: 'Bakery', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Bakery${i + 1}`)},
    {name: 'Condiments', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `Condiment${i + 1}`)},
    {name: 'Canned Goods', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `CannedGood${i + 1}`)},
    {name: 'Dry Goods', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `DryGood${i + 1}`)},
    {name: 'Personal Care', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `PersonalCare${i + 1}`)},
    {name: 'Household Items', products: Array.from({length: getRandomInt(3, 10)}, (_, i) => `HouseholdItem${i + 1}`)}
]
};

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}