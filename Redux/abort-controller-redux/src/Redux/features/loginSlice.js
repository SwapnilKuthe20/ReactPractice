import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginApi = createAsyncThunk(
    'user/login',
    async (formData, { rejectWithValue }) => {
        try {
            const res = await axios.post('https://dummyjson.com/auth/login', formData)
            console.log(res, "...response");

            return res;

        } catch (error) {
            // console.log(error, "...error");
            rejectWithValue("custom error... api failed")
        }
    }
)

const loginSlice = createSlice({
    name: "login",
    initialState: {
        loading: "ideal",
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(loginApi.pending, (state, action) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.data = action.payload;
                state.error = null;
            })
            .addCase(loginApi.rejected, (state, action) => {
                console.log(action, "...action in erorr case");

                state.loading = "rejected";
                state.error = action.payload;
            })
    }

})

export const loginUserReducer = loginSlice.reducer;
