import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'fetch/products',

    async (arg, { rejectWithValue, signal }) => {
        try {
            const res = await fetch("https://fakestoreapi.com/products", { signal })

            if (!res.ok) {
                return rejectWithValue("Api failed products does not fetch")
            }

            const response = await res.json()
            return response
        } catch (error) {
            return rejectWithValue('Api failed : ', error.response.message)
        }
    },

    {
        condition: (arg, { getState }) => {
            const { loading, data, error, lastFetched } = getState().products;
            // console.log(products, "...store in condition");

            if (loading === "pending") {
                return false;
            }

            //  Manual call ::
            if (arg?.force) {
                return true
            }
            
            //  10 sec API not called
            if (lastFetched) {
                const now = Date.now()
                const diff = now - lastFetched;

                const fiveMinutes = 10 * 1000   // 10 sec

                if (diff < fiveMinutes) {
                    return false
                }
            }


            return true
        }
    }

)


const productsSlice = createSlice({
    name: "products ",
    initialState: {
        loading: "idle",
        data: [],
        error: null,
        lastFetched: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loading = "pending"
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = "fulfilled"
                state.data = action.payload
                state.error = null
                state.lastFetched = Date.now()
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = "failed"
                state.error = action.payload
            })
    }
})

export const productsReducer = productsSlice.reducer
