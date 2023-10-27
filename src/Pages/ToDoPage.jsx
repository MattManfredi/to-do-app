/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ToDoAdd from "../Components/ToDoAdd"
import {deleteTodo, getToDos, modifyTodo} from "../Services/toDoServices"
import ToDoRow from "../Components/ToDoRow"



const ToDoPage = ({userId}) => {
  const [completed, setCompleted] = useState([]);
  const [notCompleted,setNotCompleted] = useState([]);
  const [newTodoAdded, setNewTodoAdded] = useState(false);
  const [sort,setSort] = useState(false);
  const handleStatusChange = async(todoId,data) =>{
    try{
       await modifyTodo(userId,todoId,data);
       const changeSort = !sort;
        setSort(changeSort)
    }catch(e){
        console.log(e);
    }
  }

  const handleDeleteTodo = async(todoId)=>{
    try{
        await deleteTodo(userId,todoId);
        const changeSort = !sort;
        setSort(changeSort)
    }catch(e){
        console.log(e);
    }
    
  }
  useEffect(()=>{
    const request = async() =>{
      try{
        const data = await getToDos(userId);  
          setCompleted(data.completed);
          setNotCompleted(data.notCompleted);
      }catch(e){
        console.log(e); 
      }
    };
    request();
  },[newTodoAdded,sort]);

  const handleTodoAdded  = () =>{ setNewTodoAdded((prev)=>!prev)}

  return (
    <section>
      <ToDoAdd userId={userId} handleTodoAdded ={handleTodoAdded }/>
        <table className=" mt-20 w-3/4 m-auto">
        <thead className=" text-darkBlue  uppercase bg-lightBlue h-14 mb-10 shadow-[0_0_10px_3px_rgba(0,0,0,0.75)]">
            <tr className="text-sm">
                <th scope="col" className="px-4 relative font-bold backdrop-blur-[2px]">
                    Terminada                   
                </th>
                <th scope="col" className=" px-6 backdrop-blur-[2px]">
                    Tarea
                </th>
                <th scope="col" className="px-6 backdrop-blur-[2px]">
                    Fecha limite
                </th>
                <th scope="col" className="px-6 backdrop-blur-[2px]">
                    Prioridad
                </th>
                <th scope="col" className="px-6 backdrop-blur-[2px]">
                    Eliminar
                </th>
            </tr>
        </thead>
        <div className=" h-5"></div>
        <tbody className="text-sm">
            {
                notCompleted.map((toDo,index)=>(
                    <>
                        <ToDoRow toDo={toDo} key={index} handleStatusChange={handleStatusChange} index={index+1} setSort={setSort} sort={sort} bgColor="backdrop-blur-2xl -backdrop-hue-rotate-60 backdrop-saturate-200 shadow-[0_0_10px_3px_rgba(0,0,0,0.75)] rounded-lg" deleteTodo={handleDeleteTodo}/>
                        <div className=" h-6"></div>
                    </>
                    ))
                }
            {
                completed.map((toDo,index)=>(
                    <>
                        <ToDoRow toDo={toDo} key={index} handleStatusChange={handleStatusChange} index={index+1} setSort={setSort} sort={sort} lineThrough="line-through" bgColor="backdrop-blur-2xl backdrop-saturate-200 shadow-[0_0_10px_3px_rgba(0,0,0,0.75)] rounded-lg" deleteTodo={handleDeleteTodo}/>
                        <div className=" h-6"></div>
                    </>
                ))
            }
        </tbody>
        </table>
    </section>
  )
}

export default ToDoPage

