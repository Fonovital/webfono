
import { Top } from '@/section/Home/index'

type Props = {
  className: any
}

export default function Home({className}:Props) {
  return (
    <div className={className}>
          <Top />          
    </div> 
  )
}
