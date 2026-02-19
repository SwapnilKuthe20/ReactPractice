import { createSlice } from "@reduxjs/toolkit";

const addToCart = createSlice({
    name: "addToCart",
    initialState: {
        id: undefined,
        item: [],
        qty: null
    },
    reducers: {
        addToCartRed: {
            prepare(item) {
                // console.log(item, "..item in prepare");
                return {
                    payload: {
                        id: Date.now(),
                        item: item,
                        qty: 1
                    }
                }
            },
            reducer(state, action) {
                state.item.push(action.payload)
            }
        }

    }

})

export const { addToCartRed } = addToCart.actions;

export const addToCartReducer = addToCart.reducer;
