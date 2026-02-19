import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, isCompleteTodo } from "../App/Features/todoSlice";
import { filterList } from "../App/Features/filterSlice";

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState('')

    const todoSelector = useSelector(state => state.todoStore)
    console.log(todoSelector, "...todoSelector");

    const dispatch = useDispatch()

    const filterSelector = useSelector(state => state.filterStore)
    console.log(filterSelector, "...filterSelector");

    const handleAddTodo = () => {
        dispatch(addTodo(todo))
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }


    return (
        <div className="w-96 bg-emerald-950 text-emerald-200 p-8">
            <h1 className="text-center mb-5"> TODO Project </h1>
            <div className="flex flex-col">
                <input
                    type="text"
                    value={todo}
                    placeholder="Enter todo Item..."
                    onChange={(e) => setTodo(e.target.value)}
                    className="p-2 border border-amber-600"
                />

                <button
                    onClick={handleAddTodo}
                    className="bg-cyan-900 my-3.5 p-2.5 w-24 m-auto rounded-2xl cursor-pointer"
                >
                    Add todo
                </button>
            </div>

            <div className="flex gap-4 my-5">
                <button
                    className="bg-cyan-900 my-3.5 p-2.5 m-auto rounded-2xl cursor-pointer"
                    onClick={() => dispatch(filterList("All"))}
                >
                    All
                </button>

                <button
                    className="bg-cyan-900 my-3.5 p-2.5 m-auto rounded-2xl cursor-pointer"
                    onClick={() => dispatch(filterList("Completed"))}
                >
                    Completed
                </button>

                <button
                    className="bg-cyan-900 my-3.5 p-2.5 m-auto rounded-2xl cursor-pointer"
                    onClick={() => dispatch(filterList("InCompleted"))}
                >
                    InCompleted
                </button>
            </div>

            <p className=""> Todo List : </p>
            {
                // todoSelector.todoItems.map(({ id, todo, complete }) => (
                //     <div key={id} className="">
                //         <input type="checkbox" checked={complete} onChange={(e) => dispatch(isCompleteTodo(e.target.checked))} />
                //         <p> {todo} </p>
                //         <button onClick={() => handleDeleteTodo(id)}> X </button>
                //     </div>
                // ))
            }

        </div>
    );
}

export default TodoList;
