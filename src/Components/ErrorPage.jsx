import { NavLink } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Importing a warning icon
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[#F5EFE7]">
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <div className="text-center">
        {/* Icon for Visual Appeal */}
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-6xl text-red-500 mb-4 " />
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button to Navigate Back to Home */}
        <NavLink to="/">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Back to home
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
