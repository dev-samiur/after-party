import React, { useState, useEffect } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import lightBlue from '@material-ui/core/colors/lightBlue'
import TextField from '@material-ui/core/TextField'
import Tabs from './Tabs'


const primaryLight = lightBlue[100];

const useStyles = makeStyles((theme) => ({
    avatarLarge: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    }

}))

export default function Profile({myProfile}) {

    const classes = useStyles();
    const matches = useMediaQuery('(max-width:960px)');

    return (
        <Container style={{paddingBottom: 50}}>
            <Box my={5}><Typography variant="h5">Profile</Typography></Box>
            <Box p={5} display="flex" flexDirection={matches ? 'column' : 'row'} justifyContent="space-between" borderRadius="10px" style={{background: '#FFF'}}>
                <Box display="flex" alignItems="center">
                    <Avatar 
                        src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                        className={classes.avatarLarge}
                    />
                    <Typography variant="h6" style={{marginLeft: 20}}><b>David Parker</b></Typography>
                </Box>
                {
                    myProfile ? 
                    (
                        <Box mt={matches ? 3 : 0}>
                            <Box>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    style={{width: 220, background: primaryLight, border: '1px solid #1687F4', color: '#1687F4', fontWeight: 600, margin: 0}}
                                >
                                    Edit Information
                                </Button>
                            </Box>
                            <Box mt={2}>
                                <Button
                                    variant="outline"
                                    className={classes.button}
                                    style={{width: 220, fontWeight: 600, margin: 0, border: '1px solid #000'}}
                                >
                                    Edit Privacy Setting
                                </Button>
                            </Box>
                        </Box>

                    ) : null
                }
            </Box>
            <Box mt={2} p={5} borderRadius="10px" style={{background: '#FFF'}}>
                <Box borderBottom="1px solid #1687F4" pb={3}>
                    <Typography variant="body1">Information</Typography>
                </Box>
                <Box p={matches ? 0 : 2} mt={matches ? 3 : 0}>
                    <form>
                        <Box display="flex" flexDirection={matches ? 'column' : 'row' } justifyContent="space-between">
                            <Box flexGrow="1">
                                <Box><Typography>Sex</Typography></Box>
                                <Box mt={2}><TextField disabled style={{width: '100%'}} variant="outlined" value="male" /></Box>
                            </Box>
                            <Box flexGrow="1" mt={matches ? 3 : 0} ml={matches ? 0 : 5}>
                                <Box><Typography>Age</Typography></Box>
                                <Box mt={2}><TextField disabled style={{width: '100%'}} variant="outlined" value="23 Years" /></Box>
                            </Box>
                        </Box>
                        <Box mt={3} display="flex" flexDirection={matches ? 'column' : 'row' } justifyContent="space-between">
                            <Box flexGrow="1">
                                <Box><Typography>Organization</Typography></Box>
                                <Box mt={2}><TextField disabled style={{width: '100%'}} variant="outlined" value="Org Name" /></Box>
                            </Box>
                            <Box flexGrow="1" mt={matches ? 3 : 0} ml={matches ? 0 : 5}>
                                <Box><Typography>Title</Typography></Box>
                                <Box mt={2}><TextField disabled style={{width: '100%'}} variant="outlined" value="Vice President" /></Box>
                            </Box>
                        </Box>
                        <Box mt={3} display="flex" flexDirection={matches ? 'column' : 'row' } justifyContent="space-between">
                            <Box flexGrow="1">
                                <Box><Typography>University</Typography></Box>
                                <Box mt={2}><TextField disabled style={{width: '100%'}} variant="outlined" value="Kellogg School of Management" /></Box>
                            </Box>
                            <Box flexGrow="1" mt={matches ? 3 : 0} ml={matches ? 0 : 5}>
                                <Box><Typography>Short Bio</Typography></Box>
                                <Box mt={2}><TextField disabled style={{width: '100%'}} variant="outlined" value="Bio here" /></Box>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>

            <Box mt={2}>
                    <Typography variant="h6"><b>Webinar Information</b></Typography>
            </Box>
            <Box mt={3}>
                <Tabs/>
            </Box>
        </Container>
    )
}
