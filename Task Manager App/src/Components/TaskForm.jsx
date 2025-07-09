import React, { useState } from 'react';
import TaskItems from './TaskItems';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Features/TaskSlice';

const TaskForm = () => {

    const [taskName, setTaskName] = useState("");
    // const [tasks, setTasks] = useState([]);

    const dispatch = useDispatch();
    const tasks = useSelector((state) => (state.tasks))
    // console.log(Array.isArray(tasks), "...full redux state");

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleAddTask = () => {
        dispatch(addTask(taskName))
        setTaskName('')
    }

    return (
        <>
            <div className='form'>
                <h3 className='tittle'> Task Items Form : </h3>

                <label htmlFor="name"> Task Name : </label>
                <input type="text" id='name' placeholder='add task name' value={taskName} onChange={handleChange} />

                <button onClick={handleAddTask} type='button'> Add Task </button>

                <TaskItems tasks={tasks} />

            </div>

        </>
    );
}

export default TaskForm;
