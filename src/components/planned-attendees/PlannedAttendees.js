import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Header from '../shared/Header'
import AttendeeCard from '../shared/AttendeeCard'

const useStyles = makeStyles((theme) => ({

}))

export function PlannedAttendees() {

    const [headerContent, setHeaderContent]= useState({
        header: 'Upcoming Webinar',
        main: 'Webinar: "Impact of Technology Stocks on the Market"',
    })

    const [attendeeDetails, setAttendeeDetails]= useState([
        {
            imageSrc:'https://images.unsplash.com/photo-1604425021923-e09f27520681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            name: 'John Wayne',
            organization: 'Kellogg School of Management',
            quickBio: 'Post-doc researching markets',
            whyJoinWebinar: 'Listen to keynote, Professional Marketing',
            interestedToConnect: 'Career Development, Connect with others Development',
        },
        {
            imageSrc:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            name: 'Lilly Z.',
            organization: 'Bank of America',
            quickBio: 'Equity research VP focused on tech',
            whyJoinWebinar: 'Share Insights',
            interestedToConnect: 'Connect with experts, Personal Networking',
        },
        {
            imageSrc:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            name: 'Jay Zed',
            organization: 'Goldman Sachs',
            quickBio: 'Investment Banking VP',
            whyJoinWebinar: 'Listen to keynote, Professional Networking',
            interestedToConnect: 'Connect with experts',
        }
    ])

    return (
        <Container style={{marginBottom: 50}}>
            <Header content={headerContent} />
            <Box my={5}><Typography variant="h5">Planned Attendees (4 people)</Typography></Box>
            {
               attendeeDetails ? attendeeDetails.map( (attendee, key) => 
                <AttendeeCard key={key} attendee={attendee} showConnectBtn={false}/>
               ) : null
            }
        </Container>
    )
}
