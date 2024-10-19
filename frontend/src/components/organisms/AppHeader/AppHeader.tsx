import React from 'react';
import {StyledAppHeader} from './AppHeader.styles';
import Button from "../../atoms/Button/Button";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export type AppHeaderProps = {
    children?: React.ReactNode;
};

const AppHeader: React.FC<AppHeaderProps> = () => {

    return (
        <StyledAppHeader>
            <GridTemplate height={'10vh'} direction={'column'}>
                <Button>Jadłospis</Button>
                <Button>Posiłki</Button>
                <Button>Lista zakupów</Button>
                <Button>Jadłożercy</Button>
            </GridTemplate>
        </StyledAppHeader>
    );
};

export default AppHeader;
