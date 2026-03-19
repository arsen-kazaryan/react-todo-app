import Todo from "./components/Todo"

export const Hello =()=> <h1 style={{textAlign: 'center'}}>Hello!</h1>
{/*Показан пример переиспользования компонента⬇️ (не забывать что для стилей используются {{}} )*/}


const App = () => {
  return (
    <Todo/>
  )
}

export default App
