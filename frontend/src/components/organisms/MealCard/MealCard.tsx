import React from 'react';
import {Card} from './MealCard.styles';
import MacroIcons from "../../molecules/MacroIcons/MacroIcons";
import ActionIcons from "../../atoms/ActionIcons/ActionIcons";
import Label from "../../atoms/Label/Label";
import {Size} from "../../../GlobalStyle";

export type MealCardProps = {
    mealName?: string;
};
const MealCard: React.FC<MealCardProps> = ({mealName = 'nazwa posiłku'}) => {
    return (
        <Card>
            <Label text={mealName} size = {Size.L}></Label>
            <MacroIcons></MacroIcons>
            <ActionIcons></ActionIcons>
        </Card>
    );
};

export default MealCard;