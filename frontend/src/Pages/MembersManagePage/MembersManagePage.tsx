import React from 'react';
import GridTemplate from "../../components/Templates/GridTemplate/GridTemplate";
import ActiveMemberButtonBar from "../../components/organisms/ActiveMemberButtonBar/ActiveMemberButtonBar";
import {Size} from "../../GlobalStyle";
import {useStore} from "../../store/Store";
import Placeholder from "../../components/atoms/Placeholder/Placeholder";
import IconWithValue from "../../components/molecules/IconWithValue/IconWithValue";

export type MembersManagePageProps = {};

const MembersManagePage: React.FC<MembersManagePageProps> = ({}) => {
    const members = useStore((state) => state.members);
    const activeName = useStore((state) => state.activeMember.name);
    const setCurrentUser = useStore((state) => state.setActiveMember);
    const calorificRequirements = useStore((state) => state.activeMember.calorificRequirement);

    return (
        <GridTemplate headerHeight={'3rem'}>
            <ActiveMemberButtonBar userNames={members.map(m => m.name)} activeName={activeName}
                                   onClick={setCurrentUser}/>
            <GridTemplate direction={'column'}>
                <GridTemplate headerHeight={'3rem'}>
                    <IconWithValue direction='column' label={'Zapotrzebowanie kaloryczne'} value={calorificRequirements.toString()}
                                   size={Size.L}/>
                    <Placeholder name={'tabela makro'}></Placeholder>
                    <Placeholder name={'tabela makro per posiłek'}></Placeholder>
                </GridTemplate>
                <React.Fragment>
                    <Placeholder name={'waga wykres + dodawanie ważenia'}></Placeholder>
                </React.Fragment>
            </GridTemplate>
        </GridTemplate>
    );
};

export default MembersManagePage;
