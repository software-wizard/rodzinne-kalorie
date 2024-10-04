import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import SingleRowGridTemplate, {
    SingleRowGridTemplateProps
} from "../components/Templates/SingleRowGridTemplate/SingleRowGridTemplate";
import SingleColumnGridTemplate from "../components/Templates/ColumnTemplate/SingleColumnGridTemplate";
import MealCard from "../components/organisms/MealCard/MealCard";

export default {
    title: 'App/Schedule',
    component: SingleRowGridTemplate,
} as Meta;

const Template: StoryFn<SingleRowGridTemplateProps> = (args) => <SingleRowGridTemplate {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
    children:
        <React.Fragment>
            <SingleColumnGridTemplate><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard></SingleColumnGridTemplate>
            <SingleColumnGridTemplate><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard></SingleColumnGridTemplate>
            <SingleColumnGridTemplate><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard></SingleColumnGridTemplate>
            <SingleColumnGridTemplate><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard></SingleColumnGridTemplate>
            <SingleColumnGridTemplate><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard></SingleColumnGridTemplate>
            <SingleColumnGridTemplate><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard><MealCard></MealCard></SingleColumnGridTemplate>
        </React.Fragment>
};