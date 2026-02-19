import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, deleteTodo, edit } from './Features/todoSlice'

function App() {

  const [todoList, setTodoList] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  const todo = useSelector(state => state.todo)
  // console.log(todo, "..global state");

  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(add(todoList))
    setTodoList("")
  }

  const handleEditTodo = (id, item) => {

    const editItem = window.prompt("Edit Item..", item)

    dispatch(edit({ id, editItem }))      // payload sirf 1 hi argument accept krta h 
    // console.log(id, "...edit ID");
    // console.log(item, "...edit item");
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))

  }

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "500px", backgroundColor: "red", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >

        <h1 style={{ margin: "24px 0", }}> TODO APP </h1>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

          <div>
            <input type="text" style={{ margin: "20px 0", padding: "10px" }} onChange={(e) => setTodoList(e.target.value)} value={todoList} />
            <button style={{ padding: "10px", backgroundColor: "brown", color: "white" }} onClick={handleAddTodo}> Add </button>
          </div>

          <ul style={{ margin: "20px" }}>
            {
              todo.map(({ id, item }) => (
                <li key={id} style={{ margin: "20px", listStyle: "none", display: "flex", width: "100%" }}>
                  <input type="radio" onChange={() => setIsComplete(!isComplete)} value={isComplete} />
                  <h2 style={{ margin: "10px" }}>{item}</h2>
                  <button onClick={() => handleEditTodo(id, item)}> edit </button>
                  <button onClick={() => handleDeleteTodo(id)}> X </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
