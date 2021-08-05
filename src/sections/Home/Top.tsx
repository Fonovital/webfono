import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import image from '@/public/placeholder700.png';

const useStyles = makeStyles((theme:Theme) => createStyles({
  container:{
    marginBottom: 20
  },
  textSecondary:{
      fontWeight: 200
  },
}));  

export const Top = () => {
  const styles = useStyles();
  return (  <Grid 
                container
                spacing={2}
                className={styles.container}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={10} sm={10} md={6}>
                    <Typography paragraph variant="h5" component="p" color="textSecondary" className={styles.textSecondary}>
                      #FonoaudiologiaParaTodos.
                    </Typography>
                    <Typography  variant="h4" color="secondary" >
                      Aquí puedes acceder <br/>
                     al servicio de <Typography variant="h4" component="span" color="primary" >FONOAUDIOLOGÍA </Typography>
                      de <Typography variant="h4" color="primary"  component="span"> MANERA AGÍL</Typography> y <Typography  component="span"  variant="h4" color="primary">SEGURA</Typography>.
                    </Typography>
                </Grid>
                <Grid item md={6} sm={10} xs={10}> 
                    <Image  
                      alt="Picture of the author"
                      layout="responsive"
                      placeholder="blur"
                      src={image} 
                    />
                </Grid>
              </Grid>
  )
};

