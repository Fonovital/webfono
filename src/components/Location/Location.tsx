import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { InfoPage } from '@/constant/index';

const useStyles = makeStyles((theme:Theme) => createStyles({
    container:{
       maxWidth: 400,
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       flexWrap: 'nowrap',
       padding: '20px 10px'
    }
}))

const LocationInfo = () => {
    const styles = useStyles()
    return <Grid 
            container 
            justifyContent="center"
            alignItems="flex-start"
           >
                <LocationOnIcon color="primary"/>
                <Typography align="center">
                    {InfoPage.city?InfoPage.city:''} <br />
                    {InfoPage.country?InfoPage.country:''}.
                </Typography>   
           </Grid>;
}

export default LocationInfo;