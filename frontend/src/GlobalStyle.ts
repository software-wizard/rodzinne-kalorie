import {createGlobalStyle} from 'styled-components';


export const PRIMARY = "#4CAF50";
export const DARK_PRIMARY = "#388E3C";
export const LIGHT_PRIMARY = "#C8E6C9";
export const WHITE = "#F5F5F5";
export const ACCENT = "#9E9E9E";
export const PRIMARY_TEXT = "#212121";
export const SECONDARY_TEXT = "#757575";
export const DIVIDER = "#BDBDBD";

export enum Size {
    XS, S, M, L, XL
}

export const COLOR_GREEN =
    {
        color100: "#ECFDF5",
        color200: "#D1FAE5",
        color300: "#A7F3D0",
        color400: "#6EE7B7",
        color500: "#34D399",
        color600: "#10B981",
        color700: "#059669",
        color800: "#047857",
        color900: "#065F46",
        color1000: "#064E3B"
    }
export const COLOR_YELLOW = {
    color100: "#FFFBEB",
    color200: "#FEF3C7",
    color300: "#FDE68A",
    color400: "#FCD34D",
    color500: "#FBBF24",
    color600: "#F59E0B",
    color700: "#D97706",
    color800: "#B45309",
    color900: "#92400E",
    color1000: "#78350F"
}

export const COLOR_GREY = {
    color100: "#F9FAFB",
    color200: "#E5E7EB",
    color300: "#D1D5DB",
    color400: "#9CA3AF",
    color500: "#6B7280",
    color600: "#4B5563",
    color700: "#374151",
    color800: "#1F2937",
    color900: "#111827",
    color1000: "#030712"
}

const GlobalStyle = createGlobalStyle`
    body {
        background: ${COLOR_GREY.color100};
        font-family: Open-Sans, Helvetica, Sans-Serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;