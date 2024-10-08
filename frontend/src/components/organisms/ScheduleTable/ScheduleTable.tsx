import React from 'react';
import SingleRowGridTemplate from "../../Templates/SingleRowGridTemplate/SingleRowGridTemplate";
import {ScheduleDto} from "../../../date/Meal";
import ScheduleDay from "../ScheduleDay/ScheduleDay";
import {getDefaultCss} from "../../../GlobalStyle";

export type ScheduleTableProps = {
    schedule: ScheduleDto
};

const ScheduleTable: React.FC<ScheduleTableProps> = ({schedule}) => {
    let css = getDefaultCss();
    css.columnGap = '10px'
    return (
        <SingleRowGridTemplate css = {css}>
            {schedule.days.map((scheduleDayElement, index) => (
                <ScheduleDay key={index} date={new Date(scheduleDayElement.date)}
                             meals={scheduleDayElement.meals}></ScheduleDay>
            ))}

        </SingleRowGridTemplate>
    );
};

export default ScheduleTable;
