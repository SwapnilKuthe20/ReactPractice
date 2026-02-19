import { ERROR, START, SUCCESS } from "./action.type"

console.log("......cretors run......");


export const start = () => {
    return {
        type: START
    }
}

export const success = (data) => {
    return {
        type: SUCCESS,
        payload: data
    }
}

export const err = (message) => {
    return {
        type: ERROR,
        payload: message
    }
}

