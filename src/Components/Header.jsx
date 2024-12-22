import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar";

const Header = () => {

//   const { user } = useContext(AuthContext);
  // console.log("user============> ",user);
  const user = {
    email: "faruk@gmail.com",
    displayName: "faruk(dummy)",
  };

  return (
    <div>
      <div className="flex justify-center">
        {user?.email ? (
          <p>
            Welcome!{" "}
            <span className="text-[#B59F78] font-medium">{user?.email}</span>
          </p>
        ) : (
          ""
        )}
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
