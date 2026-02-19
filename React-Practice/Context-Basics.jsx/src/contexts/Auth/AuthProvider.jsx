import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    const value = {
        count,
        setCount
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>

        </div>
    );
}

export default AuthProvider;


