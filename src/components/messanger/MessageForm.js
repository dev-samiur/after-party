import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({

    contentWrapper: {
        maxWidth: 960,
        width: '100%',
        background: theme.palette.primary.background,
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0px',
        padding: 20,
        borderRadius: 10,
        gap: 20,
        boxShadow:'2px 2px 5px #DDD',
        [theme.breakpoints.down('sm')]: {
            padding: 10,
            margin: "0px 0px 20px 0px"
        },

    },
    btn: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}))

export default function MessageForm() {

    const classes = useStyles()

    return (
        <div>
            <Box className={classes.contentWrapper}>

                <Box>
                    <Typography variant="h6">Message</Typography>
                </Box>

                <Box>
                    <TextareaAutosize rowsMin={10} style={{width: '100%', padding: 5, fontSize: 14, borderColor: '#CCC'}} />
                </Box>

                <Box display="flex" justifyContent="flex-end">
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowForwardIcon />}
                        className={classes.btn}
                        size="large"
                    >
                        Send
                    </Button>
                </Box>

            </Box>
        </div>
    )
}
