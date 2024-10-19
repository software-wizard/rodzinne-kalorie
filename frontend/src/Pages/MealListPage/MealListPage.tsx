import React from 'react';
import GridTemplate from "../../components/Templates/GridTemplate/GridTemplate";
import Placeholder from "../../components/atoms/Placeholder/Placeholder";
import MealCardWithDetails from "../../components/organisms/MealCardWithDetails/MealCardWithDetails";

export type MealListPageProps = {};

const MealListPage: React.FC<MealListPageProps> = ({}) => {

    return (
        <GridTemplate direction={"column"} gridTemplateColumns={'1fr 5fr'} gap={'0.5em'}>
            <Placeholder name={'szukajka'}></Placeholder>
            <GridTemplate overflowY={'scroll'} gap={'0.5em'}>
                <MealCardWithDetails/>
                <MealCardWithDetails/>
                <MealCardWithDetails/>
                <MealCardWithDetails/>
                <MealCardWithDetails/>
                <MealCardWithDetails/>
                <MealCardWithDetails/>
                <MealCardWithDetails/>
            </GridTemplate>
        </GridTemplate>
    );
};

export default MealListPage;
