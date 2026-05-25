import TaskPage from "./Pages/TaskPage"
import TasksPage from "./Pages/TasksPage"
import Router from "./Router"

export const Hello =()=> <h1 style={{textAlign: 'center'}}>Hello!</h1>
{/*Показан пример переиспользования компонента⬇️ (не забывать что для стилей используются {{}} )*/}


const App = () => {
  const routes  ={
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*':()=> <div>404 Page not found</div>,
  }
  // Указыается в формате обекта какие компоненты страниц, на каких путях должны отображатся. 
  return (
    <Router routes={routes} />
  )
}

export default App

