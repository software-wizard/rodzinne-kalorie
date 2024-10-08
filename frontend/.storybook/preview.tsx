import type {Preview} from "@storybook/react";
import {Decorator} from '@storybook/react'
import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import AppHeader from "../src/components/organisms/AppHeader/AppHeader";
import Placeholder from "../src/components/atoms/Placeholder/Placeholder";
import GlobalStyle from "../src/GlobalStyle";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    tags: ["autodocs"]
};

const withGlobalStyle: Decorator = (Story) => (
    <>
        <GlobalStyle/>
        <Story/>
    </>
);

const withHeaderAndFooter: Decorator = (Story) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1200px',
        alignItems: 'stretch',
        justifyContent: 'center'
    }}>
        <AppHeader/>
        <div style={{display: 'flex', flexDirection: 'column', height: '85vh'}}>
            <div style={{flex: 1, overflow: 'auto'}}>
                <Story/>
            </div>
        </div>
        <Placeholder name={'FOOTER'} height={'5vh'}/>
    </div>
);

export const decorators = [withGlobalStyle, withHeaderAndFooter];

export const parameters = {
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            desktopSmall: {
                name: 'Small desktop',
                styles: {
                    width: '1024px',
                    height: '768px',
                },
            },
            desktopLarge: {
                name: 'Large desktop',
                styles: {
                    width: '1440px',
                    height: '900px',
                },
            },
            desktopUltraWide: {
                name: 'Ultra-wide desktop',
                styles: {
                    width: '2560px',
                    height: '1440px',
                },
            },
        },
    },
};

export default preview;
