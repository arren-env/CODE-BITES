
import { useState } from "react";
import { useAuth } from "./useAuth";
import { authLogout } from "../../store/actions";

export const useSignout = () => {
    const { dispatch } = useAuth()

    const signOut = () => {
        dispatch(authLogout());
    }
    return { signOut }
}