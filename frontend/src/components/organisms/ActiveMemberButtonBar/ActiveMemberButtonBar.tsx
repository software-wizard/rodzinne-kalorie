import React, {useState} from 'react';
import SingleRowGridTemplate from "../../Templates/SingleRowGridTemplate/SingleRowGridTemplate";
import Button from "../../atoms/Button/Button";

export type ActiveMemberButtonBarProps = {
    userNames: Array<string>;
    activeName: string;
};

const ActiveMemberButtonBar: React.FC<ActiveMemberButtonBarProps> = ({userNames}) => {
    const [activeName, setActiveUser] = useState<string>();


    return (
        <SingleRowGridTemplate>
            {userNames.map((userName) => (
                <Button onClick={() => setActiveUser(userName)}
                        className={activeName === userName ? 'active' : ''}
                >
                    {userName}
                </Button>
            ))}
        </SingleRowGridTemplate>
    );

};


export default ActiveMemberButtonBar;
