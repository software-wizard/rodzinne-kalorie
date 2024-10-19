import React, {useState} from 'react';
import Button from "../../atoms/Button/Button";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export type ActiveMemberButtonBarProps = {
    userNames: Array<string>,
    activeName: string,
    onClick: (member: string) => void
};

const ActiveMemberButtonBar: React.FC<ActiveMemberButtonBarProps> = ({userNames, onClick}) => {
    const [activeName, setActiveUser] = useState<string>();


    function setCurrentUser(userName: string) {
        onClick(userName)
        setActiveUser(userName)
    }

    return (
        <GridTemplate direction={'column'}>
            {userNames.map((userName) => (
                <Button onClick={() => setCurrentUser(userName)}
                        className={activeName === userName ? 'active' : ''}
                >
                    {userName}
                </Button>
            ))}
        </GridTemplate>
    );

};


export default ActiveMemberButtonBar;
