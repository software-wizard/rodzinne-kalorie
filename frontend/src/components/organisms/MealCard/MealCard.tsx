import React from 'react';
import {Card} from './MealCard.styles';
import MacroIcons from "../../molecules/MacroIcons/MacroIcons";
import VisibleByHoverWrapper from "../../molecules/VisibleByHoverWrapper/VisibleByHoverWrapper";
import Label from "../../atoms/Label/Label";
import {Size} from "../../../GlobalStyle";
import ActionIcon from "../../atoms/ActionIcon/ActionIcon";
import {FaCopy, FaPaste, FaRegFile, FaReply, FaSearch, FaTrash} from "react-icons/fa";

export type MealCardProps = {
    mealName?: string;
    macro: {
        calories: number;
        carbohydrates: number;
        protein: number;
        fat: number;
    }
};
const MealCard: React.FC<MealCardProps> = ({mealName = 'nazwa posiłku', macro}) => {
    return (
        <Card>
            <VisibleByHoverWrapper>
                <ActionIcon icon={FaReply}></ActionIcon>
                <ActionIcon icon={FaSearch}></ActionIcon>
                <ActionIcon icon={FaRegFile}></ActionIcon>
                <ActionIcon icon={FaTrash}></ActionIcon>
                <ActionIcon icon={FaCopy}></ActionIcon>
                <ActionIcon icon={FaPaste}></ActionIcon>
            </VisibleByHoverWrapper>
            <Label text={mealName} size={Size.L}></Label>
            <MacroIcons macro={macro}></MacroIcons>
        </Card>
    );
};

export default MealCard;