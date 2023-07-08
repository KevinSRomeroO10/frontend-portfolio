import './Button1.scss'

import { useRouter } from 'next/navigation'

const Button1 = ( {text, route} ) => {

  const router = useRouter()
    
  return (
    <h3 onClick={() => router.push(route)}>
      {text}
    </h3>
  )

}
export default Button1;