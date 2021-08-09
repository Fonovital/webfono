import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import { AreasHome } from '@/constant/index';

const useStyles = makeStyles((theme:Theme) => createStyles({
  container:{
   marginBottom: 20
  },
  pair: {
        marginTop: 30,
        marginBottom: 30,
        padding: 10,
        height: 200,
        width: 200,
        position: 'relative',
        background: theme.palette.secondary.main,
        "&:before": {
          position: "absolute",
          content: '""',
          top: -15,
          left: 0,
          width: '100%',
          borderRight: `0px solid transparent`,
          borderTop: `15px solid transparent`,
          borderLeft: `200px solid ${theme.palette.secondary.main}`,
          borderBottom: `0px solid ${theme.palette.secondary.main}`
        },
        "&:after": {
          position: "absolute",
          content: '""',
          bottom: -15,
          left: 0,
          zIndex: 2,
          width: '100%',
          borderRight: `100% solid transparent`,
          borderTop: `0px solid ${theme.palette.secondary.main}`,
          borderLeft: `200px solid ${theme.palette.secondary.main}`,
          borderBottom: `15px solid transparent`
        },
  },
  odd:  {
        marginTop: 30,
        marginBottom: 30,
        padding: 10,
        height: 200,
        width: 200,
        position: 'relative',
        background: theme.palette.primary.main,
        "&:before": {
          position: "absolute",
          content: '""',
          top: -15,
          left: 0,
          width: '100%',
          borderRight: `200px solid ${theme.palette.primary.main}`,
          borderTop: `15px solid transparent`,
          borderLeft: `0 solid transparent`
        },
        "&:after": {
          position: "absolute",
          content: '""',
          bottom: -15,
          left: 0,
          zIndex: 2,
          width: '100%',
          borderRight: `200px solid ${theme.palette.primary.main}`,
          borderTop: `0px solid ${theme.palette.primary.main}`,
          borderLeft: `0 solid transparent`,
          borderBottom: `15px solid transparent`
        },
  },
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
              alignItems="center"
            >
                <Grid item md={12} sm={12} xs={12}>
                    <Typography 
                      color="textPrimary" 
                      align="center"
                    >
                         ¿Cuáles son las áreas de fonoaudiología?
                    </Typography>  
                </Grid>
                {AreasHome.map((item, index)=>{
                  return <Grid 
                             key={index}
                             direction="column"
                             spacing={0}
                             justifyContent="center"
                             alignItems="center"
                             className={(index%2)?styles.odd:styles.pair}
                           >
                            <Image  
                                alt="Picture of the author"
                                layout="responsive"
                                placeholder="blur"
                                src={item.image}
                            />
                            <Typography 
                                paragraph 
                                color={(index%2)?"textPrimary":"textSecondary"} 
                                align="center" 
                            >
                              {item.name}
                            </Typography>
                        </Grid>
                })}
          </Grid>
  )
};

