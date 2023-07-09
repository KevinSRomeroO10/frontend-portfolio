import Navbar from '@/componets/Navbar/Navbar';
import Button1 from '@/componets/Buttons/Button1';

import Index  from '@/componets/TextContentCV/Index';

const CV = () => {

  const Buttons = [
    { text: 'About', route: 'About', styles: 'selected' },
    { text: 'Projects', route: 'Projects' },
    { text: 'Learn', route: 'Learn' },
    { text: 'Login', route: 'Login', styles: 'button1Right' }
  ];

  const Sections = [
    { title:'Hola', text: `Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse blandit nostra volutpat, n
    isl curabitur mi massa mollis dapibus felis quisque pellentesque senectus. Suspendisse nisi 
    cras magna nostra cubilia purus augue vestibulum, nec fringilla vivamus turpis inceptos potenti 
    metus quis, curabitur rhoncus torquent vehicula placerat id platea. Felis dictumst id 
    sollicitudin dapibus dignissim tristique ultricies eleifend nam primis ligula, eu nisl taciti 
    est massa mus sem posuere tempus risus, convallis laoreet hendrerit augue suspendisse ultrices 
    integer condimentum vitae cum.` },
    { title:'asd', text: `Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse blandit nostra volutpat, n
    isl curabitur mi massa mollis dapibus felis quisque pellentesque senectus. Suspendisse nisi 
    cras magna nostra cubilia purus augue vestibulum, nec fringilla vivamus turpis inceptos potenti 
    metus quis, curabitur rhoncus torquent vehicula placerat id platea. Felis dictumst id 
    sollicitudin dapibus dignissim tristique ultricies eleifend nam primis ligula, eu nisl taciti 
    est massa mus sem posuere tempus risus, convallis laoreet hendrerit augue suspendisse ultrices 
    integer condimentum vitae cum.` },
    { title:'asd', text: `Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse blandit nostra volutpat, n
    isl curabitur mi massa mollis dapibus felis quisque pellentesque senectus. Suspendisse nisi 
    cras magna nostra cubilia purus augue vestibulum, nec fringilla vivamus turpis inceptos potenti 
    metus quis, curabitur rhoncus torquent vehicula placerat id platea. Felis dictumst id 
    sollicitudin dapibus dignissim tristique ultricies eleifend nam primis ligula, eu nisl taciti 
    est massa mus sem posuere tempus risus, convallis laoreet hendrerit augue suspendisse ultrices 
    integer condimentum vitae cum.` },
    { title:'fdf', text: `Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse blandit nostra volutpat, n
    isl curabitur mi massa mollis dapibus felis quisque pellentesque senectus. Suspendisse nisi 
    cras magna nostra cubilia purus augue vestibulum, nec fringilla vivamus turpis inceptos potenti 
    metus quis, curabitur rhoncus torquent vehicula placerat id platea. Felis dictumst id 
    sollicitudin dapibus dignissim tristique ultricies eleifend nam primis ligula, eu nisl taciti 
    est massa mus sem posuere tempus risus, convallis laoreet hendrerit augue suspendisse ultrices 
    integer condimentum vitae cum.` }
  ];

  return(
    <>
      
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

      <Index Sections={Sections}/>

    </>
  )
}

export default CV;