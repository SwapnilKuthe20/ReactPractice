import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(response, "...response create async thunk");
        return response.data;
    }
)
// console.log(fetchUsers(), "....fetchUsers");

const userSlice = createSlice({
    name: "users/fetchUsers",
    initialState: {
        loading: false,
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        // console.log(builder, ",,,builder");
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})


export const userReducer = userSlice.reducer;

