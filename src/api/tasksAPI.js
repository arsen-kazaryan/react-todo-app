const URL = 'http://localhost:3001/tasks'


const headers ={
  'Content-Type': 'application/json',
}
const tasksAPI ={
  getAll: ()=>{
    return fetch(URL).then((res)=> res.json() )
  },

  add: (task)=>{
    return   fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(task),
    })
    .then((resp)=> resp.json())
  },

  delete: (id)=>{
    return  fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })
  },

  deleteAll: (tasks)=>{
    return   Promise.all(
        tasks.map(({id})=> tasksAPI.delete(id))
      )
  },

  toggleCompete: (id,isDone)=>{
    return fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ isDone })
    })
  },
}
export default tasksAPI 