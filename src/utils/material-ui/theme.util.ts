import { createTheme, Theme } from "@mui/material";
import { paletteOptions } from "./palette.util";
import { shapeOptions } from "./shape.util";
import { typographyOptions } from "./typography.util";

// Material UI theme
export const light: Theme = createTheme({
    palette: paletteOptions,
    shape: shapeOptions,
    typography: typographyOptions,
});
