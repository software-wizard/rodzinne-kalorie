import React from 'react';
import {StyledAppHeader} from './AppHeader.styles';
import Button from "../../atoms/Button/Button";
import SingleRowGridTemplate from "../../Templates/SingleRowGridTemplate/SingleRowGridTemplate";

export type AppHeaderProps = {
    children?: React.ReactNode;
};

const AppHeader: React.FC<AppHeaderProps> = () => {

    return (
        <StyledAppHeader>
            <SingleRowGridTemplate>
                <Button>Jadłospis</Button>
                <Button>Posiłki</Button>
                <Button>Lista zakupów</Button>
                <Button>Jadłożercy</Button>
            </SingleRowGridTemplate>
        </StyledAppHeader>
    );
};

export default AppHeader;
