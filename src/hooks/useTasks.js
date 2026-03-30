import { useCallback, useState, useEffect, useMemo, useRef } from "react"
import useTasksLocalStorage from "./useTasksLocalStorage"

const useTasks =()=>{
  const  {
    savedTasks,
    saveTasks,
  }=useTasksLocalStorage()
  
  const [tasks, setTasks] = useState(() => savedTasks ?? [
      { id: 'tasks-1', title: 'Купить молоко', isDone: false },
      { id: 'tasks-2', title: 'Выучть React', isDone: true },
    ])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)

  const deleteAllTasks = useCallback(() => {
    {/*Проверка действительно ли пользв. хочет удалить все задачи. */ }
    const isConfirmed = confirm('Are you shure you want to delete all?')

    if (isConfirmed) {
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks(
      tasks.filter((task => task.id !== taskId))
    )
  }, [tasks])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone }
        }
        return task
      })
    )
  }, [tasks])


  const addTask = useCallback((title) => {
  {/*Добавляет задачи, но перед этим проверяет не пустая ли стока и дает уникальный id одним из способой  */ }
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isDone: false
    }
    setTasks((prev) => [...prev, newTask])
    setNewTaskTitle('')
    setSearchQuery('')
    newTaskInputRef.current.focus()
    {/*Очищает поле после добавления задачи */ }
  }, [])
  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
    // Этот useEffect отвечает за фокусировку на поле ввода после загрузки. 
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
