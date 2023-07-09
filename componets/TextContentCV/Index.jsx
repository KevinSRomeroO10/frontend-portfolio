import './Index.scss';

import TextContent1 from './TextContent1';

import TextContent2 from './TextContent2';
import Section from './Section';

const Index = ( {Sections} ) => {
  return (
    <section className='align'>

      <TextContent1/>

      <TextContent2 section={ 
        Sections.map((section, index) => (
          <Section 
            title={section.title} 
            text={section.text}
            key={index}
          /> 
        ))
      }/>

    </section>
  )
} 

export default Index
