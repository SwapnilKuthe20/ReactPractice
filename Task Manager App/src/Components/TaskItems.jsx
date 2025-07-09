import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTask, deleteTask } from '../Features/TaskSlice';

const TaskItems = ({ tasks }) => {
    // console.log(tasks, "task item");
    const { id, name, completed } = tasks

    const dispatch = useDispatch();

    const handleCheck = (id) => {
        dispatch(completeTask(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <h3 className='tittle'> Task Lists : </h3>
            {
                tasks.map(({ id, name, completed }) => (
                    <li key={id} className='task-list checkboxStyle'>
                        <input id={id} type="checkbox" onChange={() => handleCheck(id)} checked={completed} value={completed} className='InpCheckbox' />
                        <label htmlFor={id} className={`label ${completed ? "completed" : ""} `}> {name} </label>

                        <button type='button' onClick={() => handleDelete(id)} className='dlt-button'> Delete </button>
                    </li>
                ))
            }

        </div>
    );
}

export default TaskItems;
