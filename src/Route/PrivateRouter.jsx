import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { HashLoader } from "react-spinners";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);
  // const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* <span className="loading loading-bars loading-lg"></span> */}
        <HashLoader size={80} color="#ffae42" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
