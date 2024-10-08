import React from 'react';
import {StyledAppHeader} from './AppHeader.styles';
import Button from "../../atoms/Button/Button";
import SingleRowGridTemplate from "../../Templates/SingleRowGridTemplate/SingleRowGridTemplate";
import {getDefaultCss} from "../../../GlobalStyle";

export type AppHeaderProps = {
    children?: React.ReactNode;
};

const AppHeader: React.FC<AppHeaderProps> = () => {
    let css = getDefaultCss();
    css.height = '10vh'
    css.columnGap = '1px'

    return (
        <StyledAppHeader>
            <SingleRowGridTemplate css={css}>
                <Button>Jadłospis</Button>
                <Button>Posiłki</Button>
                <Button>Lista zakupów</Button>
                <Button>Jadłożercy</Button>
            </SingleRowGridTemplate>
        </StyledAppHeader>
    );
};

export default AppHeader;
