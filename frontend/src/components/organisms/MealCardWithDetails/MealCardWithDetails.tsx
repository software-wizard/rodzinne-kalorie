import React from 'react';
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";
import Placeholder from "../../atoms/Placeholder/Placeholder";

export type MealCardWithDetailsProps = {};

const MealCardWithDetails: React.FC<MealCardWithDetailsProps> = ({}) => {

    return (
        <GridTemplate direction={'column'} gap={'0.5em'} border={'3px solid black'}>
                <Placeholder name={'foto'} width={'200px'} height={'200px'}></Placeholder>
                <Placeholder name={'jakieś info'}></Placeholder>
                <Placeholder name={'składniki'}></Placeholder>
                <Placeholder name={'chart'} width={'160px'} height={'160px'} ></Placeholder>
        </GridTemplate>
    );
};

export default MealCardWithDetails;
