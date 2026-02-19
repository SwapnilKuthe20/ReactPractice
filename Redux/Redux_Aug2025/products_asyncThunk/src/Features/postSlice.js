import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        // console.log(res, "...response");

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)  // yahan se reject hoga
        }
        return res.json()
    })

fetchPosts()
console.log(fetchPosts, "...fetch");

const postsSlice = createSlice({
    name: "Posts",
    initialState: { posts: [], status: "idel", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success"
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }

})

export const postReducer = postsSlice.reducer 