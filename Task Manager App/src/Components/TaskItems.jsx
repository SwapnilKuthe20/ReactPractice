import React from 'react';

const TaskItems = ({ tasks }) => {
    // console.log(tasks, "tasks");
    console.log(Array.isArray(tasks));

    return (
        <div>
            {
                tasks.map((item) => (
                    console.log(item)
                    
                    // <li>
                    //     <input type="checkbox" onChange={handleCheck} />
                    //     <label htmlFor="">{item}</label>
                    // </li>
                ))
            }

        </div>
    );
}

export default TaskItems;
