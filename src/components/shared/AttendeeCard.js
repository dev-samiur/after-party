import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Image from 'material-ui-image'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({

    contentWrapper: {
        background: theme.palette.primary.background,
        display: 'flex',
        margin: '20px 0px',
        padding: 20,
        borderRadius: 10,
        gap: 20,
        boxShadow:'2px 2px 5px #DDD',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: 10,
        },
    },
    content: {
        display: 'flex',
        gap: 10,
        marginBottom: 5,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: 5,
            marginBottom: 10,
        },

    },
    title: {
        width: 150,
        color: '#817D7D',
    }, 
    buttonWrapper: {
        marginTop: 20,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center'
        },

    },
    button: {
        margin: theme.spacing(1),
    },

}))

export default function AttendeeCard({attendee, showConnectBtn, handleReqModalOpen}) {

    const classes = useStyles()
    const matches = useMediaQuery('(max-width:960px)')

    return (

        <Box className={classes.contentWrapper}>
            <Box style={{width: 150, height: 150}}>
                <Image
                    src={attendee.imageSrc}
                    style={{objectFit: 'cover'}}
                />
            </Box>
            <Box>
                <Box mb={matches ? '10px' : '0px'}><Typography variant="h5" style={{fontWeight: 600}}>{attendee.name}</Typography></Box>

                <Box className={classes.content}>
                    <Box className={classes.title}><Typography variant="body1">Organization:</Typography></Box>
                    <Box><Typography variant="body1">{attendee.organization}</Typography></Box>
                </Box>

                <Box className={classes.content}>
                    <Box className={classes.title}><Typography variant="body1">Quick Bio:</Typography></Box>
                    <Box><Typography variant="body1">{attendee.quickBio}</Typography></Box>
                </Box>

                <Box className={classes.content}>
                    <Box className={classes.title}><Typography variant="body1">Why join Webinar:</Typography></Box>
                    <Box><Typography variant="body1">{attendee.whyJoinWebinar}</Typography></Box>
                </Box>

                <Box className={classes.content}>
                    <Box className={classes.title}><Typography variant="body1">Interested to Connect:</Typography></Box>
                    <Box><Typography variant="body1">{attendee.interestedToConnect}</Typography></Box>
                </Box>

                { showConnectBtn ? 
                    (
                        <Box className={classes.buttonWrapper}>
                            <Button
                                className={classes.button}
                                size="large"
                                variant="contained"
                                color="primary"
                                startIcon={<ArrowForwardIcon />}
                                onClick={() => handleReqModalOpen(true, attendee.name)}
                            >
                                Request to Connect
                            </Button>
                        </Box>
                    ) : null
                }   

            </Box>
        </Box>
    )
}
