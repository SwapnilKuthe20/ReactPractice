import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetch',

    async (_, { rejectWithValue, signal }) => {
        try {

            const apiResult = await fetch("https://dummyjson.com/products", { signal })
            // console.log(apiResult, "...apiResult");

            if (!apiResult.ok) {
                return rejectWithValue("Server Error: " + apiResult.status);
            }

            const response = await apiResult.json()
            // console.log(response, "...response");

            return response

        } catch (error) {
            // console.log("........error......");
            if (error.name === "AbortError") {
                console.log("Request Abort....");
            }

            return rejectWithValue("Fetch products Api failed")
            // throw new Error(error.message);
        }
    },
    {
        condition: (_, { getState }) => {

            const { products } = getState()
            // console.log(products.loading, "...products");

            if (products.loading === "loading") {
                return false
            }
            return true
        }
    }
)


const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: "idle",
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loading = "loading"
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = "Succeeded"
                state.data = action.payload
                state.error = null
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                // console.log(action, "...action in rejected");
                state.loading = "rejected"
                state.error = action.payload || action.error.message || "Something went wrong"
            })
    }
})

export const productReducer = productSlice.reducer
