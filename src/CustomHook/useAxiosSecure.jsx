import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth"; // Import custom hook for auth context

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your actual API base URL
  withCredentials: true, // Include cookies for authentication
});

const useAxiosSecure = () => {
  const { userSignOut } = useAuth(); // Custom hook for sign-out functionality
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => response, // Pass successful responses through
      (error) => {
        const status = error.response?.status; // Get status code from response

        if (status === 401) {
          // Handle unauthorized errors (e.g., invalid or missing token)
          userSignOut()
            .then(() => {
              navigate("/login"); // Redirect to login page
            })
            .catch((err) => console.error("Error during sign out:", err));
        } else if (status === 403) {
          // Handle forbidden errors (e.g., insufficient permissions)
          console.error("Forbidden access: You don't have permission.");
        }

        return Promise.reject(error); // Forward the error for further handling
      }
    );
  }, [navigate, userSignOut]);

  return axiosInstance;
};

export default useAxiosSecure;

// ........................................
// import axios from "axios";
// import { useEffect } from "react";

// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000",
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//   const { userSignOut } = useAuth(); //use custom hook: useContext.
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosInstance.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         console.log("error stataus in useAxios=====>", error.status);
//         // we already set error: 401 & 403 in server side that's why use here for validate
//         if (error.status === 401 || error.status === 403) {
//           userSignOut()
//             .then(() => {
//               // redirect to login page
//               navigate("/login");
//             })
//             .catch((err) => console.log(err));
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, []);

//   return axiosInstance;
// };

// export default useAxiosSecure;
