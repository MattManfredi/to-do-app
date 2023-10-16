
const ToDoRow = ({toDo}) => {
  console.log(toDo);
  return (
    <>
    <li>{toDo.todoName}</li>
    <li>{toDo.todoDate}</li>
    <li>{toDo.priority}</li>
    </>
  )
}



export default ToDoRow