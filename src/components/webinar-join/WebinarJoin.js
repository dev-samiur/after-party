import React, { useState } from 'react'
import Header from '../shared/Header'
import WebinarJoinForm from './WebinarJoinForm'
import Box from '@material-ui/core/Box'

export function WebinarJoin() {

    const [headerContent, setHeaderContent]= useState({
        main: 'Webinar: "Impact of Technology Stocks on the Market"',
        minorDesc: {
            title: 'Hosted By: ',
            desc: 'Tech Club'
        },
        footer: 'Connect with others attended the webinar'
    })

    return (
        <Box mb={5}>
            <Header content={headerContent} />
            <WebinarJoinForm />
        </Box>
    )
}
