import { useForm } from "react-hook-form";
import { createToDo } from "../Services/toDoServices";
import InputToDo from "./InputToDo";
const ToDoAdd = ({userId,handleTodoAdded }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = async (data) => {

        console.log(errors);
        const toDos = {...data,accomplished:false}
        try{
          await createToDo(userId,toDos);
          handleTodoAdded();
          reset()
        }
        catch(e){
          console.log(e);
        }
      }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className=" rounded-md mx-auto mt-40 w-2/5 px-4 py-7 bg-darkGrey backdrop-blur-[2px] shadow-[0_0_56px_23px_rgba(0,0,0,0.83)]">
          <InputToDo type="text" name="todo" label="Ingrese su tarea" errors={errors} register={{...register("todo",{required:true})}} />
          <InputToDo type="date" name="date" label="Ingrese la fecha limite" errors={errors} max="3000-01-01" register={{...register("date",{required:false})}} />
          <p className=" uppercase font-bold text-white">Prioridad:</p>
          <ul className=" flex w-ful border border-white rounded-md backdrop-blur-sm">
            <li className="w-1/3">
              <input type="radio" id="priority-high" name="priority" value="alta" {...register("priority",{required:true})} className="hidden peer"/>
              <label htmlFor="priority-high" className=" inline-flex items-center justify-center text-lightBrown w-full  border-white cursor-pointer peer-checked:bg-danger peer-checked:text-white hover:text-danger rounded-l-md transition">                           
                <div className="block">
                  <div className="w-full text-lg tracking-widest font-semibold">Alta</div>
                </div>
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 ml-3">
                  <path clipRule="evenodd" fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" />
                </svg>
              </label>
            </li>
            <li className="w-1/3">
              <input type="radio" id="priority-medium" name="priority" value="media" {...register("priority",{required:true})} className="hidden peer"/>
              <label htmlFor="priority-medium" className="inline-flex items-center justify-center text-lightBrown w-full border-x border-white cursor-pointer peer-checked:bg-yellow peer-checked:text-white hover:text-yellow transition">                           
                <div className="block">
                  <div className="w-full text-lg tracking-widest font-semibold">Media</div>
                </div>
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 ml-3">
                  <path clipRule="evenodd" fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" />
                </svg>
              </label>
            </li>
            <li className="w-1/3">
              <input type="radio" id="priority-low" name="priority" value="baja" {...register("priority",{required:true})} className="hidden peer"/>
              <label htmlFor="priority-low" className="inline-flex items-center justify-center text-lightBrown w-full border-white cursor-pointer peer-checked:bg-green peer-checked:text-white hover:text-green rounded-r-md transition">                           
                <div className="block">
                  <div className="w-full text-lg tracking-widest font-semibold">Baja</div>
                </div>
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 ml-3">
                  <path clipRule="evenodd" fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" />
                </svg>
              </label>
            </li>
          </ul>
          {errors.priority ?.type==="required" &&<div className='text-danger mt-2'>Debe elegir una prioridad, PELOTUDO</div>}
          <button className="flex bg-darkBrown rounded-md m-auto px-7 py-2 mt-10 text-lightGreen border border-darkGrey font-bold  hover:bg-lightBrown hover:text-darkGreen transition " type="submit">Agregar Tarea</button>
        </form>
      )
}

export default ToDoAdd