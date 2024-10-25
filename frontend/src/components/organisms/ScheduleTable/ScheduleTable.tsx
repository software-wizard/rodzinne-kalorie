import React from 'react';
import {ScheduleDto} from "../../../data/dtos/Meal";
import ScheduleDay from "../ScheduleDay/ScheduleDay";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export type ScheduleTableProps = {
    schedule: ScheduleDto
};

const ScheduleTable: React.FC<ScheduleTableProps> = ({schedule}) => {
    return (
        <GridTemplate direction={'column'} gap = {'10px'}>
            {schedule.days.map((scheduleDayElement, index) => (
                <ScheduleDay key={index} date={new Date(scheduleDayElement.date)}
                             meals={scheduleDayElement.meals}></ScheduleDay>
            ))}

        </GridTemplate>
    );
};

export default ScheduleTable;
