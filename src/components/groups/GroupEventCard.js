import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'
import Button from '@material-ui/core/Button'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import lightBlue from "@material-ui/core/colors/lightBlue"

const primaryLight = lightBlue[100];

export default function GroupEventCard({isAdmin}) {
    return (
        <Box width="200px">
            <Box width="200px" height="150px" display="flex" alignItems="center" style={{borderRadius: 10, overflow: 'hidden'}} >
                <Image
                    src="https://images.unsplash.com/photo-1606298246186-08868ab77562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    style={{objectFit: 'cover', width: 200, height: 150}}
                />
            </Box>
            <Box mt={1}>
                <Typography variant="body1" style={{fontWeight: 600}}>Discussion about Federal Reserve</Typography>
            </Box>
            <Box mt={1}>
                <Typography variant="caption">Sat oct 25,2020 Time 7pm-9pm EST</Typography>
            </Box>
            <Box mt={1} display="flex">
                <Typography variant="body2">By: </Typography>
                <Typography variant="body2" color="primary" style={{marginLeft: 5}}>Harvest Mission Chruch</Typography>
            </Box>  
            <Box mt={2} display="flex" justifyContent="center">
                {
                    isAdmin ? 
                        (
                            <Box>
                                <Button
                                    variant="contained"
                                    startIcon={<EqualizerIcon />}
                                    style={{background: primaryLight, border: '1px solid #1687F4', color: '#1687F4', fontWeight: 600}}
                                >
                                    See Stats
                                </Button>
                            </Box>
                        ) : null
                }
            </Box>       
        </Box>
    )
}
