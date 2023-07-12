import Navbar from '@/componets/Navbar/Navbar'
import Button1 from '@/componets/Buttons/Button1'

import Index  from '@/componets/TextContentCV/Index'

import Sections from './info'

const CV = () => {

  const Buttons = [
    { text: 'About', route: 'About', styles: 'selected' },
    { text: 'Projects', route: 'Projects' },
    { text: 'Learn', route: 'Learn' },
    { text: 'Login', route: 'Login', styles: 'right' }
  ];

  return(
    <>
      
      <Navbar buttons={
        Buttons.map((button, index) => (
          <Button1 
            text={button.text} 
            route={button.route} 
            styles={button.styles} 
            key={index}
          />
        ))
      }/>

      <Index Sections={Sections}/>

    </>
  )
}

export default CV