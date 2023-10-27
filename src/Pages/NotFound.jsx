import notFound from "../../public/404.svg"
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const handleNotFound = ()=>{
        navigate('/')
    }
  return (
    <div className="flex h-4/5 justify-around mt-10">
            <div className="w-1/3 flex flex-col justify-center">
                <div className="w-max">                    
                    <h1 className="font-bold text-2xl mb-7">
                       Parece que encotraste la puerta a la gran nada
                    </h1>
                    <p className="my-4">Perdon por eso! Visita nuestra homepage para ir a donde necesitas.</p>
                    <button onClick={handleNotFound} className="my-2 border rounded-md py-4 font-bold uppercase px-8 text-center  text-green hover:bg-green hover:text-white transition">Vamos !</button>
                </div>
            </div>
            <div className="w-1/3 inline-block">
                <img src={notFound} className=""/>
            </div>
    </div>
  )
}

export default NotFound