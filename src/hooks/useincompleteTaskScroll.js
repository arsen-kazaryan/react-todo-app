import { useRef } from "react"

const useIncompleteTaskScroll =(tasks)=>{
    const firstInCompleteTaskReF = useRef(null)
    const fisrtInCompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id
  
    return{
      firstInCompleteTaskReF,
      fisrtInCompleteTaskId
    }
}
export default useIncompleteTaskScroll