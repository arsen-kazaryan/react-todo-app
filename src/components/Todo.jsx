import { Hello } from "../App"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./searchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo =()=>{
  return (
    <div className="todo">
      <Hello/>
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm/>
      <TodoInfo/>
      <TodoList/>
    </div>
  )
}
export default Todo