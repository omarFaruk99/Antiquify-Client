import { NavLink } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Importing a warning icon

const NotFound = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[#F5EFE7]">
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
        <NavLink
          to="/"
          className="inline-block px-6 py-3 bg-[#4F709C] text-white font-semibold rounded-lg hover:bg-[#213555] transition duration-300"
        >
          Go Back to Home
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
