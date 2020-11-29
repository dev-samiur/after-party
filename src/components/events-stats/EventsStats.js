import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import StatsCard from './StatsCard'

export function EventsStats() {

    const [stats, setStats]= useState([
        {
           icon: 'TouchAppIcon',
           title: '150',
           description: 'People clicked linked to register' 
        },
        {
            icon: 'RecentActorsIcon',
            title: '100',
            description: 'People registered' 
        },
        {
            icon: 'SmsIcon',
            title: '25',
            description: 'Chat requests' 
        },
        {
            icon: 'PeopleAltIcon',
            title: '20',
            description: 'Chat initiated' 
        },

    ])
    return (
        <Container style={{marginBottom: 50}}>
            <Box my={4}>
                <Typography variant="h5">Event Stats</Typography>
            </Box>
            <Grid container spacing={3} style={{maxWidth: 900, margin: '0px auto'}}>
                {
                    stats.map( stat => (
                        <Grid item xs={12} sm={12} md={6} style={{justifyContent: 'center', display: 'flex'}}><StatsCard stat={stat}/></Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
