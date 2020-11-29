import React, { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import GroupCard from '../shared/GroupCard'

export function Search() {

    const matches = useMediaQuery('(max-width:960px)');
    const matchesXs = useMediaQuery('(max-width:600px)');

    const [groups, setGroups]= useState([
        {
            imageSrc: 'https://images.unsplash.com/photo-1606317687828-aebe0a708bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            title: 'Discussion about Federal Reserve',
            tags: ['Finance', '#Webinar']
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1606298246186-08868ab77562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            title: 'Discussion about Federal Reserve',
            tags: ['Finance', '#Webinar']
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1606290979731-4ca55029cdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            title: 'Discussion about Federal Reserve',
            tags: ['Finance', '#Webinar']
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1606317687828-aebe0a708bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            title: 'Discussion about Federal Reserve',
            tags: ['Finance', '#Webinar']
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1606298246186-08868ab77562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            title: 'Discussion about Federal Reserve',
            tags: ['Finance', '#Webinar']
        },
        {
            imageSrc: 'https://images.unsplash.com/photo-1606290979731-4ca55029cdea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            title: 'Discussion about Federal Reserve',
            tags: ['Finance', '#Webinar']
        },
    ])

    return (
        <Container style={{marginBottom: 50}}>
            <Box my={4}><Typography variant="h5">Search</Typography></Box>
            <Grid container spacing={3} justify="center">
                {
                    groups ? groups.map( group => (
                        <Grid item md={6}>
                            <GroupCard group={group}/>
                        </Grid>
                    )) : null
                }
            </Grid>
        </Container>
    )
}
