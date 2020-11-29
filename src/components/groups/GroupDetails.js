import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Image from 'material-ui-image'
import lightBlue from "@material-ui/core/colors/lightBlue"
import AddCircleIcon from '@material-ui/icons/AddCircle'
import GroupEventCard from './GroupEventCard'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import Header from '../shared/Header'
import AddAdminModal from './AddAdminModal'

const primaryLight = lightBlue[100]

const useStyles = makeStyles((theme) => ({

    contentWrapper: {
        background: theme.palette.primary.background,
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        borderRadius: 10,
        gap: 10,
        boxShadow:'2px 2px 5px #DDD',
    },
    tag: {
        fontWeight: 600, 
        background: primaryLight, 
        padding: 5, 
        display: 'inline'
    },
    avatarSize: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    }
}))

export function GroupDetails({isAdmin=true}) {

    const classes = useStyles()
    const matches = useMediaQuery('(max-width:960px)')
    const matchesXs = useMediaQuery('(max-width:600px)')

    const [headerContent, setHeaderContent]= useState({
        main: 'Webinar: "Impact of Technology Stocks on the Market"',
        footer: 'Hosted by: NY Tech Club',
    })

    const [showAddAdminModal, setShowAddAdminModal]=useState(false)

    const handleAddAdminModal= (e) => {
        setShowAddAdminModal(e)
    }

    return (
        <Container style={{marginBottom: 50}}>

            {
                !isAdmin ?
                (
                    <Header content={headerContent} />
                ) : null
            }

            <Box my={5} display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h5">{ isAdmin ? 'Group Admin' : 'Group' }</Typography>
                </Box>
                {
                    isAdmin ? 
                        (
                            <Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Edit
                                </Button>
                            </Box>
                        ) : null
                }
            </Box>

            <Box className={classes.contentWrapper}>

                <Box style={{maxHeight: 400, overflow: 'hidden', display: 'flex', alignItems: 'center', borderRadius: 10}}>
                    <Image
                        src="https://images.unsplash.com/photo-1606317687828-aebe0a708bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        style={{objectFit: 'cover', width: '100%', height: '100%',   }}
                    />
                </Box>

                <Box mt={1} py={1} borderBottom="1px solid #ccc">
                    <Typography variant="h6" style={{fontWeight: 600}}>Discussion about Federal Reserve</Typography>
                </Box>

                <Box mt={2} pb={2} display="flex" flexDirection="column" borderBottom="1px solid #ccc">
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography variant="body1" style={{fontWeight: 600}}>About this Group</Typography>
                        </Box>
                        <Box>
                            {
                                isAdmin ? 
                                    (
                                        <Box>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                            >
                                                Edit
                                            </Button>
                                        </Box>
                                    ) : null
                            }

                        </Box>
                    </Box>
                    <Box mt={2}>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>
                </Box>

                <Box mt={2} pb={2} display="flex" flexDirection="column" borderBottom="1px solid #ccc">
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography variant="body1" style={{fontWeight: 500}}>Tags</Typography>
                        </Box>
                        <Box>
                            {
                                isAdmin ? 
                                    (
                                        <Box>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                            >
                                                Edit
                                            </Button>
                                        </Box>
                                    ) : null
                            }

                        </Box>
                    </Box>
                    <Box mt={2} display="flex" flexWrap="wrap">
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                        <Box ml={1} mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>Tags</Typography></Box>
                    </Box>
                </Box>
                
                <Box mt={2} pb={2} display="flex" flexDirection="column">
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography variant="body1" style={{fontWeight: 600}}>Upcoming Events</Typography>
                        </Box>
                        <Box style={{cursor: 'pointer'}}>
                            <Typography variant="body2" style={{color: '#212121'}}>View All</Typography>
                        </Box>
                    </Box>
                    <Box mt={2} display="flex" justifyContent="flex-end">
                            {
                                isAdmin ? 
                                    (
                                        <Box>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                startIcon={<AddCircleIcon />}
                                            >
                                                Add an event
                                            </Button>
                                        </Box>
                                    ) : null
                            }

                    </Box>
                    <Box mt={3}>
                        <Grid container spacing={3} justify={matchesXs ? 'center' : 'start'}>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box mt={2} pb={2} display="flex" flexDirection="column">
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography variant="body1" style={{fontWeight: 600}}>Past Events</Typography>
                        </Box>
                        <Box style={{cursor: 'pointer'}}>
                            <Typography variant="body2" style={{color: '#212121'}}>View All</Typography>
                        </Box>
                    </Box>
                    <Box mt={3}>
                        <Grid container spacing={3} justify={matchesXs ? 'center' : 'start'}>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                            <Grid item md={3}><GroupEventCard isAdmin={isAdmin}/></Grid>
                        </Grid>
                    </Box>
                </Box>

                {
                    isAdmin ? 
                    (
                        <Box mt={2} display="flex" flexDirection="column">
                            <Box>
                                <Typography variant="body1" style={{fontWeight: 600}}>Admins</Typography>
                            </Box>
                            <Box my={2} display="flex" flexDirection={matches ? 'column' : 'row'} justifyContent="space-between">
                                <Box display="flex" flexGrow="3" flexWrap="wrap" order={matches ? 2 : 1}>
                                    <Box mt={1} ml={1}  display="flex" flexDirection="column" alignItems="center">
                                        <Avatar className={classes.avatarSize} alt="Remy Sharp" src="https://images.unsplash.com/photo-1604425021923-e09f27520681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                                        <Typography variant="caption">Remy Sharp</Typography>
                                    </Box>
                                    <Box mt={1} ml={1}  display="flex" flexDirection="column" alignItems="center">
                                        <Avatar className={classes.avatarSize} alt="Remy Sharp" src="https://images.unsplash.com/photo-1604425021923-e09f27520681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                                        <Typography variant="caption">Remy Sharp</Typography>
                                    </Box>
                                    <Box mt={1} ml={1}  display="flex" flexDirection="column" alignItems="center">
                                        <Avatar className={classes.avatarSize} alt="Remy Sharp" src="https://images.unsplash.com/photo-1604425021923-e09f27520681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                                        <Typography variant="caption">Remy Sharp</Typography>
                                    </Box>
                                    <Box mt={1} ml={1}  display="flex" flexDirection="column" alignItems="center">
                                        <Avatar className={classes.avatarSize} alt="Remy Sharp" src="https://images.unsplash.com/photo-1604425021923-e09f27520681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                                        <Typography variant="caption">Remy Sharp</Typography>
                                    </Box>
                                </Box>
                                <Box flexGrow="1" mb={matches ? 3 : 0} order={matches ? 1 : 2}>
                                    <Box display="flex" flexDirection="column" alignItems="flex-end">
                                        <Box>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.button}
                                                startIcon={<AddCircleIcon />}
                                                style={{width: 200, fontWeight: 600, margin: 0, border: '1px solid #1687F4'}}
                                                onClick={ () => handleAddAdminModal(true)}
                                            >
                                                Add Admin
                                            </Button>
                                        </Box>
                                        <Box mt={2}>
                                            <Button
                                                variant="contained"
                                                className={classes.button}
                                                startIcon={<DeleteIcon />}
                                                style={{width: 200, background: primaryLight, border: '1px solid #1687F4', color: '#1687F4', fontWeight: 600}}
                                            >
                                                Delete Admin
                                            </Button>
                                        </Box>
                                    </Box>                          
                                </Box>
                            </Box>
                        </Box>

                    ) : null
                }

            </Box>

            <AddAdminModal show={showAddAdminModal} handleAddAdminModal={handleAddAdminModal} />

        </Container>
    )
}
