import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SocialList from '@/components/Social/ListSocial';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationInfo from '@/components/Location/Location';
import Logo from '@/components/Logo/Logo';
import DataInfo from '@/components/Location/DataInfo';
import TimeInfo from '@/components/Location/TimeInfo';
import { InfoPage } from '@/constant/index';

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 20
        }
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5,
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    text: {
        color: theme.palette.primary.main,
        margin: 'auto',
        width: '100%',
        textAlign:'center',
        padding: 5
    },
    marca: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'white',
        fontSize: 10,
        '&:hover': {
            // color: theme.palette.secundary.main
        }
    },
    icon: {
        fontSize: 10,
        marginRight: 5
    }
}));
type Props = {
    className: any
}
const Footer = ({ className }: Props) => {
    const styles = useStyles();
    return (
      <div className={className}>
          <Grid 
             container 
             className={styles.container}
             >
              <Grid 
                item 
                container
                xs={12} 
                md={3}
                justifyContent="center"
                alignItems="center"
              >
                <Logo />
                <TimeInfo />
              </Grid>
              <Grid item xs={12} md={6}>
                <LocationInfo />
                <DataInfo />
              </Grid>
              <Grid 
                item 
                container
                xs={12} 
                md={3}
                justifyContent="center"
                alignItems="center"
              >
                <SocialList />
              </Grid>
          </Grid>
          <div className={styles.root}>
            <p className={styles.text}> © 2021, {InfoPage.name} | Todos los derechos reservados</p>
            <a className={styles.marca} href='https://diegofly91.github.io/diegolibreros/' target='_blank'>
                <GitHubIcon className={styles.icon} />
                DiegoFLi
            </a>
          </div>  
      </div> 
    )
  }

  export default Footer;