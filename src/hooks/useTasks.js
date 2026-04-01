import { useCallback, useState, useEffect, useMemo, useRef } from "react"
import tasksAPI from "../api/tasksAPI"

const useTasks =()=>{

  
  const [tasks, setTasks] = useState([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)

  const deleteAllTasks = useCallback(() => {
    {/*Проверка действительно ли пользв. хочет удалить все задачи. */ }
    const isConfirmed = confirm('Are you shure you want to delete all?')

    if (isConfirmed) {

tasksAPI.deleteAll(tasks)
  .then(()=> setTasks([]))
    }
  }, [tasks])

  const deleteTask = useCallback((taskId) => {


  tasksAPI.delete(taskId)
    .then(() => {
      setTasks(
        tasks.filter((task => task.id !== taskId))
    )
    })
  }, [tasks])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    tasksAPI.toggleCompete(taskId,isDone)
    .then(()=> {
          setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone }
        }
        return task
      })
    )
    })
  }, [tasks])


  const addTask = useCallback((title) => {
  {/*Добавляет задачи, но перед этим проверяет не пустая ли стока и дает уникальный id одним из способой  */ }
    const newTask = {
      title,
      isDone: false
    }

tasksAPI.add(newTask)
    .then((data)=> {
    setTasks((prev) =>   [...prev, data])
    setNewTaskTitle('')
    setSearchQuery('')
    newTaskInputRef.current.focus()
    })



    {/*Очищает поле после добавления задачи */ }
  }, [])


  useEffect(() => {
    newTaskInputRef.current.focus()
    // Этот useEffect отвечает за фокусировку на поле ввода после загрузки. 

    tasksAPI.getAll().then(setTasks)
  }, [])

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase()

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null
  }, [searchQuery, tasks])

  return{
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
  }
}
export default useTasks
