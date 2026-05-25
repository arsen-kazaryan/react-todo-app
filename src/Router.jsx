// Здесь будет хрантися текщий путь (Window.location.pathName) 
// Слежка за изменениями этого путя (Cобытие popstate)
// Рендер компонента который соответствует пути 

import { useEffect, useState } from "react"

const useRoute =()=>{
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = ()=>{
      setPath(window.location.pathname )
    }
    // вызывает значение setPass   и устанавливаем значение (window.location.pathname )


    window.addEventListener('popstate', onLocationChange)

    return ()=> {
    window.removeEventListener('popstate', onLocationChange)
    }
  }, [])
  return path 
}
const  Router =(props) =>{
  const {routes} = props
  // Будет принимать компонент с путями (routes). 
  // В этом объекте будут пути с соответствующими им компонентами страниц.
  const path = useRoute()
  // Через зук useRouth мы получаем актуальный путь

  if(path.startsWith('/tasks/')){
    const id = path.replace('/tasks/', '')
    const TaskPage = routes['/tasks/:id'] 

    return <TaskPage params={{ id }} /> 
  }

  const Page = routes[path] ?? routes['*']
  // ?? - переключается на правое выражение если слева null or undefined 

  return <Page />
}

export default Router

