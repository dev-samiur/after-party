import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles((theme) => ({

    contentWrapper: {
        background: theme.palette.primary.background,
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0px',
        padding: 20,
        borderRadius: 10,
        gap: 20,
        boxShadow:'2px 2px 5px #DDD',
        [theme.breakpoints.down('sm')]: {
            padding: 10,
        },
    },
    buttonWrapperBox: {
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}))

export default function PeopleCard({attendee}) {

    const classes = useStyles();

    return (
        <div>
            <Box className={classes.contentWrapper}>
                <Box display="flex" >
                    <Box style={{width: 100, height: 100}}>
                        <Image
                            src={attendee.imageSrc}
                            style={{objectFit: 'cover', width: 100, height: 100}}
                        />
                    </Box>
                    <Box ml={3}>
                    { !attendee.isRequested ?
                        (
                            <Box>
                                <Typography variant="body1" style={{fontWeight: 600, marginBottom: 5}} color="primary">
                                    {attendee.name}
                                </Typography>
                                <Typography variant="body1">
                                    From <b>{attendee.from}</b>
                                </Typography>
                                <Typography variant="body1">
                                    Interested in: <i style={{color: '#1687F4'}}>{attendee.interestedIn}</i>
                                </Typography>
                            </Box>
                        ) : 

                        (
                            <Box display="flex" width="100%">
                                <Typography variant="body1">
                                    <b style={{color: '#1687F4'}}>{attendee.name}</b> from <b>{attendee.from}</b>
                                    requested to connect with you. 
                                    {
                                       attendee.gender === 'female' ? ' She' : ' He' 
                                    } is interested in <i style={{color: '#1687F4'}}>{attendee.interestedIn}</i>
                                </Typography>
                            </Box> 
                        )
                    }

                    </Box>
                </Box>

                { attendee.isRequested ? 
                    (
                        <Box className={classes.buttonWrapperBox}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                startIcon={<ArrowForwardIcon />}
                            >
                                Accept Request
                            </Button>
                            <Button className={classes.button} variant="contained" style={{marginLeft: 15, }}>
                                Cancel
                            </Button>
                        </Box>
                    ) : null
                }
            </Box>
        </div>
    )
}
