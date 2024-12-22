import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AllArtifacts from "../Components/AllArtifacts";
import AddArtifacts from "../Components/AddArtifacts";
import MyArtifacts from "../Components/MyArtifacts";
import LikedArtifacts from "../Components/LikedArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/addArtifacts",
        element: <AddArtifacts></AddArtifacts>,
      },
      {
        path: "/myArtifacts",
        element: <MyArtifacts></MyArtifacts>,
      },
      {
        path: "/likedArtifacts",
        element: <LikedArtifacts></LikedArtifacts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
