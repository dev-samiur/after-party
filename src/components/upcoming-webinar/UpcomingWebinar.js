import React, { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Header from '../shared/Header'
import Image from 'material-ui-image'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import RedoIcon from '@material-ui/icons/Redo';
import lightBlue from "@material-ui/core/colors/lightBlue";
import RequestModal from '../shared/RequestModal';

const primaryLight = lightBlue[100];

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    tag: {
        fontWeight: 600, 
        background: primaryLight, 
        padding: 5, 
        display: 'inline'
    }
    
}))

export function UpcomingWebinar() {

    const [headerContent, setHeaderContent]= useState({
        header: 'Upcoming Webinar',
        main: 'Webinar: "Impact of Technology Stocks on the Market"',
    })

    const [tags, setTags] = useState(['Finance', '#Webinar', 'Robotics', '#Onlinewebinar', 'Finance', '#Webinar'])

    const [showReqModal, setShowReqModal]= useState(false)

    const handleReqModalOpen = (status) => {
        setShowReqModal(status)
    }

    const classes = useStyles();
    const matches = useMediaQuery('(max-width:960px)');

    return (
        <Container style={{marginBottom: 50}}>
            <Header content={headerContent} />
            <Box my={5}><Typography variant="h5">Details</Typography></Box>
            <Box p={3} display="flex" flexDirection={ matches ? 'column' : 'row' } style={{background: '#FFF', borderRadius: 10, overflow: 'hidden'}}>
                <Box display="flex" flexDirection="column" maxWidth="800px" flexGrow="2">
                    <Box style={{maxHeight: 400, overflow: 'hidden', display: 'flex', alignItems: 'center', borderRadius: 10}}>
                        <Image
                            src="https://images.unsplash.com/photo-1571306039457-fed5059589ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                            style={{objectFit: 'cover', width: '100%', height: '100%',   }}
                        />
                    </Box>
                    <Box my={3}><Typography variant="h6"><b>About this Webinar</b></Typography></Box>
                    <Box>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                    </Box>
                    <Box my={3}><Typography variant="body1"><b>The webinar will include:</b></Typography></Box>
                    <Box>
                        <Typography variant="body1">
                            -Live demonstration of several models<br/>
                            -Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                            -Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<br/>
                            -Q&A session
                        </Typography>
                    </Box>
                    <Box mt={3} mb={1}><Typography variant="body1"><b>join our webinar (Zoom Link)</b></Typography></Box>
                    <Box>
                        <Typography variant="body1" color="primary" style={{wordBreak:'break-all'}}>
                            https://us0web.zoomus/j/122221/pwd/sdd=mnwwwWkdndewlalsnd
                        </Typography>
                    </Box>
                </Box>
                <Box px={matches ? 0 : 3} py={matches ? 5 : 0} flexGrow="1" minWidth="300px">
                    <Box display="flex" flexDirection="column">
                        <Box display="flex">
                            <Avatar variant="square" style={{borderRadius: 10}}>
                                N
                            </Avatar>
                            <Typography variant="body1" style={{marginLeft: 10}}>By: YJPW</Typography>
                        </Box>
                        <Box mt={1}><Typography variant="body1">Keynote: Adam Sandler</Typography></Box>
                        <Box mt={1}><Typography variant="body1">Sat Oct 25, 2020 Time 7pm-9pm EST</Typography></Box>
                    </Box>
                    <Box my={5} display="flex" flexDirection="column">
                        <Box>
                            <Button
                                variant="contained"
                                className={classes.button}
                                startIcon={<RemoveCircleIcon />}
                                style={{width: 220, background: primaryLight, border: '1px solid #1687F4', color: '#1687F4', fontWeight: 600, margin: 0}}
                            >
                                Add To Calender
                            </Button>
                        </Box>
                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<ArrowForwardIcon />}
                                style={{width: 220, fontWeight: 600, margin: 0, border: '1px solid #1687F4'}}
                                onClick={() => handleReqModalOpen(true)}
                            >
                                Attend Webinar
                            </Button>
                        </Box>
                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color={primaryLight}
                                className={classes.button}
                                startIcon={<PermIdentityIcon />}
                                style={{width: 220, background: primaryLight, border: '1px solid #1687F4', color: '#1687F4', fontWeight: 600, margin: 0}}
                            >
                                View Attendee List
                            </Button>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Box>
                            <Typography variant="body1">Tags</Typography>
                        </Box>
                        <Box mt={3} display="flex">
                            <Box>
                                {
                                    tags ? tags.map( tag => (
                                        <Box mt={1}><Typography variant="body1" color="primary" className={classes.tag}>{tag}</Typography></Box>
                                    )) : null
                                }
                            </Box>
                            <Box ml={2}>
                                {
                                    tags ? tags.map( tag => (
                                        <Box mt={1}><Typography variant="body1" color="primary" className={classes.tag}>{tag}</Typography></Box>
                                    )) : null
                                }
                            </Box>
                        </Box>

                    </Box>
                    <Box mt={5} display="flex" flexDirection="column">
                        <Box>
                            <Typography variant="body1">Share With Friends</Typography>
                        </Box>
                        <Box mt={3}>
                        <Button
                                variant="contained"
                                className={classes.button}
                                startIcon={<RedoIcon />}
                                style={{margin: 0}}
                            >
                                Share
                        </Button>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <RequestModal open={showReqModal} handleReqModalOpen={handleReqModalOpen} />
        </Container>
    )
}
