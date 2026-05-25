import Todo from "../components/Todo"
import { TasksProvider } from "../context/TasksContext"


const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage

/*
  Зачем это нужно?
  Разделяем  логику отображения 
  Список и взаимодействие  в TasksPage а отдеельная задача в taskPage.
*/
