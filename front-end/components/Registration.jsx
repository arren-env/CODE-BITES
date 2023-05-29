import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center justify-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl dark:text-myOrange">
              Get started today with{" "}
              <span className="font-mono dark:text-myOrange">CODE BITES</span>
            </h1>

            <p className="mt-4 text-gray-500">
              Learn how to get the most out of your tech devices, from
              troubleshooting common problems to finding hidden features.
            </p>
          </div>

          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label
                htmlFor="UserName"
                className="relative block overflow-hidden border-b border-black dark:border-myOrange bg-transparent pt-3 dark:focus-within:border-myOrange "
              >
                <input
                  type="text"
                  id="UserName"
                  placeholder="Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-myOrange">
                  Name
                </span>
              </label>
            </div>
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
                Already have account?{" "}
                <Link className="underline" to="/login">
                  Sign In
                </Link>
              </p>

              <a
                className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-black"
                href="/download"
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-myOrange transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

                <span className="relative block border border-current bg-myOrange px-8 py-3">
                  Sign Up
                </span>
              </a>
            </div>
          </form>
        </div>

        {/* <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div> */}
      </section>
    </div>
  );
};

export default Registration;
