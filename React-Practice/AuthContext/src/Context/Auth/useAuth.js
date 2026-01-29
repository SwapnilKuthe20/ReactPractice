import { useContext } from "react";
import { AuthContext } from "./AuthContext";


export const useAuth = () => {
    const userContext = useContext(AuthContext)

    if (!useContext) {
        throw Error("useAuth must be used inside AuthProvider")
    }
    return userContext
}

