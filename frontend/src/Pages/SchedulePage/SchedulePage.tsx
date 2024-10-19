import React from 'react';
import SingleColumnGridTemplate from "../../components/Templates/SingleColumnGridTemplate/SingleColumnGridTemplate";
import ActiveMemberButtonBar from "../../components/organisms/ActiveMemberButtonBar/ActiveMemberButtonBar";
import ScheduleTable from "../../components/organisms/ScheduleTable/ScheduleTable";
import {useStore} from '../../store/Store';

export type SchedulePageProps = {};

const SchedulePage: React.FC<SchedulePageProps> = ({}) => {
    const members = useStore((state) => state.members);
    const activeName = useStore((state) => state.activeMember.name);
    const schedule = useStore((state) => state.activeMember.schedule);
    const setCurrentUser = useStore((state) => state.setActiveMember);

    return (
        <SingleColumnGridTemplate headerSize={'3rem'}>
            <ActiveMemberButtonBar userNames={members.map(m => m.name)} activeName={activeName}
                                   onClick={setCurrentUser}/>
            <ScheduleTable schedule={schedule}/>
        </SingleColumnGridTemplate>
    );
};

export default SchedulePage;