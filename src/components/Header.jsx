import Logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} className="logo" alt="Logo" />
      <a href="/">Home</a>
    </div>
  )
}

export default Header
