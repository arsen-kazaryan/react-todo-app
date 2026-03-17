import { useState } from "react"
import { Hello } from "../App"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo =()=>{
  const [tasks,setTasks]=useState([
    {id: 'tasks-1', title: 'Купить молоко', isDone:false},
    {id: 'tasks-2', title: 'Выучть React', isDone:true},
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const deleteAllTasks = ()=>{{/*Проверка действительно ли пользв. хочет удалить все задачи. */}
    const isConfirmed = confirm('Are you shure you want to delete all?')

    if(isConfirmed){
      setTasks([])
    }
  }

  const deleteTask = (taskId)=>{
    setTasks(
      tasks.filter((task=> task.id !== taskId))
    )
  }

  const toggleTaskComplete = (taskId, isDone)=>{
    setTasks(
      tasks.map((task)=> {
        if(task.id === taskId){
          return {...task, isDone}
        }
        return task
      })
    )
  }

  const filterTasks = (query)=>{
    console.log(`Поиск ${query}`)
  }
  const addTask =()=>{{/*Добавляет задачи, но перед этим проверяет не пустая ли стока и дает уникальный id одним из способой  */}
    if(newTaskTitle.trim().length > 0){
      const newTask= {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false
      }

      setTasks([...tasks,newTask])
      setNewTaskTitle('')
      {/*Очищает поле после добавления задачи */}
    }
  }


  return (
    <div className="todo">
      <Hello/>
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
      addTask={addTask}
      newTaskTitle={newTaskTitle}
      setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm onSearchInput={filterTasks}/>
      <TodoInfo 
      total={tasks.length}
      done={tasks.filter(({isDone})=> isDone).length}
      onDeleteButtonClick = {deleteAllTasks}
      />
      <TodoList 
      tasks={tasks}
      onDeleteTaskButtonClick ={deleteTask}
      onTaskCompleteChange ={toggleTaskComplete}
      />
    </div>
  )
}
export default Todo