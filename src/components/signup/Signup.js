import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import lightBlue from '@material-ui/core/colors/lightBlue'
import VisibilityIcon from '@material-ui/icons/Visibility'

const primaryLight = lightBlue[100]

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 20,
            paddingBottom: 20,
            height: 'auto',
        },
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

export function Signup() {

    const classes = useStyles()
    const matches = useMediaQuery('(max-width:960px)')

    return (
        <Container className={classes.containerStyle}>
            <Box 
                width="100%"
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
                    <Typography variant="h6" color="primary" style={{fontWeight: 600}}>Sign up</Typography>
                    <Typography variant="body1" style={{marginTop: 5, color: '#212121'}}>sign up to continue</Typography>
                </Box>
                <Box mt={4} style={{background: primaryLight, borderRadius: '50%'}}>
                    <Button component="label" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 80}}>
                        <AddAPhotoIcon style={{width: 30, height: 30, cursor: 'pointer',}} color="primary"/>
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>
                </Box>
                <Box mt={1}>
                    <Typography variant="body2">Add Profile Picture</Typography>
                </Box>

                <Box mt={3}>
                    <Box display="flex" flexDirection={matches ? 'column' : 'row'}>
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <Typography variant="body1">Name</Typography>
                            </Box>
                            <Box mt={1} display="flex" flexDirection="column">
                                <TextField variant="outlined"  size="small" placeholder="Enter your full name" />
                            </Box>
                        </Box>
                        <Box ml={matches ? 0 : 2} mt={matches ? 2 : 0} display="flex" flexDirection="column">
                            <Box>
                                <Typography variant="body1">Username</Typography>
                            </Box>
                            <Box mt={1} display="flex" flexDirection="column">
                                <TextField variant="outlined"  size="small" placeholder="Enter your username" />
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={3}>
                        <Box>
                            <Typography variant="body1">Email address</Typography>
                        </Box>
                        <Box mt={1} display="flex" flexDirection="column">
                            <TextField type="email" variant="outlined"  size="small" placeholder="Enter your Email address" />
                        </Box>
                    </Box>
                    <Box mt={3} display="flex" flexDirection={matches ? 'column' : 'row'}>
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <Typography variant="body1">Password</Typography>
                            </Box>
                            <Box mt={1} display="flex" flexDirection="column">
                                <TextField 
                                    type="password" 
                                    variant="outlined"  
                                    size="small" 
                                    placeholder="Password"
                                    InputProps={{
                                        endAdornment: <VisibilityIcon color="primary" fontSize="small" 
                                                        // style={ emailCorrectIcon ? {display: 'block'} : {display: 'none'}}
                                                    />
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box ml={matches ? 0 : 2} mt={matches ? 2 : 0} display="flex" flexDirection="column">
                            <Box>
                                <Typography variant="body1">Confirm Password</Typography>
                            </Box>
                            <Box mt={1} display="flex" flexDirection="column">
                                <TextField 
                                    type="password" 
                                    variant="outlined"  
                                    size="small" 
                                    placeholder="Re-type Password"
                                    InputProps={{
                                        endAdornment: <VisibilityIcon color="primary" fontSize="small" 
                                                        // style={ emailCorrectIcon ? {display: 'block'} : {display: 'none'}}
                                                    />
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={4} display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            style={{fontWeight: 600}}
                            size="large"
                        >
                            Create Account
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
