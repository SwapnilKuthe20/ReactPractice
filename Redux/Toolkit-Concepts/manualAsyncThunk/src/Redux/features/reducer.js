import { ERROR, START, SUCCESS } from "./action.type";

console.log("...reducer run....");

const initialState = {
    loading: false,
    data: [],
    error: null
}

function userReducer(state = initialState, action) {

    switch (action.type) {

        case START:
            return {
                ...state,
                loading: true
            }

        case SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }

}

export default userReducer

