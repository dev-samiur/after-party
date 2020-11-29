import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import EventCard from './EventCard'
import Categories from './Categories'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({

    contentWrapper: {
        maxWidth: 600,
        width: '100%',
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
}))

export function Webinars() {

    const classes = useStyles();
    const matches = useMediaQuery('(max-width:960px)')

    const [eventDetails, setEventDetails]= useState([
        {
            imageSrc:'https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            title: 'Discussion about Federal Reserve',
            by: 'YJPW',
            keynote: 'Adam Sandler',
            time: '7pm - 9pm EST',
            tags: 'Finance',
            today: false
        },
        {
            imageSrc:'https://images.unsplash.com/photo-1605737310757-2c893c0b4293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80',
            title: 'Jews on Wall Street',
            by: 'YJPW',
            keynote: 'Adam Sandler',
            time: '7pm - 9pm EST',
            tags: 'Jewish NYC',
            today: true,
        },
        {
            imageSrc:'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            title: 'Discussion about Federal Reserve',
            by: 'YJPW',
            keynote: 'Adam Sandler',
            time: '7pm - 9pm EST',
            tags: 'Finance',
            today: false
        },
        {
            imageSrc:'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            title: 'Jews on Wall Street',
            by: 'YJPW',
            keynote: 'Adam Sandler',
            time: '7pm - 9pm EST',
            tags: 'Jewish NYC',
            today: true,
        },
    ])

    const [categories, setCategories] = useState(['Finance', 'Jewish NYC', 'Lorem', 'Ispum'])

    return (
        <Container style={{overflow: 'hidden', paddingBottom: 50}}>
            <Box my={4} maxWidth="600px" display="flex" justifyContent="space-between">
                <Box><Typography variant="h5">Events</Typography></Box>
                {
                        matches ? (
                            <Box maxWidth="300px" justifyContent="center" display="flex">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AddCircleIcon style={{marginTop: -5}} />}
                                >
                                    <b>Add an Event</b>
                                </Button>
                            </Box>
                        ) : null
                }
            </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box>
                            <Box mb={2}><Typography variant="body1">Today</Typography></Box>
                            {
                                eventDetails ? eventDetails.map( ( event,index ) => 
                                    (
                                        event.today ? <EventCard event={event} key={index} /> : null 
                                    )
                                ) : null
                            }   
                        </Box>
                        <Box>
                            <Box mb={2}><Typography variant="body1">Tommorow</Typography></Box>
                            {
                                eventDetails ? eventDetails.map( ( event,index ) => 
                                    (
                                        !event.today ? <EventCard event={event} key={index} /> : null 
                                    )
                                ) : null
                            }   
                        </Box>
                    </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box pt={ matches ? 0 : 3} display="flex" justifyContent={matches ? 'flex-start' : 'flex-start'}>
                        <Categories categories={categories} />
                    </Box>
                    {
                        !matches ? (
                            <Box maxWidth="300px" justifyContent="center" display="flex">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AddCircleIcon style={{marginTop: -5}} />}
                                >
                                    <b>Add an Event</b>
                                </Button>
                            </Box>
                        ) : null
                    }
                </Grid>
            </Grid>
        </Container>
    )
}
