import React from 'react';
import { ListSocial } from '@/constant/social';
import { IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => createStyles({
    containerIcon: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            maxWidth: 200,
            marginTop: 15,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
        padding: 5,
        margin: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        width: 20,
        heigth: 12,
        position: 'relative',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&:before':{
            background: 'inherit',
            content: '""',
            height: '100%',
            position: 'absolute',
            transform: 'rotate(-60deg)',
            transformOrigin: '50% 50%',
            width: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left:0,
            zIndex: -1
        },
        '&:after':{
            background: 'inherit',
            content: '""',
            height: '100%',
            position: 'absolute',
            transform: 'rotate(60deg)',
            transformOrigin: '50% 50%',
            width: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left:0,
            zIndex: -1
        }
    }
}))

const SocialList = () => {
    const classes = useStyles();
    return  <div className={classes.containerIcon}>
                {ListSocial.map((item, index)=>{
                    return  <IconButton 
                                aria-label="send WhatsApp info"
                                onClick={()=>{
                                    window.open(item.path, '_blank')
                                }}
                                key={index}
                                className={classes.icon} 
                            >
                               {item.icon}
                            </IconButton>
                })}
            </div>
}

export default SocialList;