import { useForm } from "react-hook-form";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit=()=>{
    console.log();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="Ingrese su Tarea" {...register("toDo")} />
    
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("toDoDescription", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
    
          <button className="bg-green-300 rounded-3xl px-7" type="submit">Agregar Tarea</button>
      </form>
  )
}

export default LogIn