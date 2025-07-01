import React, { useEffect, useState } from 'react';

// ✅ Scenario 2: Fetch Data on Mount
// 📌 Goal:

// Component mount hone pe https://jsonplaceholder.typicode.com/posts se data fetch karo
// Data ko posts naam ki state me store karo
// UI me post titles list karo
// 🧠 Focus: API call, one-time useEffect, empty array
// 🎯 Bonus: Loading indicator dikhana jab tak data na aaye

const FetchData = () => {

    const [post, setPost] = useState([])
    // console.log(post, "....beforeEffect");

    useEffect(() => {

        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((post) => {
                    // console.log(post.json());
                    const postData = post.json()
                    return postData;
                })
                .then((data) => {
                    setPost(data)
                })
                .catch((err) => {
                    console.log("Error Ocuured ", err);
                })
        }

        fetchData();

    }, [])

    // console.log(post, "....AfterEffect");



    return (
        <div>
            <h3>Fetch Data From Api</h3>

            <ul>
                {
                    post.map((post, index) => {
                        // console.log(post, "...post");
                        // console.log("hiiii")
                        const { id, title, body, userId } = post;
                        return (
                            <>
                                <li key={id}>
                                    <p>{id}</p>
                                    {/* <p>{userId}</p> */}
                                    <p>{title}</p>
                                    <p>{body}</p>
                                </li>
                            </>
                        )
                    })
                }
            </ul>


        </div>
    );
}

export default FetchData;
