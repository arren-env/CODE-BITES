import { useEffect, useState } from "react"
import { authLogin } from "../../store/actions"
import { LOGIN_ENDPOINT } from "../../store/constants"
import { useAuth } from "./useAuth"

export const useSignin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(true)
    const { dispatch } = useAuth()

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

            if (!res) {
                throw new Error("Cannot sign in to the account!")
            }

            const user = (await res.json()).user;
            if (!user) {
                throw new Error("Cannot sign in to the account!")
            }

            // Update Global User State
            dispatch(authLogin(user));

            if (isMounted) {
                setIsLoading(false)
                setError(null)
            }

        } catch (error) {
            if (isMounted) {
                setError(error.message)
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        setIsMounted(true)
        return () => {
            setIsMounted(false)
        }
    }, [])

    return { signIn, error, loading: isLoading }
}