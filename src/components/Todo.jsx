import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Hello } from "../App"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
import Button from "./Button"

const Todo =()=>{ 
  const [tasks,setTasks]=useState( ()=>{
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      return JSON.parse(savedTasks)
    }
    return[
      {id: 'tasks-1', title: 'Купить молоко', isDone:false},
      {id: 'tasks-2', title: 'Выучть React', isDone:true},
    ]

  })
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery,setSearchQuery] = useState('')

  const  newTaskInputRef = useRef(null)
  const firstInCompleteTaskReF = useRef(null)
  const fisrtInCompleteTaskId = tasks.find(({ isDone})=> !isDone)?.id

  const deleteAllTasks = useCallback( ()=>{{/*Проверка действительно ли пользв. хочет удалить все задачи. */}
    const isConfirmed = confirm('Are you shure you want to delete all?')

    if(isConfirmed){
      setTasks([])
    }
  },[])

  const deleteTask = useCallback((taskId)=>{
    setTasks(
      tasks.filter((task=> task.id !== taskId))
    )
  },[tasks])

  const toggleTaskComplete = useCallback((taskId, isDone)=>{
    setTasks(
      tasks.map((task)=> {
        if(task.id === taskId){
          return {...task, isDone}
        }
        return task
      })
    )
  },[tasks])

  
  const addTask = useCallback(()=>{{/*Добавляет задачи, но перед этим проверяет не пустая ли стока и дает уникальный id одним из способой  */}
    if(newTaskTitle.trim().length > 0){
      const newTask= {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false
      }

      setTasks((prev)=> [...prev,newTask])
      setNewTaskTitle('')
      setSearchQuery('')
      newTaskInputRef.current.focus()
      {/*Очищает поле после добавления задачи */}
    }
  },[newTaskTitle])
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
    // Этот useEffect отвечает за фокусировку на поле ввода после загрузки. 
  }, [])

  const filteredTasks = useMemo(()=>{
    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase()

    return clearSearchQuery.length > 0
    ? tasks.filter(({ title })=> title.toLowerCase().includes(clearSearchQuery)) : null
  },[searchQuery,tasks])

  const doneTasks = useMemo(()=>{
    return tasks.filter(({isDone})=> isDone).length
  },[tasks])
  return (
    <div className="todo">
      <Hello/>
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
      addTask={addTask}
      newTaskTitle={newTaskTitle}
      setNewTaskTitle={setNewTaskTitle}
      newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      <TodoInfo 
      total={tasks.length}
      done={doneTasks}
      onDeleteButtonClick = {deleteAllTasks}
      />
      <Button 
      onClick={()=> firstInCompleteTaskReF.current?.scrollIntoView({behavior: 'smooth'})} >Show first incomplete task</Button>
      <TodoList 
      tasks={tasks}
      filteredTasks={filteredTasks}
      firstInCompleteTaskReF={firstInCompleteTaskReF}
      fisrtInCompleteTaskId ={fisrtInCompleteTaskId}
      onDeleteTaskButtonClick ={deleteTask}
      onTaskCompleteChange ={toggleTaskComplete}
      />
    </div>
  )
}
export default Todo