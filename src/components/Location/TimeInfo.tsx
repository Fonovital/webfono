import TimerIcon from '@material-ui/icons/Timer';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => createStyles({
    container: {
        marginTop:15,
        marginBottom:15,
        [theme.breakpoints.down('xs')]: {
            marginTop:25,
            marginBottom:25,
        }
    },
    title:{
        display:'flex'
    }
}))

const TimeInfo = () => {
    const styles = useStyles();
    return <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={styles.container}
           >
                <Typography className={styles.title}>
                    <TimerIcon color="secondary" fontSize="medium" />
                    Nuestro Horario
                </Typography>
                <Typography align="center">
                    Lunes a Viernes 09:00 - 20:00  <br />
                    Sábado 09:30 - 18:00.
                </Typography>
               
           </Grid>;
}

export default TimeInfo;