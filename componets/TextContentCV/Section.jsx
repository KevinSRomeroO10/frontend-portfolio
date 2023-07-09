import './Section.scss'

const Section = ( { title, text } ) => {
    
  return (
    <section className='section'>
      <h2>{ title }</h2>
      
      <br/>
      <hr/>
      <br/>

      <p>{ text }</p>
    </section>
  )

}

export default Section;