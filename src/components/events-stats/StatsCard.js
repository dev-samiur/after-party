import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import lightBlue from '@material-ui/core/colors/lightBlue'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import SmsIcon from '@material-ui/icons/Sms'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'

const primaryLight = lightBlue[100]

export default function StatsCard({stat}) {
    return (
        <Box width="100%" maxWidth="400px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={3} style={{background: '#FFF', borderRadius: 5}}>
            <Box mb={2}>
                <Box width="80px" height="80px" borderRadius="50%" style={{background: primaryLight}} display="flex" justifyContent="center" alignItems="center">
                    {
                        stat.icon === 'TouchAppIcon' ? 
                        (
                            <TouchAppIcon color="primary" style={{margin: 0, padding: 0, width: 40, height: 40}} />
                        ) : ( stat.icon === 'RecentActorsIcon' ?
                            (
                                <RecentActorsIcon color="primary" style={{margin: 0, padding: 0, width: 40, height: 40}} />
                            ) : ( stat.icon === 'SmsIcon' ? 
                                (
                                    <SmsIcon color="primary" style={{margin: 0, padding: 0, width: 40, height: 40}} />
                                ) : ( stat.icon === 'PeopleAltIcon' ?
                                    (
                                        <PeopleAltIcon color="primary" style={{margin: 0, padding: 0, width: 40, height: 40}} />
                                    ) : null
                                )
                            )
                        
                        )
                    }
                </Box>
            </Box>
            <Box mt={2}><Typography variant="h4" style={{fontWeight: 600}}>{stat.title}</Typography></Box>
            <Box mt={2}><Typography variant="h6">{stat.description}</Typography></Box>
        </Box>
    )
}
