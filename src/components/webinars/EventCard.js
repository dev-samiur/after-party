import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Image from 'material-ui-image'
import lightBlue from "@material-ui/core/colors/lightBlue"
import TextTruncate from 'react-text-truncate'

const primaryLight = lightBlue[100];

const useStyles = makeStyles((theme) => ({

    contentWrapper: {
        maxWidth: 600,
        width: '100%',
        background: theme.palette.primary.background,
        display: 'flex',
        margin: '20px 0px',
        padding: 20,
        borderRadius: 10,
        gap: 20,
        boxShadow:'2px 2px 5px #DDD',
    },
    content: {
        display: 'flex',
        gap: 10,
        marginBottom: 5,
    },
    title: {
        width: 'auto',
        color: '#817D7D',
        marginRight: 5,
    },
    img: {
        marginRight: 5,
    }


}))


export default function EventCard({event}) {

    const classes = useStyles()
    const matches = useMediaQuery('(max-width:960px)')
    const matchesSmall = useMediaQuery('(max-width:400px)')

    return (
        <Box className={classes.contentWrapper}>
        <Box alignSelf="flex-start" className={classes.img}>
            <Image
                src={event.imageSrc}
                style={{objectFit: 'cover', width: 125, height: 125}}
            />
        </Box>
        <Box width="100%">
            <Box mb={matches ? '10px' : '0px'}>
                <Typography variant={ matchesSmall ? 'body2' : 'body1'} style={{fontWeight: 600}}>
                    <TextTruncate
                            line={1}
                            element="div"
                            truncateText="…"
                            text={event.title}
                    />
                </Typography>
            </Box>

            <Box className={classes.content}>
                <Box className={classes.title}><Typography variant="body2">By:</Typography></Box>
                <Box width="100%">
                    <Typography variant="body2">
                        <TextTruncate
                                line={1}
                                element="div"
                                truncateText="…"
                                text={event.by}
                        />
                    </Typography>
                </Box>
            </Box>

            <Box className={classes.content}>
                <Box className={classes.title}><Typography variant="body2">Keynote:</Typography></Box>
                <Box width="100%">
                    <Typography variant="body2">
                        <TextTruncate
                                line={1}
                                element="div"
                                truncateText="…"
                                text={event.keynote}
                        />
                    </Typography>
                </Box>
            </Box>

            <Box className={classes.content}>
                <Box className={classes.title}><Typography variant="body2">Time:</Typography></Box>
                <Box width="100%">
                    <Typography variant="body2">
                        <TextTruncate
                                line={1}
                                element="div"
                                truncateText="…"
                                text={event.time}
                        />
                    </Typography>
                </Box>
            </Box>

            <Box className={classes.content}>
                <Box className={classes.title}><Typography variant="body2">Tags:</Typography></Box>
                <Box width="100%">
                    <Typography color="primary" variant="body2" style={{fontWeight: 600, background: primaryLight, padding: 2, display: 'inline'}}>
                        {event.tags}
                    </Typography>
                </Box>
            </Box>  
        </Box>
    </Box>
    )
}
