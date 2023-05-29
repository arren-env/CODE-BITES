import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="min-h-[70vh]">
        <div className="flex flex-col gap-7 items-center">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="font-bold text-2xl font-mono text-black dark:text-myOrange sm:text-3xl ">
                CODE BITES
              </h1>
              <p className="mt-4 text-gray-500">
                Learn how to get the most out of your tech devices, from
                troubleshooting common problems to finding hidden features.
              </p>
            </div>

            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label
                  htmlFor="UserEmail"
                  className="relative block overflow-hidden border-b border-black dark:border-myOrange bg-transparent pt-3 dark:focus-within:border-myOrange "
                >
                  <input
                    type="email"
                    id="UserEmail"
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
                    id="UserPassword"
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
                  <Link className="underline" to="/registration">
                    Sign up
                  </Link>
                </p>

                <a
                  className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-black"
                  href="/download"
                >
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-myOrange transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

                  <span className="relative block border border-current bg-myOrange px-8 py-3">
                    Sign In
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
