import React from 'react';
import { IconButton } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

type Props = {
    className?: any,
    title?: string,
    color?:string, 
    children?:any 
}

const path:string = 'https://api.whatsapp.com/send?l=en&phone=5491158560168&text=';

const WhatsApp = ({className, title = 'Hola Neumáticos', color = 'inherit', children}: Props) => {
    return  <IconButton 
               aria-label="send WhatsApp info"
               className={className}
               onClick={()=>{
                window.open(path+title, '_blank')
               }}
            >
                {children ? children : <WhatsAppIcon style={{color}} />}
            </IconButton>
}

export default WhatsApp;