import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import { MediumHome } from '@/constant/index';

const useStyles = makeStyles((theme:Theme) => createStyles({
  container:{
   marginBottom: 20
  }
}));  

export const Medium = () => {
  const styles = useStyles();
  return (  <Grid 
              container
              className={styles.container}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
                <Grid item md={12}>
                    <Typography 
                      color="textPrimary" 
                      align="center"
                    >
                         ¿Qué servicios puedes encontrar?
                    </Typography>  
                </Grid>
                <Grid item md={12} >
                    <Typography 
                      paragraph 
                      color="textPrimary" 
                      align="center" 
                    >                    
                        Ponemos a tu disposición servicios de alta calidad, oportunos y accesibles para todos aquellos usuarios que requieren atención en: 
                    </Typography>  
                </Grid>
                <Grid 
                  item
                  container
                  spacing={4}
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                >  
                    {MediumHome.map((item, index)=>{
                      return <Grid item md={2} sm={3} xs={4} key={index}>
                                  <Image  
                                    alt="Picture of the author"
                                    layout="responsive"
                                    placeholder="blur"
                                    src={item.image}
                                  />
                                  <Typography 
                                      paragraph 
                                      color="textPrimary" 
                                      align="center" 
                                  >
                                    {item.name}
                                  </Typography>
                              </Grid>;
                    })}
                </Grid>
          </Grid>
  )
};

