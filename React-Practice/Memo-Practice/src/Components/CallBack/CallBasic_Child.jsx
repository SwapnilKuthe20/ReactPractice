import React from 'react';

const CallBasic_Child = React.memo(({ onClick, name }) => {


    console.log("Child re render....");


    return (
        <div className='mt-5'>

            {/* <h2> Child-- {value} </h2> */}
            <h2> Name - {name} </h2>

            <button
                onClick={onClick}
                className='bg-amber-800 rounded-2xl py-2 px-6 cursor-pointer m-2'
            >
                Child Click
            </button>

        </div>
    );
})

export default CallBasic_Child;
