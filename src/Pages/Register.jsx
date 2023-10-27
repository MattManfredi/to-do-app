import Input  from "../Components/Input";
import { useForm } from "react-hook-form";
import {errorMessage} from "../Services/errorMessage";
import { useState } from "react";
import ButtonLoading from "../Components/ButtonLoading";
import { registerUser } from "../Services/authServices";
import AlertNavigation from "../Components/AlertNavigation";
import registerImg from "../../public/registered.png"

const Register = () => {
  const [alert,setAlert] = useState({text:'',redirect:false,duration:0,path:''});
  const [loading,setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:"onChange"});

  
  
  const onSubmit= async(data)=>{
    setLoading(true);
    try{
      await registerUser(data);
      setAlert({text:'Registro Completado!',redirect:true,duration:1500,path:'/login'})
      setLoading(false)
    }catch(e){
      console.log(e);
      setAlert({text:errorMessage[e.code] || "Ha ocurrido un error",redirect:false,errorAlert:true})
      setLoading(false)
    }
  }
    return (
        <div className="flex mx-auto my-20 justify-evenly items-center w-2/3 bg-transparent backdrop-blur-[2px] py-8 px-8 rounded-2xl shadow-[0_0_56px_23px_rgba(0,0,0,0.83)] shadow-darkGreen border-lightGreen border-2">
          <img src={registerImg} className=" w-1/4 h-1/4 rounded"/>
          <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 py-2 px-4 bg-white bg-b5 backdrop-blur-sm rounded border-2 border-lightGreen">
            <Input type='text' label='Nombre'  register={{...register("name",{required:true})}} errors={errors} name="name" />
            <Input type='text' label='Apellido'  register={{...register("lastName",{required:true})}} errors={errors} name="lastName" />
            <Input type='date' label='Fecha de nacimiento'  register={{...register("birth",{required:false})}} errors={errors} name="birth" />
            <Input type='email' label='Email'  register={{...register("email",{required:true})}} errors={errors} name="email" textForm="Tu email no sera compartido con terceros." />
            <Input type='password' label='Contraseña'  register={{...register("password",{required:true})}} errors={errors} name="password" />
            <AlertNavigation {...alert} />  
            <ButtonLoading type="submit" loading={loading} alert={alert.redirect}>Registrarse</ButtonLoading>
          </form>
        </div>
  )
}

export default Register