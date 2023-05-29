import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link
                to="/"
                className="text-3xl text-black dark:text-myOrange font-mono"
              >
                CODE BITES
              </Link>
            </div>

            <p className="mt-4 text-center text-sm text-black dark:text-white lg:mt-0 lg:text-right">
              Copyright &copy; 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
