import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(
    'fetch/posts',

    async (arg, { rejectWithValue }) => {
        try {

            const fetchApiRes = await fetch('https://jsonplaceholder.typicode.com/posts')

            if (!fetchApiRes.ok) {
                rejectWithValue("Api fetch Error")
            }

            const fetchPostData = await fetchApiRes.json()
            return fetchPostData;

        } catch (error) {
            rejectWithValue("Api fetch rejected")
        }
    },
    {
        condition: (arg, { getState }) => {
            const { posts } = getState()
            // console.log(posts, "...conditin getState");

            // Prevent Deduplication
            if (posts.loading == "loading") {
                return false
            }

            // 
            if (posts.loading == "succeeded") {
                return false
            }


            //  bAsic Cache :: 
            if (posts.posts.length > 0) {
                return false
            }

            return true
        }
    }
)


const postSlice = createSlice({
    name: "Post",
    initialState: {
        loading: "idle",
        posts: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.posts = action.payload;
                state.error = null
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = "Rejected"
                state.error = action.payload || action.error.message || "Something went wrong"
            })
    }
})

export const postReducer = postSlice.reducer
