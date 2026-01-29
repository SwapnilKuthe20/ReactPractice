import { createContext } from "react"

export const user = {
    name: "Swap",
    age: 25,
    address: {
        city: "Nagpur",
        pin: 441905
    }
}


export const UserContext = createContext()

// console.log(userContext, "....userContext");

