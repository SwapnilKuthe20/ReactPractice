import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchProductsApi = createAsyncThunk(
    'search/products',
    async (query, { rejectWithValue, signal }) => {
        try {

            const result = await fetch(`https://dummyjson.com/products/search?q=${query}`, { signal })
            console.log(result, "...result api without unwrap");

            if (!result.ok) {
                return rejectWithValue("Server Error..")
            }

            const resp = await result.json()
            console.log(resp, "...response without unwrap ");

            return resp

        } catch (error) {
            if (error.name == "AbortError") {
                console.log("request abort");
                return rejectWithValue("Request Aborted !!")
            }

            return rejectWithValue(error.message)
        }
    }
)

const searchProductSlice = createSlice({
    name: "searchProducts",
    initialState: {
        loading: "ideal",
        data: [],
        error: null,
        currentReqId: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchProductsApi.pending, (state, action) => {
                state.currentReqId = action.meta.requestId

                state.loading = "pending"
                state.error = null
            })
            .addCase(searchProductsApi.fulfilled, (state, action) => {
                if (state.currentReqId !== action.meta.requestId) {
                    return
                }

                state.loading = "succeeded"
                state.data = action.payload
                state.error = null
                state.currentReqId = null
            })
            .addCase(searchProductsApi.rejected, (state, action) => {
                if (state.currentReqId !== action.meta.requestId) {
                    return
                }

                state.loading = "rejected"
                state.error = action.payload
                state.currentReqId = null
            })
    }
})

export const searchProductReducer = searchProductSlice.reducer;
