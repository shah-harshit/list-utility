import { alpha, PaletteOptions } from "@mui/material";
import { Color } from "./color.util";

// Material UI theme colors
export const Palette = {
    PrimaryColorMain: Color.Blue2,
    SecondaryColorMain: Color.Grey2,
    ActionColorLight: Color.White1,
    HoverOpacityLight: 0.06,
    HoverOverlayLight: alpha(Color.White1, 0.06),
    FocusOpacityLight: 0.09,
    FocusOverlayLight: alpha(Color.White1, 0.09),
    SelectedOpacityLight: 0.12,
    SelectedOverlayLight: alpha(Color.White1, 0.12),
    ActiveOpacityLight: 0.24,
    ActiveOverlayLight: alpha(Color.White1, 0.24),
    ActionColorDark: Color.Black1,
    HoverOpacityDark: 0.02,
    HoverOverlayDark: alpha(Color.Black1, 0.02),
    FocusOpacityDark: 0.04,
    FocusOverlayDark: alpha(Color.Black1, 0.04),
    SelectedOpacityDark: 0.06,
    SelectedOverlayDark: alpha(Color.Black1, 0.06),
    ActiveOpacityDark: 0.12,
    ActiveOverlayDark: alpha(Color.Black1, 0.12),
    NavBarBackgroundColor: Color.Blue7,
    TooltipBackgroundColor: Color.Black1,
    DataGridHeaderBackgroundColor: Color.Grey6,
    PaperBackgroundColor: Color.White1,
    BackgroundColorDefault: Color.Grey4,
    BorderColorDefault: Color.Grey5,
} as const;

// Material UI theme color palette
export const paletteOptions: PaletteOptions = {
    primary: {
        light: Color.Blue1,
        main: Palette.PrimaryColorMain,
        dark: Color.Blue3,
        contrastText: Color.White1,
    },
    secondary: {
        light: Color.Grey1,
        main: Palette.SecondaryColorMain,
        dark: Color.Grey3,
        contrastText: Color.White1,
    },
    error: {
        light: Color.Red1,
        main: Color.Red2,
        dark: Color.Red3,
    },
    warning: {
        light: Color.Yellow1,
        main: Color.Yellow2,
        dark: Color.Yellow3,
    },
    info: {
        light: Color.Blue4,
        main: Color.Blue5,
        dark: Color.Blue6,
    },
    success: {
        light: Color.Green1,
        main: Color.Green2,
        dark: Color.Green3,
    },
    background: {
        paper: Palette.PaperBackgroundColor,
        default: Palette.BackgroundColorDefault,
    },
    action: {
        hoverOpacity: Palette.HoverOpacityDark,
        hover: Palette.HoverOverlayDark,
        focusOpacity: Palette.FocusOpacityDark,
        focus: Palette.FocusOverlayDark,
        selectedOpacity: Palette.SelectedOpacityDark,
        selected: Palette.SelectedOverlayDark,
        activatedOpacity: Palette.ActiveOpacityDark,
        active: Palette.ActiveOverlayDark,
    },
};
