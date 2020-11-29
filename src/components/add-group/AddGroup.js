import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import lightBlue from '@material-ui/core/colors/lightBlue'

import TagsInput from 'react-tagsinput'
 
import './react-tagsinput.css'

const primaryLight = lightBlue[100]

const useStyles = makeStyles((theme) => ({

    container: {
        background: theme.palette.primary.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 10px 30px 10px',
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 20,
        textAlign: 'end',
        boxShadow:'2px 2px 5px #DDD',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'start'
        },
    },
    textField: {
        width: 300,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    tag: {
        fontWeight: 600, 
        background: primaryLight, 
        padding: 5, 
        display: 'inline'
    },
    button: {
        margin: theme.spacing(1),
    },

}))

export function AddGroup() {

    const classes = useStyles()
    const matches = useMediaQuery('(max-width:960px)')
    const mobDevices = useMediaQuery('(max-width:600px)')

    const [tags, setTags] = useState(['Finance', '#Webinar', 'Robotics'])

    const handleTagsChange= (e) => {
        setTags(e)
    }

    return (
        <Container style={{marginBottom: 50}}>

            <Box my={4}>
                <Typography variant="h5">Add Group</Typography>
            </Box>

            <form className={classes.container}>
                <Box width={ mobDevices ? '100%' : 'auto'} display="flex" alignItems={ matches ? 'flex-start' : 'center'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }><Typography style={{fontWeight: 600}}>Add Title:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : 'auto'} >
                        <TextField variant="outlined"  size="small" className={classes.textField} placeholder="Title of the group" />
                    </Box>
                </Box>
                <Box width={ mobDevices ? '100%' : 'auto'}  mt={3} display="flex" alignItems="flex-start"  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }  ><Typography style={{fontWeight: 600}}>Choose Option:</Typography></Box>
                    <Box width={ mobDevices ? '100%' : '300px'} >
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Public"
                        />
                        <FormControlLabel
                            style={{width: 300,}}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Private"
                        />
                    </Box>
                </Box>
                <Box mt={3} width={ mobDevices ? '100%' : 'auto'} display="flex" alignItems={ matches ? 'flex-start' : 'flex-start'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }><Typography style={{fontWeight: 600}}>Add Picture:</Typography></Box>
                    <Box width={mobDevices ? '100%' : 300} height="200px" style={{background: primaryLight, borderRadius: 5}}>
                        <Button component="label" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                            <AddCircleIcon style={{width: 50, height: 50, cursor: 'pointer',}} color="primary"/>
                            <input
                                type="file"
                                style={{ display: "none" }}
                            />
                        </Button>
                    </Box>
                </Box>

                <Box mt={3} width={ mobDevices ? '100%' : 'auto'} display="flex" alignItems={ matches ? 'flex-start' : 'flex-start'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }><Typography style={{fontWeight: 600}}>Add Description:</Typography></Box>
                    <Box width={mobDevices ? '100%' : 300} >
                        <TextField variant="outlined" style={{margin: 0, width: '100%'}} placeholder="Provide details of Group" multiline rows={5} />
                    </Box>
                </Box>
                <Box mt={3} width={ mobDevices ? '100%' : 'auto'} display="flex" alignItems={ matches ? 'flex-start' : 'flex-start'}  flexDirection={ matches ? 'column' : 'row'}>
                    <Box width="200px" mr={3} mb={ matches ? 2 : 0 }><Typography style={{fontWeight: 600}}>Add Tags:</Typography></Box>
                    <Box width={mobDevices ? '100%' : 300} >
                         <TagsInput value={tags} onChange={handleTagsChange} />
                    </Box>
                </Box>
                <Box width="100%" justifyContent="center" mt={3} style={{ textAlign: 'center'}}>
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<ArrowForwardIcon style={{}} />}
                    >
                        Create
                    </Button>
                </Box>
            </form>
            
        </Container>
    )
}
