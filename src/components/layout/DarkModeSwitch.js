import React, { useState } from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import themeFile from '../../util/theme';

//MUI Stuff
import { Switch, FormControlLabel } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";

const useDarkMode = () => {
    const [theme, setTheme] = useState(themeFile);
    const { spread : { palette : { type }}} = theme;
    const toggleDarkMode = () => {
        const updateTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                type: type === 'light' ? 'dark' : 'light'
            }
        };
        setTheme(updateTheme);
    };
    return [theme, toggleDarkMode];
};

const DarkModeSwitch = () => {
    const [theme, toggleDarkMode] = useDarkMode();
    const themeConfig = createMuiTheme(theme);
    console.log(themeConfig);
    return (
        <MuiThemeProvider theme={themeConfig}> // This is the theme I want to update on App.js when clicking the switch
            <Tooltip title='Toggle dark mode'>
                <FormControlLabel control={<Switch
                    onClick={toggleDarkMode}
                />}
                />
            </Tooltip>
        </MuiThemeProvider>
    );
};

export default DarkModeSwitch;