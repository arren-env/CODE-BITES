
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { ROUTE_REGISTER } from "../../store/constants";
import { parseFormData } from "../../utils";
import { useSignin } from "../Hooks/useSignin";
import { useEffect } from "react";

function LoginForm() {

    const { dispatch, user } = useAuth();
    const {signIn, error, loading} = useSignin();

    const handleLogin = e => {
        e.preventDefault();

        const {email, password} = parseFormData(e.target);
        signIn(email,password);
    }

    useEffect(()=>{
        console.log("User: ",user);
    },[user]);

    return (
        <div className="flex flex-col gap-7 items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-mono text-black dark:text-myOrange sm:text-3xl ">
                        CODE BITES
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Learn how to get the most out of your tech devices, from
                        troubleshooting common problems to finding hidden features.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label
                            htmlFor="UserEmail"
                            className="relative block overflow-hidden border-b border-black dark:border-myOrange bg-transparent pt-3 dark:focus-within:border-myOrange "
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-myOrange">
                                Email
                            </span>
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor="UserEmail"
                            className="relative block overflow-hidden border-b border-black dark:border-myOrange bg-transparent pt-3 dark:focus-within:border-myOrange"
                        >
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-myOrange">
                                Password
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?{" "}
                            <Link className="underline" to={ROUTE_REGISTER}>
                                Sign up
                            </Link>
                        </p>

                        <a
                            className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-black"
                        >
                            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-myOrange transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

                            <button type="submit" className="relative block border border-current bg-myOrange px-8 py-3">
                                Sign In
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;