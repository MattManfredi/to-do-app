/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const Home = ({login,userName,userLastName}) => {
  const navigate = useNavigate()
  const handleHome=()=>{
    login ? navigate('/todo') : navigate('/register')
  }

  return (
    <div className=" bg-welcome bg-contain bg-center bg-white/30 mt-40 w-2/3 mx-auto text-center px-7 py-10 rounded-2xl  shadow-[0_0_56px_23px_rgba(0,0,0,0.83)] shadow-darkGreen">
      {!login ? 
        <>
          <h1 className="text-5xl mb-10 font-bold backdrop-blur-xl bg-white/30 rounded-md w-fit m-auto p-2">¡Bienvenido a To Do Manager!</h1>
          <p className="text-xl subpixel-antialiased leading-loose backdrop-blur-xl bg-white/30 rounded-md"> En nuestro espacio digital organizado, te ofrecemos una manera simple y efectiva de llevar un registro de tus tareas diarias. Ya sea que estés planeando tu día, haciendo una lista de compras o simplemente manteniendo un seguimiento de tus proyectos, nuestra aplicación está diseñada para simplificar tu vida. ¡Comienza a anotar tus tareas y da un paso hacia una rutina más organizada y sin estrés!</p>
        </>
        :
        <>
          <h1 className="text-5xl mb-10 font-bold backdrop-blur-xl bg-white/30 rounded-md w-fit m-auto p-2">¡Bienvenido/a {userName} {userLastName}</h1>
          <p className="text-xl subpixel-antialiased leading-loose backdrop-blur-xl bg-white/30 rounded-md">Comienza a optimizar la gestión de tus tareas mediante nuestra aplicación de gestión de tareas.</p>
        </>
      }
      
      <button onClick={handleHome} className=" text-white uppercase inline-block mt-20 font-bold text-2xl py-2 px-4 rounded-md backdrop-blur-md bg-green/50  hover:bg-green hover:scale-110 transition">Comenzar</button>
    </div>

  )
}

export default Home