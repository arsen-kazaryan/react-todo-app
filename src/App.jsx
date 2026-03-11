import Todo from "./components/Todo"

export const Hello =()=> <h1 style={{textAlign: 'center'}}>Hello!</h1>
{/*Показан пример переиспользования компонента⬇️ (не забывать что для стилей используются {{}} )*/}


const App = () => {
  return (
    <Todo/>
  )
}

export default App

{/*
  На первом этапе добавил файл с компонентами и разбил код на компоненты
  ГДЕ:
  Field - это универсальное поле ввода 
  Button - кнопка с текстом 
  AddTaskForm - это форма добаления новой задачи
  SearchTaskForm - это форма поиска по задачам 
  TodoInfo - это форма с количеством задач и кнопкой deletALL
  TodoItem - это отдельная задача в списке
  TodoList - это обертка для всего списка задачь
*/}