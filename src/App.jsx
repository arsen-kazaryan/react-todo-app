import Todo from "./components/Todo"
import { TasksProvider } from "./context/TasksContext"

export const Hello =()=> <h1 style={{textAlign: 'center'}}>Hello!</h1>
{/*Показан пример переиспользования компонента⬇️ (не забывать что для стилей используются {{}} )*/}


const App = () => {
  return (
    <TasksProvider>
      <Todo/>
    </TasksProvider>
  )
}

export default App
