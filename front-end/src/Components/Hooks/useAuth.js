import { useContext } from "react";
import { AuthContext } from "../../store/contexts/index";
import { authLogin, authLogout } from "../../store/actions";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../../store/constants";
import { useState } from "react";
import { useEffect } from "react";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    if (auth === undefined) {
        throw new Error("useAuth() must be used inside Auth Provider")
    };

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(true);
    const { dispatch } = auth;

    const signIn = async (email, password) => {
        setError(null)
        setIsLoading(true)
        try {
            const res = await fetch(LOGIN_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if required
                },
                body: JSON.stringify({
                    email,
                    password,
                    // Add any other data you want to send in the request body
                })
            });
            const data = await res.json();

            if (!data.user) {
                throw new Error("Cannot sign in: " + data.message);
            }

            // Update Global User State
            dispatch(authLogin(data.user));

            if (isMounted) {
                setIsLoading(false)
                setError(null)
            }

        } catch (error) {
            if (isMounted) {
                console.log(error);
                setError(error.message)
                setIsLoading(false)
            }
        }
    }

    const signUp = async (name, email, password) => {
        setError(null)
        setIsLoading(true)
        try {
            const res = await fetch(REGISTER_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if required
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    // Add any other data you want to send in the request body
                })
            });
            const data = await res.json();

            if (!data.user) {
                throw new Error("Cannot create user: " + data.message);
            }

            // Update Global User State
            dispatch(authLogin(data.user));

            if (isMounted) {
                setIsLoading(false)
                setError(null)
            }

        } catch (error) {
            if (isMounted) {
                console.log(error);
                setError(error.message);
                setIsLoading(false);
            }
        }
    }

    const signOut = () => {
        dispatch(authLogout());
    }

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    return { ...auth, signIn, signUp, signOut, loading: isLoading, error };
}