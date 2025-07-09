import React, { useState } from 'react';
import TaskItems from './TaskItems';

const TaskForm = () => {

    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleAddTask = () => {
        setTasks(prev => [...prev, taskName])
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
