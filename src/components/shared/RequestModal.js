import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import { Box } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    dialogContent: {
        padding: '10px 10px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 10px',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}))

export default function ResponsiveDialog(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
    props.handleReqModalOpen(false)
  };

  useEffect( () => {
    setOpen(props.open)
  }, [props])

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {
            props.attendeeName ? <DialogTitle id="responsive-dialog-title">{`Why are you interested to connect with ${props.attendeeName}?`}</DialogTitle> :
                <DialogTitle id="responsive-dialog-title">Why are you interested to join this webinar?</DialogTitle>
        }
        <DialogContent>
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
                label="Ask Specific Questions"
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

            <Box my={3}>
                    
                <TextField 
                    label="Add a note...(Optional)" 
                    variant="outlined" 
                    multiline 
                    rows={5}
                    style={{width: '100%'}}
                />

            </Box>

            <Box mb={5}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    autoFocus
                    startIcon={<ArrowForwardIcon />}
                    onClick={handleClose}
                    style={{fontWeight: 600,}}

                >
                    Submit Request
                </Button>
                <Button className={classes.button} autoFocus onClick={handleClose} variant="contained" style={{fontWeight: 600, marginLeft: 15, }}>
                    Cancel
                </Button>
            </Box>
          
        </DialogContent>
        {/* <DialogActions style={{marginBottom: 20, justifyContent: 'flex-start'}}>
            <Button
                variant="contained"
                color="primary"
                autoFocus
                startIcon={<ArrowForwardIcon />}
                onClick={handleClose}
                style={{fontWeight: 600}}
            >
                Submit Request
            </Button>
            <Button autoFocus onClick={handleClose} color="primary" variant="contained" style={{fontWeight: 600}}>
                Cancel
            </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
