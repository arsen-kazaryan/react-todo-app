import { Hello } from "../App"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo =()=>{
  const tasks = [
    {id: 'tasks-1', title: 'Купить молоко', isDone:false},
    {id: 'tasks-2', title: 'Выучть React', isDone:true},
  ]
  
  return (
    <div className="todo">
      <Hello/>
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm/>
      <TodoInfo 
      total={tasks.length}
      done={tasks.filter(({isDone})=> isDone).length}
      />
      <TodoList tasks={tasks}/>
    </div>
  )
}
export default Todo