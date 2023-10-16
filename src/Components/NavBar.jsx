import {Link,useNavigate} from 'react-router-dom';
import logo from '../../public/logo.png'
const NavBar = ({login,setLogin,setUser}) => {
  const navigate = useNavigate()
  const handleLogOff = ()=>{
    setLogin(false)
    setUser({})
    navigate('/')
  }

  return (
    
<nav>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
    <p className="flex items-center">
        <img src={logo} className="h-20 mr-3 hover:animate-spin transition" alt="Todo Logo" />
        <Link to={'/'} className="self-center text-3xl font-semibold whitespace-nowrap text-darkBrown">To Do Manager</Link>
    </p>
    <div className="w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="text-xl text-darkBrown tracking-wider flex flex-col font-bold mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent ">
        <li className='border-b-2 border-green'>
          <Link to={'/'} className=" block py-2 pl-3 pr-4 hover:animate-pulse hover:scale-125 hover:text-brown transition md:bg-transparent  md:p-0 font-bold ">Home</Link>
        </li> 
        {!login &&(
          <>
            <li>
              <Link to={'/login'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:animate-pulse hover:scale-125 transition">Login</Link>
            </li>
            <li>
              <Link to={'/register'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:animate-pulse hover:scale-125 transition">Register</Link>
            </li>
          </>
        )}
        {login && (
          <>
            <li>
              <Link to={'/todo'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:animate-pulse hover:scale-125 transition">ToDo</Link>
            </li>
            <li onClick={handleLogOff} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 hover:animate-pulse hover:scale-125 transition cursor-pointer">Cerrar Sesion</li>
          </>
        )}
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar



