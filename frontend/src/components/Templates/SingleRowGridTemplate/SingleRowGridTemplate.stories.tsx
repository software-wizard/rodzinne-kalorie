import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import SingleRowGridTemplate, {SingleRowGridTemplateProps} from './SingleRowGridTemplate';
import SingleColumnGridTemplate from "../ColumnTemplate/SingleColumnGridTemplate";
import MealCard from "../../organisms/MealCard/MealCard";

export default {
    title: 'Components/templates/SingleRowGridTemplate',
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