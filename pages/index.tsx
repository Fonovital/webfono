
import { Top, Medium, Areas } from '@/section/Home/index'
import { Container } from "@material-ui/core";

type Props = {
  className: any
}

export default function Home({className}:Props) {
  return (
    <Container className={className}  maxWidth="lg">
          <Top />      
          <Medium />    
          <Areas />
    </Container> 
  )
}
