/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ToDoAdd from "../Components/ToDoAdd"
import {getToDos, modifyTodo} from "../Services/toDoServices"
import ToDoRow from "../Components/ToDoRow"
import Icon from "../Components/Icon"



const ToDoPage = ({userId}) => {
  const [completed, setCompleted] = useState([]);
  const [notCompleted,setNotCompleted] = useState([]);
  const [newTodoAdded, setNewTodoAdded] = useState(false);
  const [sort,setSort] = useState(false);
  const handleTodoEliminated = async(todoId,data) =>{
    try{
       await modifyTodo(userId,todoId,data);
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
        <table className=" mt-10 w-3/4 m-auto">
        <thead className=" text-brown  uppercase  border-2 border-darkBrown bg-lightGreen bg-wave-brown-pattern py-10">
            <tr className="text-sm">
                <th scope="col" className="py-3 relative font-bold backdrop-blur-[2px]">
                    Terminada                   
                </th>
                <th scope="col" className=" px-6 py-3 backdrop-blur-[2px]">
                    Tarea
                </th>
                <th scope="col" className="px-6 py-3 backdrop-blur-[2px]">
                    Fecha limite
                </th>
                <th scope="col" className="px-6 py-3 backdrop-blur-[2px]">
                    Prioridad
                </th>
                <th scope="col" className="px-6 py-3 backdrop-blur-[2px]">
                    Eliminar
                </th>
            </tr>
        </thead>
        <tbody className="text-sm ">
            {
                notCompleted.map((toDo,index)=>(
                    <ToDoRow toDo={toDo} key={index} handleTodoEliminated={handleTodoEliminated} index={index+1} setSort={setSort} sort={sort} bgColor="bg-lightBrown"/>
                    ))
                }
            {
                completed.map((toDo,index)=>(
                    <ToDoRow toDo={toDo} key={index} handleTodoEliminated={handleTodoEliminated} index={index+1} setSort={setSort} sort={sort} lineThrough="line-through" bgColor="bg-lightGreen"/>
                ))
            }
        </tbody>
        </table>
    </section>
  )
}

export default ToDoPage

{/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div> */}