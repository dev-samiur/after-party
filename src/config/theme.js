import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Segoe UI',
    },
    palette: {
        primary: {
            light:"#817D7D",
            main: "#1687F4",
            background: "#FFF",
        },
        secondary:{
            main: '#1687F4'
        },
        type: 'light',
    },
});

export default theme