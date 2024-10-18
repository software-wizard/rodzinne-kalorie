import React from 'react';
import SingleColumnGridTemplate from "../Templates/SingleColumnGridTemplate/SingleColumnGridTemplate";
import ActiveMemberButtonBar from "../organisms/ActiveMemberButtonBar/ActiveMemberButtonBar";
import ScheduleTable from "../organisms/ScheduleTable/ScheduleTable";
import {appStore} from '../../store/AppStore';


export type SchedulePageProps = {};

const SchedulePage: React.FC<SchedulePageProps> = ({}) => {
    const schedule = appStore((state) => state.activeMember.schedule);

    return (
        <SingleColumnGridTemplate>
            <ActiveMemberButtonBar userNames={["a", "b"]} activeName={"a"}/>
            <ScheduleTable schedule={schedule}></ScheduleTable>
        </SingleColumnGridTemplate>
    );
};

export default SchedulePage;
