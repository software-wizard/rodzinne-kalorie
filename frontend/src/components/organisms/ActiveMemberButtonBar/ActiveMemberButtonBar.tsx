import React, {useState} from 'react';
import SingleRowGridTemplate from "../../Templates/SingleRowGridTemplate/SingleRowGridTemplate";
import Button from "../../atoms/Button/Button";

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
        <SingleRowGridTemplate>
            {userNames.map((userName) => (
                <Button onClick={() => setCurrentUser(userName)}
                        className={activeName === userName ? 'active' : ''}
                >
                    {userName}
                </Button>
            ))}
        </SingleRowGridTemplate>
    );

};


export default ActiveMemberButtonBar;
