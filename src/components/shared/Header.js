import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.background,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 10px',
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 25,
        boxShadow:'2px 2px 5px #DDD',
    }
}))

export default function Header({content}) {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    return (
            
            <Box className={classes.container}>
                {
                    content.header ? 
                        <Typography variant="h6" color="primary">
                            {content.header}
                        </Typography> : null
                }

                {
                content.main ?  

                        <Typography 
                            variant={ matches ? 'h5' : 'h6'} 
                            style={{fontWeight: 600, marginTop: 5}}
                            
                        >
                            {content.main}
                        </Typography> : null
                }

                {
                    content.minorDesc ? 

                        <Typography variant="subtitle1"  style={{color: '#817D7D', marginTop: 5}}>
                            {content.minorDesc.title} <i>{content.minorDesc.desc}</i>
                        </Typography> : null

                }

                {
                    content.footer ? 

                        <Typography 
                            variant={ matches ? 'h6' : 'body1'}
                            style={{fontWeight: 600, fontStyle: 'italic', marginTop: 5}}
                        >
                            {content.footer}
                        </Typography> : null
                }
            </Box>
    )
}
