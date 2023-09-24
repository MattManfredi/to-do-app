import { useState } from "react"
import ToDo from "../Components/ToDo"
import ToDoAdd from "../Components/ToDoAdd"


const ToDoPage = () => {
    const [toDos,setToDos] = useState(['tarea 1','tarea 2','tarea 3','tarea 4',])
  return (
    <section>
        <ul>
            {
                toDos.map((toDo,index)=>(
                    <ToDo toDo={toDo} key={index}/>
                    ))
            }
        </ul>
        <ToDoAdd toDos={toDos} setToDos={setToDos}/>
    </section>
  )
}

export default ToDoPage