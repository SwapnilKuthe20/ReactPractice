import { err, start, success } from "./action.creators"

console.log("....fetch user run....");

export const fetchUsers = () => {

    return async (dispatch) => {

        dispatch(start())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            dispatch(success(data))
        } catch (error) {
            dispatch(err(error.message))

        }
    }

}
