import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import PeopleCard from './PeopleCard'
import MessageForm from './MessageForm'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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

export function Chat() {

    const classes = useStyles()
    const matches = useMediaQuery('(max-width:960px)')

    const [attendeeDetails, setAttendeeDetails]= useState([
        {
            imageSrc:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            name: 'Lilly Z.',
            from: '"Impact of Technology Stocks on the Market"',
            interestedIn: 'Carrer Development',
            gender: 'female',
            isRequested: true
        },
        {
            imageSrc:'https://images.unsplash.com/photo-1604425021923-e09f27520681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            name: 'John Wayne',
            from: '"Impact of Technology Stocks on the Market"',
            interestedIn: 'Carrer Development',
            gender: 'male',
            isRequested: false
        },
        {
            imageSrc:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            name: 'Jay Zed',
            from: '"Impact of Technology Stocks on the Market"',
            interestedIn: 'Carrer Development',
            gender: 'male',
            isRequested: false
        },
    ])

    return (
        <Container style={{marginBottom: 50}}>

            <Box my={4}>
                <Typography variant="h5">Chats</Typography>
            </Box>
            {
                attendeeDetails ? attendeeDetails.map( attendee => 
                    (
                        attendee.isRequested ? <PeopleCard attendee={attendee} /> : null 
                    )
                ) : null
            }
            <Grid container spacing={ matches ? 0 : 3} justify="center">
                <Grid item xs={12} sm={12} md={6} >
                    {
                        attendeeDetails ? attendeeDetails.map( attendee => 
                            (
                                !attendee.isRequested ? <PeopleCard attendee={attendee} /> : null  
                            )
                        ) : null
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <MessageForm />
                </Grid>
            </Grid>
        </Container>
    )
}
