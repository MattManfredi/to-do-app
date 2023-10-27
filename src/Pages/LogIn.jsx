/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Input from "../Components/Input";
import ButtonLoading from "../Components/ButtonLoading";
import { logIn } from "../Services/authServices";
import AlertNavigation from "../Components/AlertNavigation";
import { errorMessage } from "../Services/errorMessage";
import loginImage from "../../public/log-in.png";

const LogIn = ({setLogin,setUser}) => {
  const [loading, setLoading] = useState(false);
  const [alert,setAlert] = useState({text:'',duration:0,path:'',redirect:false})
  const [showButton,setShowButton] = useState(true)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit= async(data)=>{
    setLoading(true)
    try{
      const response = await logIn(data);
      setShowButton(false);
      setUser(response);
      setLoading(false);
      setAlert({ text: `Bienvenido/a ${response.name}!`, duration: 0, path: '/', redirect: true});
    }catch (e){
      setAlert({text:errorMessage[e.code] || "Ha ocurrido un error",redirect:false,errorAlert:true});
      setLoading(false);
    }
  }

  useEffect(()=>{
    if (!showButton){
      console.log("si me estoy logueando gil");
      setLogin(true)
    }
  },[showButton])

  return (
    <section className="flex mx-auto my-32 justify-around w-2/4 bg-transparent backdrop-blur-[2px] py-10 rounded-2xl shadow-[0_0_56px_23px_rgba(0,0,0,0.83)] shadow-darkGreen border-lightGreen border-2">
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 px-8 py-10 bg-white rounded border-2 border-lightGreen">
        <Input type='email' label='usuario'  register={{...register("email",{required:true})}} errors={errors} name="email" color='text-brown'/>
        <Input type='password' label='contraseña' register={{...register("password",{required:true})}} errors={errors} name="password" color='text-brown'/>     
        <AlertNavigation {...alert}/>
        {showButton && <ButtonLoading type='submit' loading={loading}>Login</ButtonLoading>}
        
        
      </form>
      <img src={loginImage} className="object-contain w-1/3"/>
    </section>
  )
}

export default LogIn

