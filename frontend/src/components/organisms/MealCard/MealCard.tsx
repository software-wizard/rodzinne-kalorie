import React from 'react';
import {Card} from './MealCard.styles';
import MacroIcons from "../../molecules/MacroIcons/MacroIcons";
import ActionIcons from "../../atoms/ActionIcons/ActionIcons";
import Label from "../../atoms/Label/Label";
import {Size} from "../../../GlobalStyle";

export type MealCardProps = {
    mealName?: string;
    macro:{
        calories: number;
        carbohydrates: number;
        protein: number;
        fat: number;
    }
};
const MealCard: React.FC<MealCardProps> = ({mealName = 'nazwa posiłku', macro}) => {
    return (
        <Card>
            <Label text={mealName} size = {Size.L}></Label>
            <MacroIcons macro={macro}></MacroIcons>
            <ActionIcons></ActionIcons>
        </Card>
    );
};

export default MealCard;