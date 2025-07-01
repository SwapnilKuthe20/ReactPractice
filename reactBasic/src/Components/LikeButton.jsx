import React, { useState } from "react";

const LikeButton = () => {

    const [like, setLike] = useState(0)

    return (
        <>
            <h3>Like Button Project</h3>
            <p>Total Likes : {like}</p>

            <button onClick={() => setLike(prev => prev + 1)}> Like </button>
            <button onClick={() => setLike(0)}> Reset Like </button>
        </>
    )
}

export default LikeButton;