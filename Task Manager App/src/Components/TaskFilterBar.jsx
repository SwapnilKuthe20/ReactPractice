import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../Features/TaskSlice';

const filterOption = ["ALL", "PENDING", "COMPLETED"]

const TaskFilterBar = () => {

    const dispatch = useDispatch();
    const filterState = useSelector(state => state.tasks.filter)

    return (
        <div className='filter-bar'>
            {
                filterOption.map((state, index) => (
                    <div key={index} className={state === filterState ? "filetr-btn " : ''} onClick={() => dispatch(setFilter(state))}> {state} </div >
                ))
            }
        </div >
    );
}

export default TaskFilterBar;
