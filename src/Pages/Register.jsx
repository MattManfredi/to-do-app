import Input  from "../Components/Input";
import { useForm } from "react-hook-form";
import {errorMessage} from "../Services/errorMessage";
import { useState } from "react";
import ButtonLoading from "../Components/ButtonLoading";
import { registerUser } from "../Services/authServices";
import AlertRegister from "../Components/AlertRegister";

const Register = () => {
  const [alert,setAlert] = useState({text:'',duration:0,path:''});
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
      setAlert({text:'Registro Completado!',redirect:true,duration:40000,path:'/login'})
      setLoading(false)
    }catch(e){
      console.log(e);
      setAlert({text: errorMessage[e.code] || "Ha ocurrido un error"})
      setLoading(false)
    }
  }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
            <Input type='text' label='Nombre' placeholder='Ingrese su nombre' register={{...register("name",{required:true})}} errors={errors} name="name" />
            <Input type='text' label='Apellido' placeholder='Ingrese su apellido' register={{...register("lastName",{required:true})}} errors={errors} name="lastName" />
            <Input type='date' label='Fecha de nacimiento' placeholder='Ingrese su Fecha de nacimiento' register={{...register("birth",{required:false})}} errors={errors} name="birth" />
            <Input type='email' label='Email' placeholder='Ingrese su Email' register={{...register("email",{required:true})}} errors={errors} name="email" textForm="Tu email no sera compartido con terceros." />
            <Input type='password' label='Contraseña' placeholder='Ingrese su contraseña' register={{...register("password",{required:true})}} errors={errors} name="password" />
            <ButtonLoading type="submit" loading={loading}>Registrarse</ButtonLoading>
            <AlertRegister {...alert}/>
        </form>
  )
}

export default Register