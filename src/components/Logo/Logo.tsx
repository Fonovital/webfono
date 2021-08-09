import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import Image from 'next/image'
import { InfoPage }  from '@/constant/index';

const useStyles = makeStyles((theme:Theme) => createStyles({
    container:{
        margin: "10px"
    },
    img: {
        width: 90,
        height: 30,
        '&:hover':{
            transform: 'scale(1.2)',
            transition: 'easy'
        }
    }
}))

type Props = {
    type?: 'normal' | 'white', 
    className?: any
}

const Logo = ({type = 'normal',className = {}}:Props) => {
    const styles = useStyles();
    return  <Link key='home' href='/' >
                <a className={`${className} ${styles.container}`}>
                    <Image 
                        src={
                             (type == 'normal')
                               ?InfoPage.logo
                               :(InfoPage.logoWhite)
                                 ?InfoPage.logoWhite
                                 :InfoPage.logo
                            } 
                        width={90} 
                        height={30} 
                        placeholder="blur"
                        alt="Fonovital villavicencio"  
                        className={styles.img}
                    />
                </a>
            </Link>
}    

export default Logo;
