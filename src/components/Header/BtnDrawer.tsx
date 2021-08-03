import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';
import MobileDrawer from '@/components/Header/drawer';

const useStyles = makeStyles((theme:Theme) => createStyles({
    icon: {
        position: 'relative',
        padding: 5,
        margin: 5,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        width: 20,
        heigth: 12,
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
    },
    viewMax:{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',  
        [theme.breakpoints.down('sm')]: {
            flexGrow:2,
            justifyContent: 'flex-end'
        },
    }
}));

const BtnDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return <div className={classes.viewMax}>
                <Link
                    className={classes.icon} 
                    onClick={open ? handleDrawerClose : handleDrawerOpen} 
                    key={'menu'}
                >
                        <MenuIcon color="inherit" />
                </Link>
                <MobileDrawer 
                    handleDrawerClose={handleDrawerClose} 
                    open={open}
                />
            </div>
};

export default BtnDrawer;
