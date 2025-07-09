import React from 'react';

const TaskFilterBar = () => {
    return (
        <div className='.filter-bar '>
            <div className='btn'> All </div >
            <div className='btn'> Pending </div >
            <div className='btn'> Completed </div >
        </div>
    );
}

export default TaskFilterBar;
