import './Navbar.scss'

const Navbar = ( { buttons } ) => {
    
  return (
    <nav className='navbar'>
      { buttons }
    </nav>
  )

}

export default Navbar;
