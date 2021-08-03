import React from 'react';
import Link from 'next/link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { pagesPath } from '@/constant/pagesPath';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme:Theme) => createStyles({
      containerText: {
        flexGrow: 1,  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
      },
      text: {
          fontSize: 14,
          position: 'relative',
          fontWeight: 600,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight:20,
          borderRadius: 10,
          color: theme.palette.text.secondary,
          margin: 10,
          '&:hover': {
            boxShadow:'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
            background: `${theme.palette.primary.main}20`,
            color: theme.palette.secondary.main
          },
          '&:focus': {
            color: theme.palette.primary.main
          }
      },
      textYellow: {
        color: theme.palette.secondary.main
      },
}))

const ListPath = () => {
    const classes = useStyles();
    const router = useRouter()
    return<div className={classes.containerText}>
                {pagesPath.map((item, index) => {
                return <Link 
                          key={index} 
                          href={item.path} >
                            <a className={(router.pathname === item.path) ? `${classes.textYellow} ${classes.text}`: classes.text}>
                                {item.title}
                            </a>
                        </Link>
                })}
          </div>
}

export default ListPath;