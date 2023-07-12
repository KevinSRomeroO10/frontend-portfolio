import './Button2.scss'

const Button2 = ( {text, preText} ) => {
  return(
    <div className='conection'>
      <br/>
      <p className='preText'>
        {preText}
      </p>
      <p className='button2'>
        {text}
      </p>
    </div>
  )
}

export default Button2;
