import './login.scss'

import Form from '@/componets/Forms/Form'
import Info from '@/componets/Forms/Info'
import Inputs from '@/componets/Forms/Inputs'

import Button2 from '@/componets/Buttons/Button2'

const Login = () => {

  const InputsProps = [
    { type: 'text', name: 'username', placeholder: 'Username', nameLabel: 'Username:'  },
    { type: 'password', placeholder: 'Password', nameLabel: 'Password:'  },
    { type: 'button', name: 'login', value: 'Login'}
  ]

  const Buttons = [
    { text: 'Google', preText:'Login with: ' },
    { text: 'Facebook', preText:'Login with: ' },
    { text: 'Github', preText:'Login with: ' },
  ];
  
  return(
    <div className='login'>
      <Form
        title={'Login'}
        inputs={
        InputsProps.map((input, index) => (
          <Inputs 
            type={ input.type }
            name={ input.name }
            placeholder={ input.placeholder }
            value={ input.value }
            nameLabel={input.nameLabel}
            key={index}
          />
        ))
      }
      />
      <Info h1='News!' info='Enim class senectus scelerisque laoreet tempor libero leo, lacus ultrices nullam 
      fusce sollicitudin cras et felis, inceptos ligula quam vitae in aliquet. Congue nostra torquent blandit habitant 
      lobortis litora, curabitur pretium turpis natoque praesent leo, habitasse ut nec at eros. Justo fusce lacinia montes 
      donec nunc phasellus laoreet, sed cubilia erat magnis vehicula maecenas ad euismod, suscipit malesuada dictum dis 
      duis feugiat.' 
      buttons={ 
        Buttons.map((button, index) => (
          <Button2 
            text={button.text} 
            preText={button.preText} 
            key={index}
          />
        ))
      }/>
    </div>
  )

}

export default Login
