import { useForm } from "react-hook-form";
import { create } from "../Services/toDoServices";
const ToDoAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =  async (data) => {
        const test = {
          user: '1234',
          data: data,
        }
        console.log(test);
        try{
          const document = await create(test)
          console.log(document);
        }
        catch(e){
          console.log(e);
        }
      }
    
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
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

export default ToDoAdd