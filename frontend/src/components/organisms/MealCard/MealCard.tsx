import React from 'react';
import { Card, CardTitle } from './MealCard.styles';
import MacroIcons from "../../molecules/MacroIcons/MacroIcons";
import ActionIcons from "../../atoms/ActionIcons/ActionIcons";
export type MealCardProps = {
    name?: string;
};
const MealCard: React.FC<MealCardProps> =  ({ name = 'nazwa posiłku' }) => {
    return (
        <Card>
            <ActionIcons></ActionIcons>
            <CardTitle>{name}</CardTitle>
            <MacroIcons></MacroIcons>
        </Card>
    );
};

export default MealCard;