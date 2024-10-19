import React from 'react';
import GridTemplate from "../../components/Templates/GridTemplate/GridTemplate";
import ActiveMemberButtonBar from "../../components/organisms/ActiveMemberButtonBar/ActiveMemberButtonBar";

export type MembersManagePageProps = {};

const MembersManagePage: React.FC<MembersManagePageProps> = ({}) => {

    return (
        <React.Fragment>
            <ActiveMemberButtonBar userNames={["a", "b"]} activeName={"a"} onClick={() => {
            }}></ActiveMemberButtonBar>
            <GridTemplate>

            </GridTemplate>
        </React.Fragment>
    );
};

export default MembersManagePage;
