import { useForm } from "react-hook-form"
const ToDoAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="Ingrese su Tarea" {...register("toDo")} />
    
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
    
          <button className="bg-green-300 rounded-3xl px-7">Agregar Tarea</button>
        </form>
      )
}

export default ToDoAdd