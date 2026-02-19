import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchUsers = createAsyncThunk(
    'users/searchUsers',
    async (query, thunkApi) => {

        // console.log(query, "...query");
        // console.log(typeof thunkApi, "...thunkApi");
        // console.log(thunkApi, "...thunkApi");

        const { signal, rejectWithValue, dispatch, abort, extra, getState, fulfillWithValue, requestId } = thunkApi;


        const data = await fetch(`https://dummyjson.com/products/search?q=${query}`, { signal })
        const response = await data.json()

        return response;
    }
)

const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        data: [],
        error: null,
        currentRequestId: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchUsers.pending, (state, action) => {
                // console.log("...pending");
                // console.log(state, "...state in pending");
                console.log(action, "...action in pending");

                state.loading = true
                state.error = null
                state.currentRequestId = action.meta.requestId;

                // console.log(state.currentRequestId, "...cur id in pend");


            })

            .addCase(searchUsers.fulfilled, (state, action) => {
                // console.log("...fullfilled");
                // console.log(state, "...state in fullfilled");
                // console.log(action, "...action in fullfilled");

                const { requestId } = action.meta;
                // console.log(state.currentRequestId, "...cur id in fullfilled");

                if (state.currentRequestId === requestId) {

                    state.loading = false;
                    state.data = action.payload;
                    state.error = null;
                    state.currentRequestId = null
                }
            })

            .addCase(searchUsers.rejected, (state, action) => {
                // console.log("...rejected");
                // console.log(state, "...state in rejected");
                // console.log(action, "...action in rejected");

                // console.log(state.currentRequestId, "...cur id in rejected");
                const { requestId } = action.meta

                if (state.currentRequestId === requestId) {
                    state.loading = false;
                    state.error = action.error.message
                    state.currentRequestId = null
                }
            })
    }
})

export const userReducer = userSlice.reducer