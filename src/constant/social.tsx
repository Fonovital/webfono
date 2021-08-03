
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';

export const ListSocial = [
    {
        title: 'Facebook',
        icon: <FacebookIcon style={{ color: '#FFFFFF' }} />,
        path: 'https://www.facebook.com/ngneumaticosguillermo',
    },
    {
        title: 'Instagram',
        icon: <InstagramIcon style={{ color: '#FFFFFF' }} />,
        path: 'https://www.instagram.com/neumaticosguillermo/',
    },
    // {
        // title: 'WhatsApp',
        // icon: <WhatsAppIcon style={{ color: '#FFFFFF' }} />,
        // path: 'https://api.whatsapp.com/send?l=en&phone=5491158560168&text=hola%20mundo&photos=https://www.ingelmec.com.co/img/ingelmec.com.co.png',
        // path: 'https://web.whatsapp.com/send?l=en&phone=5491158560168?text=hola%20mundo',  
        // path: 'https://web.whatsapp.com/5491158560168?text=Quisiera%20consultar%20sobre%20la%20oferta%20de%20departamento'
    // },
    {
        title: 'Email',
        icon: <MailIcon style={{ color: '#FFFFFF' }} />,
        path: 'mailto:ngneumaticosguillermo@gmail.com',
    }
];