import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import VisibilityIcon from '@material-ui/icons/Visibility'

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    titleText: {
        background: theme.palette.primary.main,
        color: '#FFF',
        textAlign: 'center',
        width: 120,
        padding: '5px 0px',
        cursor: 'pointer',
    },

}))

export function Login() {

    const classes = useStyles()

    return (
        <Container className={classes.containerStyle}>
            <Box 
                width="100%" 
                maxWidth="400px" 
                style={{background: '#FFF', borderRadius: 5, boxShadow:'2px 2px 5px #DDD'}}
                display="flex" flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={3}
            >
                <Box>
                    <Box className={classes.title}>
                        <Typography className={classes.titleText} variant="h6" noWrap>
                            After Party
                        </Typography>
                    </Box>
                </Box>
                <Box mt={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography variant="h6" color="primary" style={{fontWeight: 600}}>Sign In</Typography>
                    <Typography variant="body1" style={{marginTop: 5, color: '#212121'}}>sign in to continue</Typography>
                </Box>
                <Box mt={3} width="100%">
                    <TextField
                        style={{width: '100%'}}
                        variant="outlined" 
                        size="small" 
                        placeholder=" john45@gmail.com"
                        InputProps={{
                            endAdornment: <CheckCircleIcon color="primary" fontSize="small" 
                                            // style={ emailCorrectIcon ? {display: 'block'} : {display: 'none'}}
                                        />,
                            startAdornment: <MailOutlineIcon color="primary" fontSize="small" 
                                            // style={ emailCorrectIcon ? {display: 'block'} : {display: 'none'}}
                                            />
                        }}
                    />
                </Box>
                <Box mt={3} width="100%">
                    <TextField
                        style={{width: '100%'}}
                        variant="outlined" 
                        size="small" 
                        placeholder=" password"
                        InputProps={{
                            endAdornment: <VisibilityIcon color="primary" fontSize="small" 
                                            // style={ emailCorrectIcon ? {display: 'block'} : {display: 'none'}}
                                        />,
                            startAdornment: <LockOpenIcon color="primary" fontSize="small" 
                                            // style={ emailCorrectIcon ? {display: 'block'} : {display: 'none'}}
                                            />
                        }}
                    />
                </Box>
                <Box mt={1} width="100%" justifyContent="flex-end" display="flex">
                    <Typography variant="body2" color="primary" style={{fontWeight: 600, cursor: 'pointer'}}>Forget Password?</Typography>
                </Box>
                <Box mt={3} width="100%">
                    <Button
                        variant="contained"
                        color="primary"
                        style={{width: '100%', fontWeight: 600}}
                        size="large"
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
