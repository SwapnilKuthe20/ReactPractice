import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "posts/fetchposts",
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')

        return res.json()
    }
)

const postSlice = createSlice({
    name: "Posts",
    initialState: { list: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success"
                state.list = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
    }
})

export const postReducer = postSlice.reducer