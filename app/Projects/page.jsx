import Navbar from '@/componets/Navbar/Navbar';
import Button1 from '@/componets/Buttons/Button1';

const Projects = () => {

  const Buttons = [
    { text: 'About', route: 'About' },
    { text: 'Projects', route: 'Projects', styles: 'selected'  },
    { text: 'Learn', route: 'Learn' },
    { text: 'Login', route: 'Login', styles: 'right' }
  ];

  return(

    <Navbar button={
      Buttons.map((button, index) => (
        <Button1 
          text={button.text} 
          route={button.route} 
          styles={button.styles} 
          key={index}
        />
      ))
    }/>

  )

}

export default Projects
