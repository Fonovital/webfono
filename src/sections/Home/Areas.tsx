import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import lenguaje from '@/public/lenguaje.jpg';
import habla from '@/public/habla.jpg';
import audicion from '@/public/audicion.jpg';
import voz from '@/public/voz.jpg';
import deglucion from '@/public/deglucion.png';

const useStyles = makeStyles((theme:Theme) => createStyles({
  container:{
   marginBottom: 20
  }
}));  

export const Areas = () => {
  const styles = useStyles();
  return (  <Grid 
              container
              className={styles.container}
              direction="row"
              wrap="wrap"
              spacing={0}
              justifyContent="center"
              alignItems="baseline"
            >
                <Grid item md={12} sm={12}>
                    <Typography 
                      color="textPrimary" 
                      align="center"
                    >
                         ¿Cuáles son las áreas de fonoaudiología?
                    </Typography>  
                </Grid>
                <Grid item md={2} sm={3} xs={4} key={'lenguaje'}>
                    <Image  
                        alt="Picture of the author"
                        layout="responsive"
                        placeholder="blur"
                        src={lenguaje}
                    />
                    <Typography 
                        paragraph 
                        color="textPrimary" 
                        align="center" 
                    >
                      Lenguaje
                    </Typography>
                </Grid>
                <Grid item md={2} sm={3} xs={4} key={'habla'}>
                    <Image  
                        alt="Picture of the author"
                        layout="responsive"
                        placeholder="blur"
                        src={habla}
                    />
                     <Typography 
                        paragraph 
                        color="textPrimary" 
                        align="center" 
                    >
                      Habla
                    </Typography>
                </Grid>
                <Grid item md={2} sm={3} xs={4} key={'audicion'}>
                    <Image  
                        alt="Picture of the author"
                        layout="responsive"
                        placeholder="blur"
                        src={audicion}
                    />
                     <Typography 
                        paragraph 
                        color="textPrimary" 
                        align="center" 
                    >
                      Audición
                    </Typography>
                </Grid>
                <Grid item md={2} sm={3} xs={4} key={'voz'}>
                    <Image  
                        alt="Picture of the author"
                        layout="responsive"
                        placeholder="blur"
                        src={voz}
                    />
                     <Typography 
                        paragraph 
                        color="textPrimary" 
                        align="center" 
                    >
                      Voz
                    </Typography>
                </Grid>
                <Grid item md={2} sm={3}xs={4} key={'deglucion'}>
                    <Image  
                        alt="Picture of the author"
                        layout="responsive"
                        placeholder="blur"
                        src={deglucion}
                    />
                     <Typography 
                        paragraph 
                        color="textPrimary" 
                        align="center" 
                    >
                      Deglución
                    </Typography>
                </Grid>
          </Grid>
  )
};

