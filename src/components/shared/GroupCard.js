import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Image from 'material-ui-image'
import lightBlue from "@material-ui/core/colors/lightBlue"

const primaryLight = lightBlue[100];

const useStyles = makeStyles((theme) => ({

    contentWrapper: {
        background: theme.palette.primary.background,
        display: 'flex',
        padding: 20,
        borderRadius: 10,
        gap: 20,
        boxShadow:'2px 2px 5px #DDD',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            gap: 10,
        },
    },
    tag: {
        fontWeight: 600, 
        background: primaryLight, 
        padding: 5, 
        display: 'inline'
    }

}))

export default function GroupCard({group}) {

    const classes = useStyles()

    return (
        <Box className={classes.contentWrapper}>
            <Box style={{width: 120, height: 120, borderRadius: 10, overflow: 'hidden'}}>
                <Image
                    src={group.imageSrc}
                    style={{objectFit: 'cover'}}
                />
            </Box>
            <Box>
                <Box>
                    <Box mb={2}><Typography variant="h6" style={{fontWeight: 600}}>{group.title}</Typography></Box>
                </Box>
                <Box>
                    <Box>
                        <Typography>Tags:</Typography>
                    </Box>
                    <Box display="flex">
                        <Box>
                            {
                                group.tags ? group.tags.map( tag => (
                                    <Box mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>{tag}</Typography></Box>
                                )) : null
                            }
                        </Box>
                        <Box ml={2}>
                            {
                                group.tags ? group.tags.map( tag => (
                                    <Box mt={1} display="flex" alignItems="center" ><Typography variant="body2" color="primary" className={classes.tag}>{tag}</Typography></Box>
                                )) : null
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
