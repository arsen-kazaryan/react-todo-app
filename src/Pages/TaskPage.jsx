import { useEffect, useState } from "react"

const TaskPage = (props) => {
  const { params } = props

  const taskId = params.id
  
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  // компонент будет сразу брать данные с сервера поэтому изначально true

  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    tasksAPI.getById(taskId)
    .then((taskData)=> {
      setTask(taskData)
      setHasError(false)
      
    })
    .catch(()=> {
      setHasError(true)
    })
    .finally(()=> {
      setIsLoading(false)
    })
  }, [])
  if(isLoading){
    return <div>Loading...</div>
  }
  if(hasError){
    return <div>Task not Found!</div>
  }

  return (
    <>
    <h1>{task.title}</h1 >
    {task.isDone ? 'Задача выполнена' : 'Задача не выполнена'}
    </>
  )
}

export default TaskPage
{/*Здесь будет заггрузка данных о задаче по ID */}