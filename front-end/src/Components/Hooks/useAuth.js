import { useContext } from "react";
import { AuthContext } from "../../store/contexts/index";

export const useAuth = () => {
    const auth = useContext(AuthContext)
    if (auth === undefined) {
        throw new Error("useAuth() must be used inside Auth Provider")
    }
    return auth;
}