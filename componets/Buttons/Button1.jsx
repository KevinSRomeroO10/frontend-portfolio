'use client'

import './Button1.scss'

import { useRouter } from 'next/navigation'

const Button1 = ( {text, route, styles} ) => {

  const router = useRouter()

  switch (styles) {
    case 'button1Right':
      return (
        <p className='button1Right' onClick={() => router.push(route)}>
          {text}
        </p>
      );
    case 'selected':
      return (
        <p className='selected' onClick={() => router.push(route)}>
          {text}
        </p>
      );
    default:
      return (
        <p className='button1' onClick={() => router.push(route)}>
          {text}
        </p>
      );
  }
  
}
export default Button1;