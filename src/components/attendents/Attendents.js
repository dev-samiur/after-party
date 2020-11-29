import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Header from '../shared/Header'
import AttendeeCard from '../shared/AttendeeCard'
import RequestModal from '../shared/RequestModal'

export function Attendents() {

    const matches = useMediaQuery('(max-width:960px)');

    const [headerContent, setHeaderContent]= useState({
        main: 'Webinar: "Impact of Technology Stocks on the Market"',
        minorDesc: {
            title: 'Hosted By: ',
            desc: 'Tech Club'
        },
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

    const [showReqModal, setShowReqModal]= useState(false)
    const [attendeeName, setAttendeeName]= useState('')

    const handleReqModalOpen = (status, attendeeName) => {
        setShowReqModal(status)
        setAttendeeName(attendeeName)
    };

    return (
        <Container style={{paddingBottom: 50}}>
            <Header content={headerContent} />
            <Box mt={3} display="flex" justifyContent={ matches ? 'center' : 'flex-start'}>
                <Typography variant="h6">Attendees on After Party (3 people)</Typography>
            </Box>
            {
               attendeeDetails ? attendeeDetails.map( (attendee, key) => 
                <AttendeeCard key={key} attendee={attendee} showConnectBtn={true} handleReqModalOpen={handleReqModalOpen}/>
               ) : null
            }

            <RequestModal open={showReqModal} handleReqModalOpen={handleReqModalOpen} attendeeName={attendeeName} />

        </Container>
    )
}
