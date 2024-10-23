import React from 'react';
import ActiveMemberButtonBar from "../../components/organisms/ActiveMemberButtonBar/ActiveMemberButtonBar";
import ScheduleTable from "../../components/organisms/ScheduleTable/ScheduleTable";
import {useStore} from '../../store/Store';
import GridTemplate from "../../components/Templates/GridTemplate/GridTemplate";

export type SchedulePageProps = {};

const SchedulePage: React.FC<SchedulePageProps> = ({}) => {
    const members = useStore((state) => state.members);
    const activeName = useStore((state) => state.activeMember.name);
    const schedule = useStore((state) => state.activeMember.schedule);
    const setCurrentUser = useStore((state) => state.setActiveMember);

    return (
        <GridTemplate headerHeight={'3rem'}>
            <ActiveMemberButtonBar userNames={members.map(m => m.name)} activeName={activeName}
                                   onClick={setCurrentUser}/>
            <ScheduleTable schedule={schedule}/>
        </GridTemplate>
    );
};

export default SchedulePage;