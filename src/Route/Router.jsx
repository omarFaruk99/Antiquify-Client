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
import PrivateRouter from "./PrivateRouter";

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
        element: (
          <PrivateRouter>
            <AddArtifacts></AddArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRouter>
            <MyArtifacts></MyArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRouter>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/artifacts/details/:id",
        element: (
          <PrivateRouter>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artifacts/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRouter>
            <UpdateArtifact></UpdateArtifact>
          </PrivateRouter>
        ),
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