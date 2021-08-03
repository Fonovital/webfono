import React, {useEffect, useState} from 'react';
import { Container } from '@material-ui/core';
import { makeStyles,createStyles, Theme } from '@material-ui/core/styles';
import ListPath from '@/components/Header/ListPath';
import Link from 'next/link';
import useWindowDimensions from '@/hooks/useDimensions';
import BtnDrawer from '@/components/Header/BtnDrawer';
import Logo from '@/components/Logo/Logo';

const useStyles = makeStyles((theme:Theme) => createStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 7,
        paddingBottom: 7,
        color: 'white',
        position: "relative"
    },
    logo:{
        [theme.breakpoints.up('xs')]: {
            position: 'absolute',
            left: 20
        },
    }
}));
type Props = {
    className: any
}
const Header = ({ className }: Props) => {
    const styles = useStyles();
    const { width } = useWindowDimensions();
    const [ container,setContainer ] = useState(<></>);

    useEffect(()=>{
        if(width && width > 720){
            setContainer(<ListPath />);
        }else if(width && width < 720){
           setContainer(<BtnDrawer/>);
        }

    },[width])
    return (
      <div className={className}>
          <Container className={styles.container}>
            <Logo className={styles.logo}/>
            {container}
          </Container>  
      </div> 
    )
  }

  export default Header;