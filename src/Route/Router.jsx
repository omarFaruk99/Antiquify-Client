import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AllArtifacts from "../Components/AllArtifacts";
import AddArtifacts from "../Components/AddArtifacts";
import MyArtifacts from "../Components/MyArtifacts";
import LikedArtifacts from "../Components/LikedArtifacts";
import ArtifactDetails from "../Components/ArtifactDetails";
import UpdateArtifact from "../Components/UpdateArtifact";
import ErrorPage from "../Components/ErrorPage";

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
        path: "/artifacts/details/:id",
        element: <ArtifactDetails></ArtifactDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artifacts/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateArtifact></UpdateArtifact>,
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
