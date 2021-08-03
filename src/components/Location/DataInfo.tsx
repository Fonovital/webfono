import { Typography, Grid, IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import { InfoPage } from '@/constant/index';

const useStyles = makeStyles((theme:Theme) => createStyles({
    mail:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 600
   },
}))

const DataInfo = () => {
    const styles = useStyles()
    return <Grid 
            container 
            direction="column"
            justifyContent="center"
            alignItems="center"
           >
                 <Typography component="p" align="center" className={styles.mail}>
                    <MailIcon style={{ color: '#FFFFFF', marginRight: 10 }} />
                    contacto.fonovital@gmail.coms
                </Typography>
                <IconButton 
                    aria-label="send WhatsApp info"
                    onClick={()=>{
                        window.open("https://api.whatsapp.com/send?l=en&phone=573123571693", '_blank')
                    }}
                    className={styles.mail}
                >
                    <PhoneIcon style={{ color: '#FFFFFF', marginRight: 10 }} />
                     {InfoPage.phone}
                </IconButton>
           </Grid>;
}

export default DataInfo;