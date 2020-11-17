import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 10px 0px 10px',
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 15,
        textAlign: 'end',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'start'
        },
    },
    textField: {
        width: 300,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }
}))


export default function WebinarJoinForm() {

    const classes = useStyles();
    const matches = useMediaQuery('(max-width:960px)');
    const mobDevices = useMediaQuery('(max-width:600px)');

    return (
        <Container>
            <form className={classes.container}>
                <Box width={ mobDevices ? '100%' : 'auto'} display="flex" alignItems={ matches ? 'flex-start' : 'center'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }><Typography style={{fontWeight: 600}}>Name:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : 'auto'} >
                        <TextField variant="outlined"  size="small" className={classes.textField} />
                    </Box>
                </Box>
                <Box width={ mobDevices ? '100%' : 'auto'} mt={3} display="flex" alignItems={ matches ? 'flex-start' : 'center'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }  ><Typography style={{fontWeight: 600}}>Organization:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : 'auto'} >
                        <TextField variant="outlined"  size="small" className={classes.textField} />
                    </Box>
                </Box>
                <Box width={ mobDevices ? '100%' : 'auto'}  mt={3} display="flex" alignItems={ matches ? 'flex-start' : 'center'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }  ><Typography style={{fontWeight: 600}}>Quick Bio:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : 'auto'} >
                        <TextField variant="outlined"  size="small" className={classes.textField} />
                    </Box>
                </Box>

                <Box width={ mobDevices ? '100%' : 'auto'}  mt={3} display="flex" alignItems="flex-start"  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }  ><Typography style={{fontWeight: 600}}>Why Join Webinar:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : '300px'} >
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Learn More About Subject"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Listen to keynote"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Share Personal Insights"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Professinal Networking"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Personal Networking"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Personal Networking"
                        />
                        
                        <Box display="flex">
                            <FormControlLabel
                                control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                            />
                            <TextField variant="outlined"  size="small" className={classes.textField} />
                        </Box>
                    </Box>
                </Box>


                <Box width={ mobDevices ? '100%' : 'auto'}  mt={3} display="flex" alignItems="flex-start"  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 } ><Typography style={{fontWeight: 600}}>Interested to Connect:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : '300px'} >
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Business Development"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Career Development"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Connect with Experts"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Professinal Networking"
                        />
                    </Box>
                </Box>

                <Box width={ mobDevices ? '100%' : 'auto'} mt={3} display="flex" alignItems={ matches ? 'flex-start' : 'center'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 } ><Typography style={{fontWeight: 600}}>Upload Picture:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : '300px'}  display="flex">
                        <TextField variant="outlined"  size="small" className={classes.textField} />
                        <Button component="label" variant="outlined" color="primary"style={{width: 150, marginLeft: 10}}>
                            <CloudUploadIcon color="primary" style={{marginRight: 5, marginTop: -5}}/>
                            <input
                                type="file"
                                style={{ display: "none" }}
                            />
                            Upload
                        </Button>
                    </Box>
                </Box>

                <Box width={ mobDevices ? '100%' : 'auto'}  mt={3} display="flex" alignItems={ matches ? 'flex-start' : 'center'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 } ><Typography style={{fontWeight: 600}}>Email:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : 'auto'} >
                        <TextField type="email" variant="outlined"  size="small" className={classes.textField} />
                    </Box>
                </Box>
                <Box width={ mobDevices ? '100%' : 'auto'}  mt={3} display="flex" alignItems={ matches ? 'flex-start' : 'center'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 } ><Typography style={{fontWeight: 600}}>Password:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : 'auto'} > 
                        <TextField type="password" variant="outlined"  size="small" className={classes.textField} />
                    </Box>
                </Box>
                <Box width="100%" justifyContent="center" mt={6} mb={3} style={{ textAlign: 'center'}}>
                    <Button
                        style={{width: 150}}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<ArrowForwardIcon />}
                    >
                        Join
                    </Button>
                </Box>
            </form>
        </Container>
    )
}
